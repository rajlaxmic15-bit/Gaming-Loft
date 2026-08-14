import { useRouter, type PageRoute } from "../context/RouterContext";
import { Corners, Reveal } from "./ui";

const OTHER_PAGES: { label: string; route: PageRoute; tag: string }[] = [
  { label: "EXPERIENCE", route: "experience", tag: "5 Ways To Play" },
  { label: "ARENA", route: "arena", tag: "4,000 Sq Ft Floor" },
  { label: "PRICING", route: "pricing", tag: "Passes & Packages" },
  { label: "GALLERY", route: "gallery", tag: "Real Loft Photos" },
  { label: "WHY US", route: "why-us", tag: "5 Pillars Of Excellence" },
];

export default function RedirectBanner({ currentPage }: { currentPage: PageRoute }) {
  const { navigateTo } = useRouter();

  const filteredPages = OTHER_PAGES.filter((p) => p.route !== currentPage);

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-panel/80 py-20">
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative border border-neon/30 bg-void/90 p-8 md:p-12 backdrop-blur-xl">
            <Corners color="rgba(34,242,255,0.85)" size={20} />

            <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div>
                <p className="font-hud text-neon text-xs tracking-[0.4em] uppercase">
                  [ NAVIGATION HUB ]
                </p>
                <h3 className="font-display mt-2 text-3xl text-white uppercase sm:text-4xl md:text-5xl">
                  Ready to return to the <span className="text-neon">Main Page?</span>
                </h3>
                <p className="font-hud mt-2 max-w-lg text-xs leading-relaxed text-white/55 md:text-sm">
                  Jump back to the main homepage overview, or explore other gaming sections and arenas below.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo("home")}
                  className="clip-btn bg-neon px-8 py-4 font-hud text-xs font-bold tracking-[0.3em] text-[#03161c] uppercase transition-all duration-300 glow-box-cyan hover:bg-white"
                >
                  ← Redirect to Main Page
                </button>
                <button
                  onClick={() => navigateTo("book")}
                  className="clip-btn bg-ember px-8 py-4 font-hud text-xs font-bold tracking-[0.3em] text-[#1a0700] uppercase transition-all duration-300 glow-box-ember hover:bg-white"
                >
                  Book Session
                </button>
              </div>
            </div>

            {/* Quick links to other sections */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="font-hud mb-4 text-[10px] tracking-[0.3em] text-white/40 uppercase">
                EXPLORE OTHER SECTIONS //
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {filteredPages.map((p) => (
                  <button
                    key={p.route}
                    onClick={() => navigateTo(p.route)}
                    className="group flex flex-col items-start border border-white/10 bg-white/5 p-3.5 text-left transition-all duration-300 hover:border-neon hover:bg-neon/10"
                  >
                    <span className="font-hud text-[9px] tracking-[0.2em] text-neon uppercase">
                      {p.tag}
                    </span>
                    <span className="font-display mt-1 text-sm text-white uppercase group-hover:text-neon">
                      {p.label} →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
