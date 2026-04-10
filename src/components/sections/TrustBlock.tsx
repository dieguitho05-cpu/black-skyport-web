import { motion } from "framer-motion";
import { ShieldCheck, Car, Plane, Users, Clock, CreditCard, RotateCcw, BadgeCheck } from "lucide-react";

const ITEMS = [
  { icon: <BadgeCheck className="w-5 h-5" />, text: "Licensed & insured" },
  { icon: <Car className="w-5 h-5" />, text: "Professional driver" },
  { icon: <Plane className="w-5 h-5" />, text: "Flight tracking" },
  { icon: <Users className="w-5 h-5" />, text: "Meet & greet" },
  { icon: <Clock className="w-5 h-5" />, text: "24/7 availability" },
  { icon: <ShieldCheck className="w-5 h-5" />, text: "Personalized service" },
  { icon: <ShieldCheck className="w-5 h-5" />, text: "No hidden fees" },
  { icon: <CreditCard className="w-5 h-5" />, text: "Cash or card" },
  { icon: <RotateCcw className="w-5 h-5" />, text: "Free cancellation" },
];

export function TrustBlock() {
  return (
    <section className="py-8 px-4 border-y border-white/8 bg-white/2">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
            >
              <span className="text-primary">{item.icon}</span>
              <span className="text-sm font-semibold text-white/80 whitespace-nowrap">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
