import { useEffect, useRef } from "react";
import {
  geoOrthographic,
  geoPath,
  geoBounds,
  geoGraticule,
} from "d3-geo";
import { timer } from "d3-timer";
import worldData from "@/assets/data/world-land.json";

const DOT_SPACING = 16;
const STEP = DOT_SPACING * 0.08;

function pointInPolygon(point, polygon) {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function pointInFeature(point, feature) {
  const { type, coordinates } = feature.geometry;
  if (type === "Polygon") {
    if (!pointInPolygon(point, coordinates[0])) return false;
    for (let i = 1; i < coordinates.length; i++) {
      if (pointInPolygon(point, coordinates[i])) return false;
    }
    return true;
  }
  if (type === "MultiPolygon") {
    for (const polygon of coordinates) {
      if (pointInPolygon(point, polygon[0])) {
        let inHole = false;
        for (let i = 1; i < polygon.length; i++) {
          if (pointInPolygon(point, polygon[i])) { inHole = true; break; }
        }
        if (!inHole) return true;
      }
    }
  }
  return false;
}

let cachedDots = null;

function computeDots() {
  if (cachedDots) return cachedDots;
  const dots = [];
  for (const feature of worldData.features) {
    const [[minLng, minLat], [maxLng, maxLat]] = geoBounds(feature);
    for (let lng = minLng; lng <= maxLng; lng += STEP) {
      for (let lat = minLat; lat <= maxLat; lat += STEP) {
        if (pointInFeature([lng, lat], feature)) dots.push([lng, lat]);
      }
    }
  }
  cachedDots = dots;
  return dots;
}

export default function RotatingEarth({ width = 800, height = 600, className = "" }) {
  const canvasRef = useRef(null);
  const visibleRef = useRef(true);
  const dotsRef = useRef(cachedDots ?? []);

  // Compute dots lazily after mount so the main thread isn't blocked on load
  useEffect(() => {
    if (cachedDots) return;
    const id = setTimeout(() => {
      dotsRef.current = computeDots();
    }, 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const containerWidth = Math.min(width, window.innerWidth - 40);
    const containerHeight = Math.min(height, window.innerHeight - 100);
    const radius = Math.min(containerWidth, containerHeight) / 2.5;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;
    context.scale(dpr, dpr);

    const projection = geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = geoPath().projection(projection).context(context);
    const graticule = geoGraticule();

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight);
      const currentScale = projection.scale();
      const sf = currentScale / radius;

      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
      context.fillStyle = "#000000";
      context.fill();
      context.strokeStyle = "#ffffff";
      context.lineWidth = 2 * sf;
      context.stroke();

      context.beginPath();
      path(graticule());
      context.strokeStyle = "#ffffff";
      context.lineWidth = 1 * sf;
      context.globalAlpha = 0.25;
      context.stroke();
      context.globalAlpha = 1;

      context.beginPath();
      worldData.features.forEach((feature) => path(feature));
      context.strokeStyle = "#ffffff";
      context.lineWidth = 1 * sf;
      context.stroke();

      for (const [lng, lat] of dotsRef.current) {
        const projected = projection([lng, lat]);
        if (
          projected &&
          projected[0] >= 0 && projected[0] <= containerWidth &&
          projected[1] >= 0 && projected[1] <= containerHeight
        ) {
          context.beginPath();
          context.arc(projected[0], projected[1], 1.2 * sf, 0, 2 * Math.PI);
          context.fillStyle = "#999999";
          context.fill();
        }
      }
    };

    const rotation = [0, 0];
    let autoRotate = true;

    // Pause render loop when globe is scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const rotationTimer = timer(() => {
      if (!visibleRef.current) return;
      if (autoRotate) {
        rotation[0] += 0.5;
        projection.rotate(rotation);
        render();
      }
    });

    render();

    const handleMouseDown = (event) => {
      autoRotate = false;
      const startX = event.clientX;
      const startY = event.clientY;
      const startRotation = [...rotation];

      const handleMouseMove = (e) => {
        rotation[0] = startRotation[0] + (e.clientX - startX) * 0.5;
        rotation[1] = Math.max(-90, Math.min(90, startRotation[1] - (e.clientY - startY) * 0.5));
        projection.rotate(rotation);
        render();
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        setTimeout(() => { autoRotate = true; }, 10);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleWheel = (event) => {
      event.preventDefault();
      const sf = event.deltaY > 0 ? 0.9 : 1.1;
      projection.scale(Math.max(radius * 0.5, Math.min(radius * 3, projection.scale() * sf)));
      render();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("wheel", handleWheel);

    return () => {
      rotationTimer.stop();
      observer.disconnect();
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [width, height]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-lg"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
