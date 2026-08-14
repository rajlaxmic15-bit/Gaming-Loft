import { motion } from "framer-motion";
import { HERO_VIDEO } from "../data/content";
import { NeonButton } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* cinematic video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO.src}
        poster={HERO_VIDEO.poster}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/85 via-void/55 to-void" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,6,10,0.55)_100%)]" />
      <div className="scanlines absolute inset-0" />
      <div className="noise absolute inset-0" />
      <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* side HUD rails */}
      <div className="absolute top-1/2 left-5 hidden -translate-y-1/2 flex-col items-center gap-6 xl:flex">
        <span className="writing-vertical font-hud text-[10px] tracking-[0.5em] text-white/30 uppercase">Scroll to begin</span>
        <span className="h-24 w-px bg-gradient-to-b from-neon to-transparent" />
      </div>
      <div className="absolute top-1/2 right-5 hidden -translate-y-1/2 flex-col items-center gap-6 xl:flex">
        <span className="h-24 w-px bg-gradient-to-t from-neon to-transparent" />
        <span className="writing-vertical font-hud text-[10px] tracking-[0.5em] text-white/30 uppercase">Est. 2025 — India</span>
      </div>

      {/* center content */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-32 pb-24 text-center md:pt-36">
        {/* status chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="font-hud mb-8 inline-flex items-center gap-3 border border-neon/30 bg-void/60 px-5 py-2 text-[10px] font-semibold tracking-[0.45em] text-neon uppercase backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-neon" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          Premium Gaming Lounge — Now Open
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="font-display text-[16vw] leading-[0.85] tracking-tight text-white uppercase sm:text-8xl md:text-9xl lg:text-[11rem]"
        >
          <span className="block">
            Play. <span className="text-neon glow-cyan">Compete.</span>
          </span>
          <span className="text-outline-solid block text-[9vw] sm:text-6xl md:text-8xl lg:text-9xl">
            Experience the
          </span>
          <span className="block text-[9vw] sm:text-6xl md:text-8xl lg:text-9xl">
            Difference<span className="text-neon">.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="font-hud mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/60 md:text-base"
        >
          Pool · Snooker · Table Tennis · Foosball · PS5 — one loft, five arenas and an
          atmosphere built for champions. Lock in your session before the tables go hot.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NeonButton href="#experience" variant="solid" className="w-full sm:w-auto">
            Explore Games
          </NeonButton>
          <NeonButton href="#book" variant="outline" className="w-full sm:w-auto">
            Book Your Session
          </NeonButton>
        </motion.div>
      </div>

      {/* bottom HUD bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/10 bg-void/70 backdrop-blur-md md:block"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10">
          {[
            ["GAMES", "05+"],
            ["TABLES LIVE", "12"],
            ["PLAYERS TONIGHT", "86"],
            ["OPEN", "24/7"],
          ].map(([label, val], i) => (
            <div key={label} className="flex items-center justify-between px-6 py-4">
              <span className="font-hud text-[10px] tracking-[0.35em] text-white/40 uppercase">{label}</span>
              <span className={i === 3 ? "font-display text-xl text-mint" : "font-display text-xl text-neon"}>{val}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
