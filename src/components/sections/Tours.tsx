import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";

const tours = [
  {
    name: "Paracas",
    image: "https://images.unsplash.com/photo-1547566348-bd7b4a23bc90?w=800&q=80",
  },
  {
    name: "Ica / Dunas",
    image: "https://images.unsplash.com/photo-1608392543861-c8ae0f8b5f31?w=800&q=80",
  },
  {
    name: "Huacachina",
    image: "https://images.unsplash.com/photo-1521729839347-1b5c4ca63168?w=800&q=80",
  },
  {
    name: "Nazca Lines",
    image: "https://images.unsplash.com/photo-1548625149-720754002647?w=800&q=80",
  }
];

export function Tours() {
  return (
    <section id="tours" className="py-24 bg-secondary/50 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          titleEs="Tours Fuera de Lima" 
          titleEn="Tours Outside Lima" 
          subtitle="Full day private tours desde Lima. Privado, flexible y personalizado. / Private, flexible, and personalized full day tours from Lima."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {tours.map((tour, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group rounded-2xl overflow-hidden h-64 border border-white/10 hover:border-primary/50 transition-all duration-500"
            >
              <img 
                src={tour.image} 
                alt={tour.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-3xl font-display font-bold text-white mb-1">
                  {tour.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Full Day Tour desde Lima / from Lima
                </p>
                
                <a 
                  href={getWhatsAppUrl(`Hola, deseo información sobre el tour a ${tour.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <Button variant="default" size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="w-4 h-4" />
                    <span>Ver disponibilidad / Check availability</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            También ofrecemos paquetes personalizados que incluyen traslados, city tours y más.<br/>
            <span className="text-sm">We also offer custom travel packages including transfers, city tours, and more.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
