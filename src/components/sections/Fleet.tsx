import { motion } from "framer-motion";
import { Car, Users, Star, Briefcase } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const fleet = [
  {
    icon: Car,
    nameEs: "Comfort (Auto)",
    nameEn: "Sedan",
    capacity: "1-3",
    descEs: "Cómodo y eficiente. Ideal para viajeros solos o parejas.",
    descEn: "Comfortable and efficient. Ideal for solo travelers or couples."
  },
  {
    icon: Briefcase,
    nameEs: "People Carrier (SUV)",
    nameEn: "SUV",
    capacity: "1-4",
    descEs: "Mayor espacio y confort para equipaje extra.",
    descEn: "More space and comfort for extra luggage."
  },
  {
    icon: Users,
    nameEs: "Van",
    nameEn: "Minivan",
    capacity: "6-10",
    descEs: "Ideal para grupos familiares o delegaciones.",
    descEn: "Ideal for family groups or delegations."
  },
  {
    icon: Star,
    nameEs: "Servicios Especiales",
    nameEn: "Custom Services",
    capacity: "10+",
    descEs: "Grupos grandes o requerimientos especiales bajo solicitud.",
    descEn: "Large groups or special requirements upon request."
  }
];

export function Fleet() {
  return (
    <section id="fleet" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          titleEs="Nuestra Flota" 
          titleEn="Our Fleet" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
          {fleet.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="flex items-start gap-6 p-6 rounded-2xl bg-secondary border border-white/5 hover:bg-secondary/80 transition-colors"
            >
              <div className="shrink-0 w-16 h-16 rounded-full bg-background border border-primary/20 flex items-center justify-center text-primary shadow-inner">
                <item.icon className="w-8 h-8" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {item.nameEs}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 bg-background rounded-md text-primary border border-primary/20">
                    <Users className="w-3 h-3" />
                    <span>{item.capacity}</span>
                  </div>
                </div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  {item.nameEn}
                </h4>
                
                <p className="text-sm text-foreground/80 mb-1">{item.descEs}</p>
                <p className="text-sm text-muted-foreground">{item.descEn}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
