import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const VEHICLES = [
  {
    id: "auto",
    nameEs: "Auto",
    nameEn: "Sedan",
    icon: "🚗",
    descEs: "Máx. 3 personas · 3 maletas",
    descEn: "Max. 3 pax · 3 bags",
    surcharge: 0,
    maxPax: 3,
  },
  {
    id: "camioneta",
    nameEs: "Camioneta",
    nameEn: "SUV",
    icon: "🚙",
    descEs: "Máx. 4 personas · 5 maletas",
    descEn: "Max. 4 pax · 5 bags",
    surcharge: 10,
    maxPax: 4,
  },
  {
    id: "premium",
    nameEs: "Ejecutivo",
    nameEn: "Executive",
    icon: "⭐",
    descEs: "Máx. 4 personas · VIP",
    descEn: "Max. 4 pax · VIP",
    surcharge: 20,
    maxPax: 4,
  },
  {
    id: "van",
    nameEs: "Van",
    nameEn: "Minivan",
    icon: "🚐",
    descEs: "6-10 personas",
    descEn: "6-10 passengers",
    surcharge: 55,
    maxPax: 10,
  },
];

const DESTINATIONS = [
  { label: "Miraflores", price: 75, usd: 23 },
  { label: "San Isidro", price: 75, usd: 23 },
  { label: "Barranco", price: 80, usd: 25 },
  { label: "Surco / Surquillo", price: 85, usd: 27 },
  { label: "La Molina / San Borja", price: 90, usd: 28 },
  { label: "Chorrillos", price: 90, usd: 28 },
  { label: "Otro / Other", price: null, usd: null },
];

function calcPrice(base: number | null, vehicle: typeof VEHICLES[0]) {
  if (!base) return null;
  if (vehicle.id === "van") return Math.max(130, base + vehicle.surcharge);
  return base + vehicle.surcharge;
}

function toUSD(pen: number) {
  return Math.round(pen / 3.7);
}

export function PriceCalculator() {
  const [destination, setDestination] = useState(DESTINATIONS[0]);
  const [vehicle, setVehicle] = useState(VEHICLES[0]);
  const [passengers, setPassengers] = useState(1);

  const estimatedPEN = calcPrice(destination.price, vehicle);
  const estimatedUSD = estimatedPEN ? toUSD(estimatedPEN) : null;

  const handleBook = () => {
    const msg = estimatedPEN
      ? `Hola! Necesito un traslado:\n✈️ Desde / From: Aeropuerto Jorge Chávez\n📍 Hacia / To: ${destination.label}\n🚗 Vehículo / Vehicle: ${vehicle.nameEs} (${vehicle.nameEn})\n👥 Pasajeros / Passengers: ${passengers}\n💰 Precio estimado / Estimated: S/ ${estimatedPEN} (~$${estimatedUSD} USD)\n\n¡Por favor confirmar disponibilidad! / Please confirm availability!`
      : `Hola! Necesito un traslado:\n✈️ Desde / From: Aeropuerto Jorge Chávez\n📍 Hacia / To: ${destination.label}\n🚗 Vehículo / Vehicle: ${vehicle.nameEs} (${vehicle.nameEn})\n👥 Pasajeros / Passengers: ${passengers}\n\n¿Me pueden enviar el precio? / Can you send me the price?`;
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
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

          <h3 className="text-center text-xl md:text-2xl font-bold text-white mb-1">
            Calcular Precio / Quick Price Estimate
          </h3>
          <p className="text-center text-sm text-muted-foreground mb-6">
            Selecciona tu destino y vehículo — Get your price in seconds
          </p>

          {/* Vehicle selector */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              Vehículo / Vehicle
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {VEHICLES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setVehicle(v);
                    if (passengers > v.maxPax) setPassengers(v.maxPax);
                  }}
                  className={`flex flex-col items-center gap-1 px-3 py-3 rounded-xl border text-xs font-semibold transition-all duration-200
                    ${vehicle.id === v.id
                      ? "bg-primary/20 border-primary text-primary shadow-md shadow-primary/20"
                      : "bg-background border-white/10 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                >
                  <span className="text-xl">{v.icon}</span>
                  <span className="font-bold">{v.nameEs}</span>
                  <span className="opacity-60 text-center leading-tight hidden sm:block">{v.descEs}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Destination + Passengers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Desde / From
              </label>
              <div className="flex items-center gap-3 bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium text-sm">Aeropuerto Jorge Chávez ✈️</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Hacia / To
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

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Pasajeros / Passengers
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
                    onClick={() => setPassengers((p) => Math.min(vehicle.maxPax, p + 1))}
                    className="w-7 h-7 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-foreground hover:border-primary/30 transition-colors font-bold text-lg leading-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Result */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${destination.label}-${vehicle.id}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="bg-background/60 border border-primary/20 rounded-2xl p-6 mb-6 text-center"
            >
              {estimatedPEN ? (
                <>
                  <p className="text-sm text-muted-foreground mb-1">
                    {vehicle.icon} {vehicle.nameEs} → {destination.label}
                  </p>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-5xl font-display font-bold text-primary">S/ {estimatedPEN}</span>
                    <span className="text-xl text-muted-foreground">~${estimatedUSD} USD</span>
                  </div>
                  {vehicle.id === "van" && (
                    <p className="text-xs text-amber-400/80 mt-2">
                      6 personas con maletas · 10 personas sin maletas
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground/50 mt-3">
                    ✅ Precio fijo — Sin cargos ocultos / Fixed price — No hidden fees
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mb-2">
                    Destino personalizado — contáctanos para el precio
                  </p>
                  <p className="text-lg font-bold text-primary">Consultar por WhatsApp ↓</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={handleBook}
            className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:bg-[#1ebe5d] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-6 h-6" />
            Reservar por WhatsApp / Book Now
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-xs text-muted-foreground/40 mt-3">
            Los precios son referenciales · Prices are estimates
          </p>
        </motion.div>
      </div>
    </section>
  );
}
