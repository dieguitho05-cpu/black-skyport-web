import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Star, Zap } from "lucide-react";
import { getWhatsAppUrl, WA_MSG_EN } from "@/lib/utils";

const PRICES = [
  { zone: "Miraflores", usd: "$22", sol: "S/ 75", msg: `Hello, I need a transfer to Miraflores from Lima Airport.\nDate: \nTime: \nPassengers: ` },
  { zone: "San Isidro", usd: "$22", sol: "S/ 75", msg: `Hello, I need a transfer to San Isidro from Lima Airport.\nDate: \nTime: \nPassengers: ` },
  { zone: "Barranco",   usd: "$23", sol: "S/ 80", msg: `Hello, I need a transfer to Barranco from Lima Airport.\nDate: \nTime: \nPassengers: ` },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`}
          alt="Private transport Lima"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Vehicle image */}
      <div className="absolute bottom-0 right-0 w-1/2 h-2/3 z-0 hidden lg:block pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/vehicle.jpg`}
          alt="Black Skyport luxury vehicle"
          className="w-full h-full object-contain object-right-bottom opacity-80"
          style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 40%, transparent 100%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="max-w-3xl mx-auto text-center">

          {/* Urgency badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-bold tracking-wide">
              <Zap className="w-4 h-4" /> Limited availability — Book in 1 minute
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-4"
          >
            Private Transport &amp; Tours in Lima
          </motion.h1>

          {/* Services subtitle */}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14 }}
            className="text-lg md:text-xl text-primary font-bold mb-2"
          >
            Airport Transfers • City Rides • Private Tours • Hourly Service
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.19 }}
            className="text-base text-white/65 mb-1"
          >
            Safe • Reliable • English Speaking Driver • Available 24/7
          </motion.p>

          {/* Instant booking line */}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.23 }}
            className="text-sm font-semibold text-white/50 mb-1"
          >
            Book in 1 minute • Instant confirmation via WhatsApp
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }}
            className="text-xs text-white/30 italic mb-7"
          >
            Transporte privado y tours en Lima – Seguro • Puntual • Atención personalizada
          </motion.p>

          {/* MAIN CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"
          >
            <a
              href={getWhatsAppUrl(WA_MSG_EN)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white font-extrabold text-xl px-10 py-5 rounded-2xl shadow-[0_0_40px_rgba(37,211,102,0.5)] hover:bg-[#1ebe5d] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-7 h-7" />
              Book Now on WhatsApp
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 text-white/80 font-semibold text-base px-6 py-5 rounded-2xl hover:bg-white/5 transition-all duration-200"
            >
              View Services <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Quick response */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-sm text-[#25D366] font-semibold mb-6"
          >
            ⚡ Quick response on WhatsApp · Usually replies in minutes
          </motion.p>

          {/* Airport price pills */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }} className="mb-2">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-2 font-semibold">
              ✈️ Airport Transfer — Reference Prices
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {PRICES.map((p) => (
                <a
                  key={p.zone}
                  href={getWhatsAppUrl(p.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 border border-white/15 hover:border-primary/40 hover:bg-primary/10 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                >
                  📍 {p.zone}
                  <span className="text-primary font-bold">{p.usd}</span>
                  <span className="text-white/30 text-xs">{p.sol}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social proof + trust bar */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-7 pt-6 border-t border-white/10 text-sm font-medium text-white/55"
          >
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
              <span className="ml-1">5-star service</span>
            </span>
            <span className="hidden sm:block text-white/15">·</span>
            <span>👥 +100 satisfied customers</span>
            <span className="hidden sm:block text-white/15">·</span>
            <span>✅ No hidden fees</span>
            <span className="hidden sm:block text-white/15">·</span>
            <span>💵 Cash or card</span>
            <span className="hidden sm:block text-white/15">·</span>
            <span>🔄 Free cancellation</span>
            <span className="hidden sm:block text-white/15">·</span>
            <span>🇺🇸 🇪🇸 English &amp; Spanish support</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
