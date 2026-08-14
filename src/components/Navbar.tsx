import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOGO } from "../data/content";
import { cn } from "../utils/cn";
import { useRouter, type PageRoute } from "../context/RouterContext";

interface NavItem {
  label: string;
  route: PageRoute;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "EXPERIENCE", route: "experience", href: "/experience" },
  { label: "ARENA", route: "arena", href: "/arena" },
  { label: "PRICING", route: "pricing", href: "/pricing" },
  { label: "GALLERY", route: "gallery", href: "/gallery" },
  { label: "WHY US", route: "why-us", href: "/why-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { currentPage, navigateTo, isHome } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    navigateTo(route);
    setOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "border-b border-neon/15 bg-void/90 backdrop-blur-xl shadow-lg shadow-black/40"
            : "border-b border-transparent bg-gradient-to-b from-void/80 to-transparent"
        )}
      >
        {/* top HUD strip */}
        <div className="hidden items-center justify-between border-b border-white/5 px-6 py-1.5 font-hud text-[10px] tracking-[0.3em] text-white/40 uppercase lg:flex">
          <span>
            <span className="text-neon">●</span> OPEN NOW — 24 / 7
          </span>
          <span>THE GAMING LOFT — PREMIUM GAMING LOUNGE</span>
          <span>
            +91 98765 43210 <span className="text-neon/70">//</span> BOOKINGS
          </span>
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          {/* logo badge - redirects to Main Page */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center gap-3 cursor-pointer"
            title="Redirect to Main Page"
          >
            <div
              className="clip-panel relative h-12 w-20 overflow-hidden bg-[#e9e9e9] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(34,242,255,0.45)] md:h-14 md:w-24"
              style={{ background: "#e9e9e9" }}
            >
              <img
                src={LOGO}
                alt="The Gaming Loft"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="leading-none">
              <span className="font-display block text-lg tracking-widest text-white uppercase md:text-xl">
                The Gaming <span className="text-neon">Loft</span>
              </span>
              <span className="font-hud mt-1 block text-[9px] tracking-[0.45em] text-white/40 uppercase">
                Play · Compete · Win
              </span>
            </div>
          </a>

          {/* desktop links for separate pages */}
          <ul className="hidden items-center gap-7 lg:flex">
            {!isHome && (
              <li>
                <button
                  onClick={(e) => handleNavClick(e, "home")}
                  className="font-hud flex items-center gap-1 text-[11px] font-bold tracking-[0.25em] text-neon uppercase transition-colors hover:text-white"
                >
                  <span>←</span> MAIN PAGE
                </button>
              </li>
            )}
            {NAV_ITEMS.map((l) => {
              const isActive = currentPage === l.route;
              return (
                <li key={l.route}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.route)}
                    className={cn(
                      "font-hud group relative text-[11px] font-semibold tracking-[0.3em] uppercase transition-colors cursor-pointer py-1",
                      isActive ? "text-neon font-bold" : "text-white/70 hover:text-neon"
                    )}
                  >
                    {l.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-neon shadow-[0_0_8px_#22f2ff] transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={(e) => handleNavClick(e, "book")}
              className="clip-btn hidden items-center gap-2 bg-neon px-6 py-2.5 font-hud text-[11px] font-bold tracking-[0.3em] text-[#03161c] uppercase transition-all duration-300 glow-box-cyan hover:bg-white sm:inline-flex cursor-pointer"
            >
              Book Now
            </button>
            {/* mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/15 bg-white/5 lg:hidden"
            >
              <span className={cn("h-0.5 w-6 bg-neon transition-all duration-300", open && "translate-y-2 rotate-45")} />
              <span className={cn("h-0.5 w-6 bg-neon transition-all duration-300", open && "opacity-0")} />
              <span className={cn("h-0.5 w-6 bg-neon transition-all duration-300", open && "-translate-y-2 -rotate-45")} />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-void/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid-bg absolute inset-0 opacity-40" />

            <motion.button
              onClick={(e) => handleNavClick(e, "home")}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display relative z-10 py-2 text-3xl tracking-wide text-neon uppercase transition-colors"
            >
              ← Main Page
            </motion.button>

            {NAV_ITEMS.map((l, i) => (
              <motion.a
                key={l.route}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.route)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * (i + 1) }}
                className={cn(
                  "font-display relative z-10 py-2.5 text-3xl tracking-wide uppercase transition-colors",
                  currentPage === l.route ? "text-neon" : "text-white hover:text-neon"
                )}
              >
                {l.label}
              </motion.a>
            ))}

            <motion.button
              onClick={(e) => handleNavClick(e, "book")}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="clip-btn relative z-10 mt-6 bg-neon px-10 py-4 font-hud text-xs font-bold tracking-[0.35em] text-[#03161c] uppercase"
            >
              Book Your Session
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
