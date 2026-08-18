import { useEffect, useRef, useState } from "react";

export default function GlowCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse) and no reduced motion preference
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);

    const mouse = { x: -100, y: -100 };
    const dot = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    const glow = { x: -100, y: -100 };
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, select, textarea, [role="button"], .clip-btn, [tabindex="0"], label, summary'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Smooth Lerp Animation Loop
    const render = () => {
      // Fast responsive lerp for sharp center dot
      dot.x += (mouse.x - dot.x) * 0.45;
      dot.y += (mouse.y - dot.y) * 0.45;

      // Responsive lerp for interactive HUD ring
      ring.x += (mouse.x - ring.x) * 0.22;
      ring.y += (mouse.y - ring.y) * 0.22;

      // Fluid inertial lerp for soft ambient glow
      glow.x += (mouse.x - glow.x) * 0.12;
      glow.y += (mouse.y - glow.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      {/* 1. Ambient Soft Radial Neon Glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-20 h-[170px] w-[170px] rounded-full transition-opacity duration-300 will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(34, 242, 255, 0.24) 0%, rgba(34, 242, 255, 0.1) 38%, rgba(138, 92, 255, 0.04) 65%, transparent 75%)"
            : "radial-gradient(circle, rgba(34, 242, 255, 0.14) 0%, rgba(34, 242, 255, 0.05) 40%, rgba(34, 242, 255, 0.01) 70%, transparent 80%)",
          filter: "blur(8px)",
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />

      {/* 2. Precision Outer HUD Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-all duration-200 ease-out will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isClicking
            ? "h-7 w-7 border-mint bg-mint/10 scale-90"
            : isHovered
              ? "h-11 w-11 border-neon bg-neon/10 shadow-[0_0_16px_rgba(34,242,255,0.4)] scale-110"
              : "h-8 w-8 border-neon/40 shadow-[0_0_8px_rgba(34,242,255,0.15)] scale-100"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />

      {/* 3. Minimal Circular Center Point */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-all duration-150 ease-out will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isClicking
            ? "h-1.5 w-1.5 bg-mint shadow-[0_0_10px_#b4ff39]"
            : isHovered
              ? "h-1.5 w-1.5 bg-white shadow-[0_0_12px_#22f2ff]"
              : "h-1.5 w-1.5 bg-neon shadow-[0_0_8px_#22f2ff]"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
    </>
  );
}
