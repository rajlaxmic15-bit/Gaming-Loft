import { useState, type FormEvent } from "react";
import { GAMES } from "../data/content";
import { Corners, Marquee, Reveal } from "./ui";

export default function CTA() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const game = (formData.get("game") as string) || "pool";
    const date = (formData.get("date") as string) || "";
    const time = (formData.get("time") as string) || "";

    const selectedGameObj = GAMES.find((g) => g.id === game);
    const gameName = selectedGameObj ? selectedGameObj.name : game.toUpperCase();

    const message =
      `*🎮 NEW SLOT RESERVATION — THE GAMING LOFT*\n\n` +
      `*👤 Player Details:*\n` +
      `• *Full Name:* ${name.trim()}\n` +
      `• *Phone / WhatsApp Number:* ${phone.trim()}\n\n` +
      `*🕹️ Booking Information:*\n` +
      `• *Selected Game Arena:* ${gameName}\n` +
      (date ? `• *Booking Date:* ${date}\n` : "") +
      (time ? `• *Preferred Time Slot:* ${time}\n` : "") +
      `\nPlease confirm my slot reservation. Thank you!`;

    const receivingNumber = "917620969566";
    const whatsappUrl = `https://wa.me/${receivingNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="book" className="relative overflow-hidden pt-10">
      {/* giant marquee */}
      <Marquee
        items={["Play", "Compete", "Experience The Difference", "The Gaming Loft"]}
        className="border-neon/20"
      />

      {/* CTA core */}
      <div className="relative flex min-h-[92vh] items-center justify-center overflow-hidden py-24 md:py-32">
        {/* background FX */}
        <div className="grid-bg absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/8 blur-[160px]" />
        <div className="noise absolute inset-0" />
        <div className="scanlines absolute inset-0" />

        {/* huge background word */}
        <span className="font-display text-outline-dim pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[26vw] whitespace-nowrap uppercase opacity-40 select-none">
          Loft
        </span>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          {/* left — giant heading */}
          <div className="flex flex-col items-start justify-center text-left">
            <Reveal>
              <h2 className="font-display text-[13.5vw] leading-[0.95] text-white uppercase sm:text-7xl md:text-8xl lg:text-9xl">
                <span className="block pb-2 sm:pb-3 md:pb-4">Ready</span>
                <span className="block">
                  to <span className="text-neon glow-cyan glitch">play?</span>
                </span>
              </h2>
              <p className="font-hud mt-7 max-w-md text-sm leading-relaxed text-white md:text-base">
                Tables are booking fast. Reserve your slot in the next 30 seconds and
                your first drink is on the house — <span className="text-neon">no code needed.</span>
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="tel:+918262859258"
                  className="clip-btn inline-flex items-center gap-3 bg-ember px-10 py-5 font-hud text-xs font-bold tracking-[0.35em] text-[#1a0700] uppercase transition-all duration-300 glow-box-ember hover:bg-white md:text-sm"
                >
                  Book Your Game
                </a>
              </div>

              {/* info row */}
              <div className="mt-12 grid w-full max-w-lg grid-cols-2 gap-4">
                {[
                  ["LOCATION", "2nd Flr, Opp. Apollo Pharmacy, Khamla, Nagpur"],
                  ["HOURS", "10:30 AM – 11:30 PM Daily"],
                  ["INSTAGRAM", "@thegamingloft"],
                  ["PHONE", "+91 82628 59258"],
                ].map(([k, v]) => (
                  <div key={k} className="border-l-2 border-neon/40 pl-4">
                    <p className="font-hud text-[9px] tracking-[0.3em] text-white/35 uppercase">{k}</p>
                    <p className="font-hud mt-1 text-sm text-white/80">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right — booking form */}
          <Reveal delay={0.15}>
            <div className="scanlines relative border border-neon/30 bg-void/85 p-7 backdrop-blur-xl md:p-9">
              <Corners color="rgba(34,242,255,0.85)" size={18} />

              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="relative flex h-20 w-20 items-center justify-center border-2 border-mint text-4xl text-mint shadow-[0_0_40px_rgba(180,255,57,0.35)]">
                    ✓
                  </div>
                  <p className="font-display mt-6 text-3xl tracking-wide text-white uppercase">
                    Slot <span className="text-mint">locked.</span>
                  </p>
                  <p className="font-hud mt-3 max-w-xs text-sm leading-relaxed text-white/55">
                    Mission accepted. Our crew will confirm your booking on WhatsApp within
                    10 minutes. See you at the Loft.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="font-hud mt-7 text-[10px] tracking-[0.35em] text-neon uppercase underline-offset-4 hover:underline"
                  >
                    Book another session
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="font-display text-2xl tracking-wide text-white uppercase">
                        Book your <span className="text-neon">session</span>
                      </p>
                      <p className="font-hud mt-1 text-[10px] tracking-[0.3em] text-white/40 uppercase">
                        Form.SLOT-RESERVE.v1
                      </p>
                    </div>
                    <span className="font-hud animate-blink text-[10px] tracking-[0.25em] text-mint uppercase">
                      ● 03 slots left
                    </span>
                  </div>

                  <div>
                    <label className="font-hud mb-2 block text-[10px] font-semibold tracking-[0.3em] text-white/50 uppercase">
                      Player name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="ENTER YOUR TAG"
                      className="font-hud w-full border border-white/15 bg-panel px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-neon focus:shadow-[0_0_16px_rgba(34,242,255,0.25)]"
                    />
                  </div>

                  <div>
                    <label className="font-hud mb-2 block text-[10px] font-semibold tracking-[0.3em] text-white/50 uppercase">
                      Phone / WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+91 00000 00000"
                      className="font-hud w-full border border-white/15 bg-panel px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-neon focus:shadow-[0_0_16px_rgba(34,242,255,0.25)]"
                    />
                  </div>

                  <div>
                    <label className="font-hud mb-2 block text-[10px] font-semibold tracking-[0.3em] text-white/50 uppercase">
                      Select arena
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {GAMES.map((g) => (
                        <label key={g.id} className="group cursor-pointer">
                          <input type="radio" name="game" value={g.id} defaultChecked={g.id === "pool"} className="peer sr-only" />
                          <span className="font-hud flex h-12 items-center justify-center border border-white/15 bg-panel text-[10px] font-bold tracking-wider text-white/50 uppercase transition-all duration-300 peer-checked:border-neon peer-checked:bg-neon/10 peer-checked:text-neon hover:border-neon/60">
                            {g.name.slice(0, 3)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-hud mb-2 block text-[10px] font-semibold tracking-[0.3em] text-white/50 uppercase">
                        Date
                      </label>
                      <input
                        required
                        type="date"
                        name="date"
                        className="font-hud w-full border border-white/15 bg-panel px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-neon [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="font-hud mb-2 block text-[10px] font-semibold tracking-[0.3em] text-white/50 uppercase">
                        Time
                      </label>
                      <input
                        required
                        type="time"
                        name="time"
                        className="font-hud w-full border border-white/15 bg-panel px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-neon [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="clip-btn group mt-2 flex w-full items-center justify-center gap-3 bg-neon py-4.5 font-hud text-xs font-bold tracking-[0.4em] text-[#03161c] uppercase transition-all duration-300 glow-box-cyan hover:bg-white md:py-5"
                  >
                    Lock My Slot
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </button>
                  <p className="font-hud text-center text-[9px] tracking-[0.25em] text-white/30 uppercase">
                    No prepayment needed · Free cancellation up to 2 hrs
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* footer */}
      <footer className="relative border-t border-white/10 bg-void">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div
                className="clip-panel h-10 w-16 overflow-hidden bg-white"
                style={{ background: "#f5f5f7" }}
              >
                <img src="/images/logo.png" alt="The Gaming Loft" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="font-display text-lg tracking-widest text-white uppercase">
                  The Gaming <span className="text-neon">Loft</span>
                </p>
                <p className="font-hud text-[9px] tracking-[0.4em] text-white/35 uppercase">Play · Compete · Win</p>
              </div>
            </div>
            <nav className="font-hud flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] tracking-[0.3em] text-white/45 uppercase">
              <a href="#experience" className="transition-colors hover:text-neon">Experience</a>
              <a href="#arena" className="transition-colors hover:text-neon">Arena</a>
              <a href="#pricing" className="transition-colors hover:text-neon">Pricing</a>
              <a href="#gallery" className="transition-colors hover:text-neon">Gallery</a>
              <a href="#book" className="transition-colors hover:text-neon">Book</a>
            </nav>
            <div className="flex gap-3">
              {["IG", "X", "YT", "DC"].map((s) => (
                <a
                  key={s}
                  href="#hero"
                  aria-label={s}
                  className="font-hud flex h-10 w-10 items-center justify-center border border-white/15 text-[10px] font-bold tracking-widest text-white/60 transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_14px_rgba(34,242,255,0.3)]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="font-hud mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-[9px] tracking-[0.3em] text-white/25 uppercase md:flex-row">
            <span>© 2026 The Gaming Loft. All rights reserved.</span>
            <span>
              Crafted for players <span className="text-neon">//</span> Est. 2025
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
