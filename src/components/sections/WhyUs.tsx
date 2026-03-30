import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { CheckCircle2 } from "lucide-react";

const features = [
  { es: "Servicio puntual y profesional", en: "Punctual and professional" },
  { es: "Experiencia con turistas", en: "Experience with tourists" },
  { es: "Vehículos modernos y limpios", en: "Modern and clean vehicles" },
  { es: "Atención personalizada 24/7", en: "24/7 personalized service" },
  { es: "Seguimiento de vuelo para recojo exacto", en: "Flight tracking for exact pickup" },
  { es: "Transporte ejecutivo disponible", en: "Executive transport available" },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeader 
              titleEs="¿Por qué elegirnos?" 
              titleEn="Why Choose Us?" 
              centered={false}
            />
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              En Black Skyport nos dedicamos a brindar una experiencia de viaje sin estrés. Monitoreamos tu vuelo para garantizar un recojo puntual.
              <br/><br/>
              <span className="text-sm">At Black Skyport we are dedicated to providing a stress-free travel experience. We monitor your flight to ensure an on-time pickup.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">{feature.es}</p>
                  <p className="text-xs text-muted-foreground">{feature.en}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
