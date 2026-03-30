import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";

const prices = [
  {
    routeEs: "Aeropuerto ↔ Miraflores",
    routeEn: "Airport ↔ Miraflores",
    price: "75",
    usdPrice: "~$23 USD"
  },
  {
    routeEs: "Aeropuerto ↔ San Isidro",
    routeEn: "Airport ↔ San Isidro",
    price: "75",
    usdPrice: "~$23 USD"
  },
  {
    routeEs: "Servicio por Hora",
    routeEn: "Per Hour Service",
    price: "40",
    usdPrice: "~$12 USD"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          titleEs="Precios Claros" 
          titleEn="Quick & Clear Pricing" 
        />

        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          
          <div className="mb-10 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm md:text-base font-medium">
              ✅ Fixed price – No hidden fees / Precio fijo – Sin cargos ocultos
            </div>
          </div>

          <div className="space-y-6 relative z-10">
            {prices.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 border-b border-white/10 last:border-0 gap-4"
              >
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{item.routeEs}</h4>
                  <p className="text-sm text-muted-foreground">{item.routeEn}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-baseline gap-1 text-primary">
                    <span className="text-sm font-medium">desde/from S/</span>
                    <span className="text-4xl font-display font-bold">{item.price}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground/80 bg-white/5 px-2 py-0.5 rounded-md">{item.usdPrice}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-muted-foreground/60 italic">
            * Tarifas referenciales, pueden variar según la fecha, vehículo o requerimientos específicos.<br/>
            * Reference rates, may vary depending on date, vehicle or specific requirements.
          </div>

          <div className="mt-10 flex justify-center">
            <a href={getWhatsAppUrl("Hola, deseo consultar el precio para un traslado. / Hello, I would like to check the price for a transfer.")} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14">
                Cotizar ahora / Get a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
