import { useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";
import RedirectBanner from "../components/RedirectBanner";
import { Corners, Reveal } from "../components/ui";
import { GAMES } from "../data/content";
import { useRouter } from "../context/RouterContext";

export default function BookingPage() {
  const [selectedGame, setSelectedGame] = useState("pool");
  const [date, setDate] = useState("2026-08-15");
  const [time, setTime] = useState("20:00");
  const [players, setPlayers] = useState("4");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const { navigateTo } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date || !time) {
      return;
    }

    const selectedGameObj = GAMES.find((g) => g.id === selectedGame);
    const gameName = selectedGameObj ? selectedGameObj.name : selectedGame.toUpperCase();

    const squadSizes: Record<string, string> = {
      "1": "1 Player (Solo)",
      "2": "2 Players (Duo)",
      "4": "4 Players (Squad)",
      "8": "8 Players (Party)",
      "12+": "12+ Players (Full Floor)",
    };
    const squadText = squadSizes[players] || `${players} Players`;

    const message =
      `*🎮 NEW SLOT RESERVATION — THE GAMING LOFT*\n\n` +
      `*👤 Player Details:*\n` +
      `• *Full Name:* ${name.trim()}\n` +
      `• *Phone / WhatsApp Number:* ${phone.trim()}\n\n` +
      `*🕹️ Booking Information:*\n` +
      `• *Selected Game Arena:* ${gameName}\n` +
      `• *Booking Date:* ${date}\n` +
      `• *Preferred Time Slot:* ${time}\n` +
      `• *Player Squad Size:* ${squadText}\n\n` +
      `Please confirm my slot reservation. Thank you!`;

    const receivingNumber = "918262859258";
    const whatsappUrl = `https://wa.me/${receivingNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="relative min-h-screen bg-void text-white">
      <PageHeader
        tag="RESERVE YOUR ARENA"
        title="Lock In Your"
        highlight="Game Slot"
        description="Book your table or PS5 station in 30 seconds. Your first round of energy refreshments is on the house."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <div className="relative border border-neon/30 bg-panel/80 p-8 md:p-12 backdrop-blur-xl">
              <Corners color="#22f2ff" size={20} />

              {sent ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center border-2 border-mint text-4xl text-mint shadow-[0_0_40px_rgba(180,255,57,0.35)]">
                    ✓
                  </div>
                  <h3 className="font-display text-4xl text-white uppercase mt-6">
                    Slot <span className="text-mint">Confirmed!</span>
                  </h3>
                  <p className="font-hud text-sm text-white/60 max-w-md mt-3">
                    Thank you {name || "Gamer"}! We have reserved your {selectedGame.toUpperCase()} table on {date} at {time}. A confirmation has been sent to your WhatsApp ({phone || "+91 82628 59258"}).
                  </p>
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => navigateTo("home")}
                      className="clip-btn bg-neon px-8 py-3.5 font-hud text-xs font-bold text-[#03161c] uppercase glow-box-cyan"
                    >
                      ← Redirect to Main Page
                    </button>
                    <button
                      onClick={() => setSent(false)}
                      className="clip-btn border border-white/30 px-6 py-3.5 font-hud text-xs font-bold text-white uppercase"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-hud text-xs tracking-widest text-neon uppercase mb-3">
                      Select Game Arena
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {GAMES.map((g) => (
                        <button
                          type="button"
                          key={g.id}
                          onClick={() => setSelectedGame(g.id)}
                          className={`p-3 text-center border font-hud text-xs uppercase transition-all ${
                            selectedGame === g.id
                              ? "border-neon bg-neon/15 text-neon font-bold"
                              : "border-white/10 bg-void/60 text-white/60 hover:border-white/30"
                          }`}
                        >
                          {g.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-hud text-xs text-white/60 tracking-wider uppercase mb-2">
                        Booking Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full border border-white/15 bg-void p-3 font-hud text-sm text-white focus:border-neon focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-hud text-xs text-white/60 tracking-wider uppercase mb-2">
                        Preferred Time Slot
                      </label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-full border border-white/15 bg-void p-3 font-hud text-sm text-white focus:border-neon focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-hud text-xs text-white/60 tracking-wider uppercase mb-2">
                        Player Squad Size
                      </label>
                      <select
                        value={players}
                        onChange={(e) => setPlayers(e.target.value)}
                        className="w-full border border-white/15 bg-void p-3 font-hud text-sm text-white focus:border-neon focus:outline-none"
                      >
                        <option value="1">1 Player (Solo)</option>
                        <option value="2">2 Players (Duo)</option>
                        <option value="4">4 Players (Squad)</option>
                        <option value="8">8 Players (Party)</option>
                        <option value="12+">12+ Players (Full Floor)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-hud text-xs text-white/60 tracking-wider uppercase mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Drake"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-white/15 bg-void p-3 font-hud text-sm text-white placeholder-white/20 focus:border-neon focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-hud text-xs text-white/60 tracking-wider uppercase mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 82628 59258"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full border border-white/15 bg-void p-3 font-hud text-sm text-white placeholder-white/20 focus:border-neon focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="clip-btn bg-neon px-10 py-4 font-hud text-xs font-bold tracking-[0.3em] text-[#03161c] uppercase glow-box-cyan hover:bg-white transition-all"
                    >
                      Confirm Slot Reservation
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateTo("home")}
                      className="font-hud text-xs tracking-wider text-white/50 hover:text-neon transition-colors"
                    >
                      ← Return to Main Page
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <RedirectBanner currentPage="book" />
    </div>
  );
}
