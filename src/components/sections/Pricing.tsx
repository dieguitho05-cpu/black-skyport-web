import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";

const VEHICLES = [
  {
    id: "auto",
    nameEs: "Auto",
    nameEn: "Sedan",
    icon: "🚗",
    maxPax: 3,
    maxBags: 3,
    descEs: "Máx. 3 personas · 3 maletas",
    descEn: "Max. 3 passengers · 3 bags",
    surcharge: 0,
  },
  {
    id: "camioneta",
    nameEs: "Camioneta",
    nameEn: "SUV",
    icon: "🚙",
    maxPax: 4,
    maxBags: 5,
    descEs: "Máx. 4 personas · 5 maletas",
    descEn: "Max. 4 passengers · 5 bags",
    surcharge: 10,
  },
  {
    id: "premium",
    nameEs: "Ejecutivo",
    nameEn: "Executive",
    icon: "⭐",
    maxPax: 4,
    maxBags: 5,
    descEs: "Máx. 4 personas · 5 maletas · VIP",
    descEn: "Max. 4 passengers · 5 bags · VIP",
    surcharge: 20,
  },
  {
    id: "van",
    nameEs: "Van",
    nameEn: "Minivan",
    icon: "🚐",
    maxPax: 10,
    maxBags: 8,
    descEs: "6-10 personas · 6 pax c/maletas · 10 pax sin maletas",
    descEn: "6-10 passengers · 6 pax w/bags · 10 pax no bags",
    surcharge: 55,
  },
];

const ROUTES = [
  { routeEs: "Aeropuerto ↔ Miraflores", routeEn: "Airport ↔ Miraflores", base: 75 },
  { routeEs: "Aeropuerto ↔ San Isidro", routeEn: "Airport ↔ San Isidro", base: 75 },
  { routeEs: "Aeropuerto ↔ Barranco", routeEn: "Airport ↔ Barranco", base: 80 },
  { routeEs: "Aeropuerto ↔ Surco / Surquillo", routeEn: "Airport ↔ Surco / Surquillo", base: 85 },
  { routeEs: "Aeropuerto ↔ La Molina / San Borja", routeEn: "Airport ↔ La Molina / San Borja", base: 90 },
  { routeEs: "Aeropuerto ↔ Chorrillos", routeEn: "Airport ↔ Chorrillos", base: 90 },
];

function getPrice(base: number, vehicle: typeof VEHICLES[0]) {
  if (vehicle.id === "van") return Math.max(130, base + vehicle.surcharge);
  return base + vehicle.surcharge;
}

function toUSD(pen: number) {
  return Math.round(pen / 3.7);
}

export function Pricing() {
  const [activeVehicle, setActiveVehicle] = useState(VEHICLES[0]);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleEs="Precios por Categoría"
          titleEn="Pricing by Vehicle Category"
        />

        {/* Vehicle Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveVehicle(v)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold transition-all duration-200
                ${activeVehicle.id === v.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30 scale-105"
                  : "bg-card border-white/10 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
            >
              <span className="text-lg">{v.icon}</span>
              <span>{v.nameEs}</span>
              <span className="hidden sm:inline text-xs opacity-70">/ {v.nameEn}</span>
            </button>
          ))}
        </div>

        {/* Selected vehicle info card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {/* Vehicle badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20">
                <span className="text-2xl">{activeVehicle.icon}</span>
                <div className="text-left">
                  <p className="font-bold text-foreground">
                    {activeVehicle.nameEs} / {activeVehicle.nameEn}
                  </p>
                  <p className="text-xs text-muted-foreground">{activeVehicle.descEs}</p>
                  <p className="text-xs text-muted-foreground/70">{activeVehicle.descEn}</p>
                </div>
              </div>
            </div>

            {/* Price list */}
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

              <div className="mb-8 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium">
                  ✅ Precio fijo — Sin cargos ocultos / Fixed price — No hidden fees
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {ROUTES.map((route, idx) => {
                  const price = getPrice(route.base, activeVehicle);
                  const usd = toUSD(price);
                  return (
                    <motion.div
                      key={route.routeEs}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.07 }}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-white/10 last:border-0 gap-3"
                    >
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{route.routeEs}</h4>
                        <p className="text-sm text-muted-foreground">{route.routeEn}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className="flex items-baseline gap-1 text-primary">
                          <span className="text-sm font-medium">S/</span>
                          <span className="text-4xl font-display font-bold">{price}</span>
                        </div>
                        <span className="text-sm text-muted-foreground/80 bg-white/5 px-2 py-0.5 rounded-md">
                          ~${usd} USD
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {activeVehicle.id === "van" && (
                <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm relative z-10">
                  <strong>Van:</strong> 6 personas con maletas · 10 personas sin maletas<br />
                  <span className="text-amber-300/70">Van: 6 passengers with bags · 10 passengers without bags</span>
                </div>
              )}

              <div className="mt-8 text-center text-xs text-muted-foreground/50 italic relative z-10">
                * Tarifas referenciales, pueden variar según fecha o requerimientos.<br />
                * Reference rates, may vary depending on date or requirements.
              </div>

              <div className="mt-8 flex justify-center relative z-10">
                <a
                  href={getWhatsAppUrl(
                    `Hola, deseo cotizar un traslado en ${activeVehicle.nameEs}.\nVehículo / Vehicle: ${activeVehicle.nameEs}\nRuta / Route: \nFecha / Date: \nPasajeros / Passengers: \nMaletas / Bags: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="rounded-full px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14"
                  >
                    Cotizar {activeVehicle.nameEs} / Quote {activeVehicle.nameEn}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
