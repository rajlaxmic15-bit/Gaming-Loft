import { IMG, STATS } from "../data/content";
import { Corners, Counter, Reveal, SectionHead } from "./ui";

export default function Arena() {
  return (
    <section id="arena" className="relative overflow-hidden bg-panel py-24 md:py-32">
      {/* backdrop */}
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-vio/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          lines={["The arena", "is waiting."]}
          right={
            <p className="font-hud max-w-sm text-sm leading-relaxed text-white">
              A comfortable place to play, compete, and spend time with friends, with
              quality equipment and everything set up to keep the focus on the game.
            </p>
          }
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
          {/* large image with HUD frame */}
          <Reveal className="relative">
            <div className="relative h-[340px] overflow-hidden md:h-[520px]">
              <img
                src={IMG.arena}
                alt="The Gaming Loft arena floor"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
              />
              <div className="scanlines absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-void/30" />

              {/* corner brackets */}
              <div className="absolute inset-3 pointer-events-none">
                <Corners color="rgba(34,242,255,0.9)" size={22} />
              </div>

              {/* floating HUD chip */}
              <div className="absolute top-5 left-5 flex items-center gap-2 border border-neon/40 bg-void/70 px-3.5 py-2 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute h-full w-full rounded-full bg-mint" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-mint" />
                </span>
                <span className="font-hud text-[9px] font-semibold tracking-[0.3em] text-white/80 uppercase md:text-[10px]">
                  LIVE — Arena Cam 01
                </span>
              </div>

              {/* bottom caption */}
              <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between">
                <div>
                  <p className="font-hud text-[9px] tracking-[0.4em] text-neon uppercase">The Loft — Main Floor</p>
                  <p className="font-display mt-1 text-2xl text-white uppercase md:text-4xl">Built to Compete</p>
                </div>
                <span className="font-display text-outline-dim text-4xl md:text-6xl">GL</span>
              </div>
            </div>
          </Reveal>

          {/* statistics grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={0.08 * i}
                className="group relative border border-white/10 bg-void/70 p-6 transition-all duration-500 hover:border-neon/50 hover:bg-panel md:p-8"
              >
                <Corners color="rgba(255,255,255,0.12)" />
                <span className="font-hud text-[9px] tracking-[0.4em] text-white/30 uppercase">
                  STAT.{String(i + 1).padStart(2, "0")}
                </span>
                <div className="font-display mt-4 text-5xl leading-none text-white transition-colors duration-500 group-hover:text-neon md:text-7xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="font-hud mt-3 text-[10px] font-bold tracking-[0.3em] text-neon uppercase md:text-xs">
                  {s.label}
                </p>
                <p className="font-hud mt-1.5 text-xs leading-relaxed text-white/45">{s.sub}</p>
                {/* hover scan bar */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-neon shadow-[0_0_12px_#22f2ff] transition-all duration-500 group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
