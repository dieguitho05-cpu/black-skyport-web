import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const DESTINATIONS = [
  { label: "Miraflores", price: 70, usd: 19 },
  { label: "San Isidro", price: 70, usd: 19 },
  { label: "Barranco", price: 75, usd: 20 },
  { label: "Surco / Surquillo", price: 80, usd: 22 },
  { label: "La Molina / San Borja", price: 85, usd: 23 },
  { label: "Chorrillos", price: 80, usd: 22 },
  { label: "Other / Otro", price: null, usd: null },
];

export function PriceCalculator() {
  const [destination, setDestination] = useState(DESTINATIONS[0]);
  const [passengers, setPassengers] = useState(1);

  const vanSurcharge = passengers >= 5 ? 30 : 0;
  const estimatedPEN = destination.price ? destination.price + vanSurcharge : null;
  const estimatedUSD = destination.usd ? destination.usd + Math.round(vanSurcharge / 3.7) : null;

  const handleBook = () => {
    const msg = destination.price
      ? `Hello! I need a transfer:\n✈️ From: Airport Jorge Chávez\n📍 To: ${destination.label}\n👥 Passengers: ${passengers}\n💰 Estimated: S/ ${estimatedPEN} (~$${estimatedUSD} USD)\n\nPlease confirm availability!`
      : `Hello! I need a transfer:\n✈️ From: Airport Jorge Chávez\n📍 To: ${destination.label}\n👥 Passengers: ${passengers}\n\nPlease send me the price!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-primary/20 rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/60 relative overflow-hidden"
        >
          {/* Gold accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

          <h3 className="text-center text-xl md:text-2xl font-bold text-white mb-2">
            Quick Price Estimate
          </h3>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Get your price in seconds — Obtén tu precio en segundos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* FROM — fixed */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                From / Desde
              </label>
              <div className="flex items-center gap-3 bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium text-sm">Jorge Chávez Airport ✈️</span>
              </div>
            </div>

            {/* TO — selectable */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                To / Hacia
              </label>
              <div className="relative">
                <select
                  value={destination.label}
                  onChange={(e) => {
                    const found = DESTINATIONS.find((d) => d.label === e.target.value);
                    if (found) setDestination(found);
                  }}
                  className="w-full appearance-none bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors cursor-pointer pr-10"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.label} value={d.label}>{d.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* PASSENGERS */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Passengers / Pasajeros
              </label>
              <div className="flex items-center gap-3 bg-background border border-white/10 rounded-xl px-4 py-3">
                <Users className="w-5 h-5 text-primary shrink-0" />
                <div className="flex items-center gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => setPassengers((p) => Math.max(1, p - 1))}
                    className="w-7 h-7 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-foreground hover:border-primary/30 transition-colors font-bold text-lg leading-none"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-bold text-lg text-foreground">{passengers}</span>
                  <button
                    type="button"
                    onClick={() => setPassengers((p) => Math.min(10, p + 1))}
                    className="w-7 h-7 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-foreground hover:border-primary/30 transition-colors font-bold text-lg leading-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RESULT */}
          <motion.div
            key={`${destination.label}-${passengers}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="bg-background/60 border border-primary/20 rounded-2xl p-6 mb-6 text-center"
          >
            {estimatedPEN ? (
              <>
                <p className="text-sm text-muted-foreground mb-1">Estimated Price / Precio estimado</p>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-5xl font-display font-bold text-primary">S/ {estimatedPEN}</span>
                  <span className="text-xl text-muted-foreground">~ ${estimatedUSD} USD</span>
                </div>
                {passengers >= 5 && (
                  <p className="text-xs text-muted-foreground/60 mt-2">Van included for {passengers}+ passengers</p>
                )}
                <p className="text-xs text-muted-foreground/50 mt-3">
                  ✅ Fixed price — No hidden fees / Precio fijo — Sin cargos ocultos
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-2">Custom destination — contact us for price</p>
                <p className="text-lg font-bold text-primary">Ask us on WhatsApp ↓</p>
              </>
            )}
          </motion.div>

          <button
            type="button"
            onClick={handleBook}
            className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:bg-[#1ebe5d] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-6 h-6" />
            Book Now via WhatsApp
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-xs text-muted-foreground/40 mt-3">
            Prices are estimates and may vary · Los precios son referenciales
          </p>
        </motion.div>
      </div>
    </section>
  );
}
