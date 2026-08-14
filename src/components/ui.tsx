import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

/* ---------------- Section heading block ---------------- */
export function SectionHead({
  kicker,
  lines,
  outline,
  right,
}: {
  kicker: string;
  lines: string[];
  outline?: boolean;
  right?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
      <Reveal>
        <div className="font-hud text-neon text-xs tracking-[0.5em] md:text-sm">
          <span className="text-neon/60">[ </span>
          {kicker}
          <span className="text-neon/60"> ]</span>
        </div>
        <h2 className="font-display mt-4 text-[13vw] leading-[0.9] tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
          {lines.map((l, i) => (
            <span key={i} className={cn("block", outline && i === lines.length - 1 && "text-outline")}>
              {l}
            </span>
          ))}
        </h2>
      </Reveal>
      {right && <Reveal delay={0.15}>{right}</Reveal>}
    </div>
  );
}

/* ---------------- Scroll reveal wrapper ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- HUD corner brackets ---------------- */
export function Corners({ color = "rgba(34,242,255,0.7)", size = 14 }: { color?: string; size?: number }) {
  const base = "absolute w-[14px] h-[14px] pointer-events-none";
  return (
    <>
      <span className={cn(base, "top-0 left-0 border-t-2 border-l-2")} style={{ borderColor: color, width: size, height: size }} />
      <span className={cn(base, "top-0 right-0 border-t-2 border-r-2")} style={{ borderColor: color, width: size, height: size }} />
      <span className={cn(base, "bottom-0 left-0 border-b-2 border-l-2")} style={{ borderColor: color, width: size, height: size }} />
      <span className={cn(base, "bottom-0 right-0 border-b-2 border-r-2")} style={{ borderColor: color, width: size, height: size }} />
    </>
  );
}

/* ---------------- Animated counter ---------------- */
export function Counter({
  value,
  suffix,
  className,
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- Primary buttons ---------------- */
export function NeonButton({
  children,
  href,
  variant = "solid",
  className,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "ember";
  className?: string;
  onClick?: () => void;
}) {
  const styles = {
    solid:
      "bg-neon text-[#03161c] hover:bg-white hover:text-[#03161c] glow-box-cyan",
    outline:
      "border border-neon/60 text-neon hover:bg-neon/10 hover:border-neon",
    ember:
      "bg-ember text-[#1a0700] hover:bg-white hover:text-[#1a0700] glow-box-ember",
  }[variant];

  return (
    <a
      href={href ?? "#book"}
      onClick={onClick}
      className={cn(
        "clip-btn group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-hud text-xs font-bold tracking-[0.35em] uppercase transition-all duration-300 md:px-10 md:py-5 md:text-sm",
        styles,
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
      </span>
    </a>
  );
}

/* ---------------- Marquee strip ---------------- */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden border-y border-white/10 bg-panel/60 py-4", className)}>
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-xl tracking-wide text-white/90 uppercase md:text-2xl">{t}</span>
            <span className="text-neon text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
