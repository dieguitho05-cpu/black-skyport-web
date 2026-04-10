import { motion } from "framer-motion";
import { MessageCircle, FileText, CheckCircle, Car } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const STEPS = [
  {
    icon: <MessageCircle className="w-7 h-7" />,
    step: "1",
    title: "Message on WhatsApp",
    titleEs: "Escríbenos por WhatsApp",
    desc: "Send us a message with your trip details anytime.",
    descEs: "Envíanos un mensaje con los detalles de tu viaje.",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    step: "2",
    title: "Send pickup details",
    titleEs: "Comparte los detalles",
    desc: "Pickup location, date, time and number of passengers.",
    descEs: "Lugar de recojo, fecha, hora y número de pasajeros.",
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    step: "3",
    title: "Confirm instantly",
    titleEs: "Confirmación inmediata",
    desc: "We confirm your booking right away. Fixed price guaranteed.",
    descEs: "Confirmamos tu reserva al instante. Precio fijo garantizado.",
  },
  {
    icon: <Car className="w-7 h-7" />,
    step: "4",
    title: "Driver arrives on time",
    titleEs: "Tu chofer llega puntual",
    desc: "Your driver will be waiting for you at the agreed time.",
    descEs: "Tu conductor te espera en el lugar y hora acordados.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white/2 border-t border-white/8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            How It Works
          </h2>
          <p className="text-muted-foreground text-sm">¿Cómo funciona? · Simple y rápido</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-white/10 z-0" />
              )}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4">
                {s.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-bold text-white text-base mb-1">{s.title}</h3>
              <p className="text-xs text-primary/70 italic mb-2">{s.titleEs}</p>
              <p className="text-sm text-white/50 leading-snug">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-[0_0_32px_rgba(37,211,102,0.35)] hover:bg-[#1ebe5d] hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            Reserve your ride
          </a>
        </motion.div>
      </div>
    </section>
  );
}
