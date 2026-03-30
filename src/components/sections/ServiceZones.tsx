import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ServiceZones() {
  const zones = [
    { name: "Aeropuerto Jorge Chávez (LIM)", primary: true },
    { name: "Miraflores" },
    { name: "San Isidro" },
    { name: "Barranco" },
    { name: "Surco / Surquillo" },
    { name: "Full Lima coverage" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Where we operate <span className="text-primary italic font-normal">/ Zonas de Servicio</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {zones.map((zone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl flex items-center gap-4 bg-card/50 backdrop-blur-sm transition-all ${
                zone.primary 
                  ? "border-2 border-primary shadow-[0_0_30px_rgba(212,175,55,0.15)]" 
                  : "border border-white/5 hover:border-white/10"
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                zone.primary ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
              }`}>
                <MapPin className="w-6 h-6" />
              </div>
              <span className={`text-lg font-medium ${zone.primary ? "text-primary" : "text-foreground"}`}>
                {zone.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-card border border-white/5 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6">
            And anywhere else in Lima — just ask! <br/>
            <span className="text-muted-foreground font-normal text-xl">¡Y a cualquier lugar en Lima!</span>
          </h3>
          <a href={getWhatsAppUrl("Hi! I would like to know the rate for a transfer to:")} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#1ebe5d] h-14 px-8 rounded-xl font-bold text-lg gap-2 shadow-[0_0_20px_rgba(37,211,102,0.2)]">
              <MessageCircle className="w-5 h-5" />
              Ask about your zone / Consulta tu zona
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
