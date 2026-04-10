import { motion } from "framer-motion";
import { MessageCircle, MapPin, Zap } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const PRICES = [
  {
    zone: "Miraflores",
    usd: "$22", sol: "S/ 75",
    msg: `Hello, I need an airport transfer to Miraflores from Lima Airport.\nDate: \nTime: \nPassengers: `,
  },
  {
    zone: "San Isidro",
    usd: "$22", sol: "S/ 75",
    msg: `Hello, I need an airport transfer to San Isidro from Lima Airport.\nDate: \nTime: \nPassengers: `,
  },
  {
    zone: "Barranco",
    usd: "$23", sol: "S/ 80",
    msg: `Hello, I need an airport transfer to Barranco from Lima Airport.\nDate: \nTime: \nPassengers: `,
  },
  {
    zone: "Surco / Surquillo",
    usd: "$24", sol: "S/ 85",
    msg: `Hello, I need an airport transfer to Surco/Surquillo from Lima Airport.\nDate: \nTime: \nPassengers: `,
  },
  {
    zone: "La Molina / San Borja",
    usd: "$26", sol: "S/ 90",
    msg: `Hello, I need an airport transfer to La Molina/San Borja from Lima Airport.\nDate: \nTime: \nPassengers: `,
  },
  {
    zone: "Chorrillos",
    usd: "$26", sol: "S/ 90",
    msg: `Hello, I need an airport transfer to Chorrillos from Lima Airport.\nDate: \nTime: \nPassengers: `,
  },
];

export function QuickPrices() {
  return (
    <section id="pricing" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-3"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            ✈️ Airport Transfer Prices
          </h2>
          <p className="text-muted-foreground text-sm mb-1">
            Fixed rate · No hidden fees · Precio fijo, sin cargos ocultos
          </p>
          <p className="text-xs text-white/30 mb-8">Per vehicle, not per person · Por vehículo, no por persona</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PRICES.map((p, i) => (
            <motion.div
              key={p.zone}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/3 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-bold text-base text-white">{p.zone}</span>
              </div>
              <div className="flex items-baseline gap-2 my-2">
                <span className="text-3xl font-display font-bold text-primary">From {p.usd}</span>
                <span className="text-sm text-white/40 font-semibold">{p.sol}</span>
              </div>
              <a
                href={getWhatsAppUrl(p.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-sm py-2.5 rounded-xl hover:bg-[#25D366] hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Book this route
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA below prices */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-white/40 mb-4">
            Other districts? Contact us for a custom quote · ¿Otro distrito? Contáctanos para cotizar.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-extrabold text-base px-8 py-3.5 rounded-2xl shadow-[0_0_24px_rgba(37,211,102,0.35)] hover:bg-[#1ebe5d] hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Get a quote on WhatsApp
            <span className="ml-1 text-xs font-normal opacity-80 flex items-center gap-1"><Zap className="w-3 h-3" /> Quick response</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
