import { useRouter } from "../context/RouterContext";
import { Corners, Reveal } from "./ui";

interface PageHeaderProps {
  sectionNum?: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
}

export default function PageHeader({
  tag,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  const { navigateTo } = useRouter();

  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/10 bg-gradient-to-b from-void/90 via-panel/50 to-void">
      {/* HUD background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-neon/8 blur-[140px]" />
      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Navigation & Breadcrumb HUD */}
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => navigateTo("home")}
              className="clip-btn group inline-flex items-center gap-2 border border-neon/50 bg-neon/10 px-5 py-2.5 font-hud text-[11px] font-bold tracking-[0.25em] text-neon uppercase transition-all duration-300 hover:bg-neon hover:text-[#03161c] glow-box-cyan"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span>Redirect To Main Page</span>
            </button>

            <div className="flex items-center gap-2 font-hud text-[10px] tracking-[0.3em] text-white/50 uppercase md:text-xs">
              <button
                onClick={() => navigateTo("home")}
                className="transition-colors hover:text-neon"
              >
                MAIN PAGE
              </button>
              <span className="text-neon/70">//</span>
              <span className="text-neon">{tag}</span>
            </div>
          </div>
        </Reveal>

        {/* Title & Description */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal delay={0.08}>
            <h1 className="font-display text-[13vw] leading-[0.88] tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
              {title} <span className="text-neon glow-cyan">{highlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="relative border border-white/10 bg-void/80 p-6 md:p-7 backdrop-blur-md">
              <Corners color="rgba(34,242,255,0.7)" size={16} />
              <p className="font-hud text-xs leading-relaxed text-white/70 md:text-sm">
                {description}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 font-hud text-[10px] tracking-[0.25em] text-white/40 uppercase">
                <span>STATUS // ONLINE</span>
                <span className="text-mint">● ARENA ACTIVE</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
