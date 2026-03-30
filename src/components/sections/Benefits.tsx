import { motion } from "framer-motion";
import { Clock, Globe, Plane, Shield, Car, BadgeCheck } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Always On Time",
      subtitle: "Puntualidad garantizada",
    },
    {
      icon: Globe,
      title: "English Support",
      subtitle: "Atención en inglés",
    },
    {
      icon: Plane,
      title: "We Track Your Flight ✈️",
      subtitle: "Seguimiento de vuelo",
      highlight: true,
    },
    {
      icon: Shield,
      title: "Private Service Only",
      subtitle: "Servicio privado exclusivo",
    },
    {
      icon: Car,
      title: "Clean & Comfortable",
      subtitle: "Vehículos limpios y modernos",
    },
    {
      icon: BadgeCheck,
      title: "Professional Driver",
      subtitle: "Conductor profesional",
    }
  ];

  return (
    <section className="py-20 bg-secondary/20 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-card border ${benefit.highlight ? 'border-primary shadow-[0_0_20px_rgba(212,175,55,0.15)]' : 'border-white/5'} rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/40 transition-colors shadow-lg shadow-black/20`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
