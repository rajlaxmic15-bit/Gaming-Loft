import { useState } from "react";
import PageHeader from "../components/PageHeader";
import RedirectBanner from "../components/RedirectBanner";
import { Corners, Reveal } from "../components/ui";
import { IMG } from "../data/content";
import { cn } from "../utils/cn";

interface GalleryPhoto {
  id: string;
  category: "all" | "billiards" | "console" | "tournaments" | "cafe";
  src: string;
  title: string;
  subtitle: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: "1", category: "billiards", src: IMG.billiardRoom, title: "CHAMPIONSHIP SNOOKER ARENA", subtitle: "Full 12ft tournament slate with laser leveling" },
  { id: "2", category: "tournaments", src: IMG.lounge1, title: "SQUAD NIGHT LEAGUE", subtitle: "Friday night 8-ball community shootout" },
  { id: "3", category: "billiards", src: IMG.pool, title: "ENGLISH 8-BALL TABLE", subtitle: "Tournament felt and shadowless canopy lighting" },
  { id: "4", category: "console", src: IMG.ps5, title: "PS5 4K OLED STATION", subtitle: "65-inch 120Hz display with DualSense Edge" },
  { id: "5", category: "cafe", src: IMG.lounge2, title: "THE CHILLOUT FUEL BAR", subtitle: "Craft cold brews and player refreshment corner" },
  { id: "6", category: "tournaments", src: IMG.foosball, title: "2V2 FOOSBALL WAR", subtitle: "Tornado competition series with high energy banter" },
  { id: "7", category: "console", src: IMG.controller2, title: "PRO CONTROLLER DOCK", subtitle: "Cleaned and sanitized after every single booking" },
  { id: "8", category: "tournaments", src: IMG.keyboard, title: "WEEKEND TOURNAMENT DESK", subtitle: "Live bracket displays and trophy presentations" },
  { id: "9", category: "billiards", src: IMG.snooker, title: "STRACHAN 6811 FELT", subtitle: "Pure wool high-speed baize for spin masters" },
  { id: "10", category: "billiards", src: IMG.tableTennis, title: "ITTF SPIN ARENA", subtitle: "Stiga pro setup with 25mm tournament bounce" },
  { id: "11", category: "tournaments", src: IMG.foosball2, title: "LATE NIGHT DERBY", subtitle: "2 AM high stakes showdowns with friends" },
  { id: "12", category: "cafe", src: IMG.arena, title: "THE 4,000 SQ FT LOFT", subtitle: "Wide angle perspective of the entire gaming floor" },
];

const CATEGORIES = [
  { id: "all", label: "ALL SHOTS" },
  { id: "billiards", label: "BILLIARDS & SNOOKER" },
  { id: "console", label: "PS5 & CONSOLE" },
  { id: "tournaments", label: "TOURNAMENTS & EVENTS" },
  { id: "cafe", label: "LOUNGE & VIBE" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = activeCategory === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-void text-white">
      <PageHeader
        sectionNum="SEC.05"
        tag="PHOTO VAULT"
        title="Inside The"
        highlight="Real Loft"
        description="No 3D renders, no misleading stock footage. Real photographs captured during live competitive matches, late-night tournaments, and weekend squad sessions."
      />

      {/* Filter Tabs */}
      <section className="py-12 border-b border-white/10 bg-panel/50">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "clip-btn px-6 py-3 font-hud text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-neon text-[#03161c] glow-box-cyan"
                    : "border border-white/15 bg-void/80 text-white/60 hover:border-white/40 hover:text-white"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <Reveal key={photo.id} delay={0.05 * (index % 6)}>
                <div
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative h-[320px] overflow-hidden border border-white/15 bg-panel cursor-pointer transition-all duration-500 hover:border-neon"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <Corners color="rgba(34,242,255,0.6)" size={14} />

                  <div className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center bg-void/80 border border-white/20 text-white group-hover:text-neon group-hover:border-neon transition-colors">
                    🔍
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-hud text-[9px] tracking-[0.3em] text-neon uppercase">
                      PHOTO // {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl text-white uppercase mt-1">
                      {photo.title}
                    </h3>
                    <p className="font-hud text-xs text-white/50 mt-1 line-clamp-1">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 p-5 backdrop-blur-xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full border border-neon/50 bg-panel p-4 md:p-6"
          >
            <Corners color="#22f2ff" size={20} />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 bg-void border border-white/30 px-3 py-1 text-white font-hud text-xs uppercase hover:bg-neon hover:text-black"
            >
              ✕ Close
            </button>
            <div className="h-[300px] md:h-[480px] overflow-hidden mt-8">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl text-white uppercase">{selectedPhoto.title}</h3>
                <p className="font-hud text-xs text-white/60 mt-1">{selectedPhoto.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="clip-btn bg-neon px-6 py-2.5 font-hud text-xs font-bold text-[#03161c] uppercase"
              >
                Back To Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      <RedirectBanner currentPage="gallery" />
    </div>
  );
}
