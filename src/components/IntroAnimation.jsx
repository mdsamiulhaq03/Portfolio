import { useEffect, useRef } from "react";
import gsap from "gsap";

const LETTERS = ["S", "A", "M", "I", "U", "L"];

const IntroAnimation = ({ onComplete }) => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const lineRef = useRef(null);
  const tagRef = useRef(null);
  const lettersRef = useRef([]);
  const counterRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          onComplete?.();
        },
      });

      // Counter counts up 0→100
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 1.1,
        ease: "power2.inOut",
        onUpdate() {
          if (counterRef.current)
            counterRef.current.textContent = Math.round(counter.val) + "%";
        },
      });

      // Line sweeps in from center
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.55, ease: "power3.out" },
        "-=0.6"
      );

      // Tag fades in above the line
      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        "-=0.4"
      );

      // Letters rise up with stagger
      tl.fromTo(
        lettersRef.current,
        { opacity: 0, y: 32, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.055,
          ease: "power3.out",
        },
        "-=0.25"
      );

      // Brief hold
      tl.to({}, { duration: 0.28 });

      // Everything fades as split begins
      tl.to(
        [tagRef.current, lineRef.current, counterRef.current, ...lettersRef.current],
        { opacity: 0, duration: 0.22, ease: "power2.in" }
      );

      // Curtain split — top up, bottom down
      tl.to(
        topRef.current,
        { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
        "-=0.1"
      ).to(
        bottomRef.current,
        { yPercent: 100, duration: 0.9, ease: "power4.inOut" },
        "<"
      );
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  const panelStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    background: "#07070a",
    willChange: "transform",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {/* Top panel */}
      <div
        ref={topRef}
        style={{
          ...panelStyle,
          top: 0,
          height: "50%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "28px",
        }}
      >
        {/* Noise grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
          }}
        />

        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* < portfolio /> tag */}
          <div
            ref={tagRef}
            style={{ opacity: 0, marginBottom: "18px", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                letterSpacing: "0.28em",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
              }}
            >
              portfolio
            </span>
            <span style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
          </div>

          {/* SAMIUL letters */}
          <div
            style={{
              display: "flex",
              gap: "0",
              perspective: "600px",
              marginBottom: "20px",
            }}
          >
            {LETTERS.map((l, i) => (
              <span
                key={i}
                ref={(el) => (lettersRef.current[i] = el)}
                style={{
                  fontSize: "clamp(52px, 9vw, 100px)",
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  color:
                    i === 0
                      ? "rgba(255,255,255,0.95)"
                      : `rgba(255,255,255,${0.55 + i * 0.07})`,
                  lineHeight: 1,
                  opacity: 0,
                  fontFamily:
                    '"Inter var", "Inter", "Helvetica Neue", sans-serif',
                  display: "inline-block",
                }}
              >
                {l}
              </span>
            ))}
          </div>

          {/* Glow line at seam */}
          <div
            ref={lineRef}
            style={{
              height: "1px",
              width: "100%",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.08) 90%, transparent 100%)",
              boxShadow: "0 0 24px 1px rgba(255,255,255,0.12)",
              transformOrigin: "center",
            }}
          />
        </div>
      </div>

      {/* Bottom panel */}
      <div
        ref={bottomRef}
        style={{
          ...panelStyle,
          bottom: 0,
          height: "50%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          paddingTop: "14px",
          paddingRight: "32px",
        }}
      >
        {/* Noise grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
          }}
        />
        {/* Loading counter */}
        <span
          ref={counterRef}
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          0%
        </span>
      </div>
    </div>
  );
};

export default IntroAnimation;
