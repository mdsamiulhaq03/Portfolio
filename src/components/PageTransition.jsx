import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const PageTransition = () => {
  const lineRef = useRef(null);
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    const tl = gsap.timeline();

    tl.set(lineRef.current, { left: "-4px", opacity: 1 }).to(lineRef.current, {
      left: "100%",
      duration: 0.55,
      ease: "power2.inOut",
      onComplete: () => gsap.set(lineRef.current, { opacity: 0 }),
    });

    return () => tl.kill();
  }, [location.pathname]);

  return (
    <div
      ref={lineRef}
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: "-4px",
        width: "3px",
        opacity: 0,
        zIndex: 9999,
        pointerEvents: "none",
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.4) 80%, transparent 100%)",
        boxShadow:
          "0 0 12px 4px rgba(255,255,255,0.15), 0 0 40px 12px rgba(255,255,255,0.06)",
        willChange: "left",
      }}
    />
  );
};

export default PageTransition;
