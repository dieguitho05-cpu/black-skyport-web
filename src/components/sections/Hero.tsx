import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Luxury transport Lima"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider mb-6">
              ⚡ LIMITED AVAILABILITY — BOOK IN ADVANCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-3"
          >
            Airport Transfers in Lima ✈️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="text-2xl md:text-3xl text-primary italic font-normal mb-4"
          >
            Safe, private and reliable service 24/7
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 font-light max-w-2xl mx-auto"
          >
            Arrive in Lima without stress. We'll be waiting for you at the airport.
            <span className="block text-sm text-muted-foreground mt-1">
              Llega a Lima sin estrés. Te esperamos en el aeropuerto.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.33 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <a href="#book" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-xl font-bold text-lg shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all hover:scale-105"
              >
                Book Now
              </Button>
            </a>

            <a
              href={getWhatsAppUrl("Hello! I need an airport transfer in Lima. Can you help me?")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#1ebe5d] h-14 px-8 rounded-xl font-bold text-lg gap-2 shadow-[0_0_24px_rgba(37,211,102,0.25)] transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>

            <a href="#pricing" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 h-14 px-8 rounded-xl font-semibold text-lg gap-2 transition-all"
              >
                View Prices
                <ChevronDown className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-14 pt-8 border-t border-white/10 text-sm font-medium text-white/70"
          >
            <div>⭐ 500+ Happy clients</div>
            <div className="hidden sm:block text-white/20">•</div>
            <div>✈️ Flight tracking included</div>
            <div className="hidden sm:block text-white/20">•</div>
            <div>🕐 24/7 service</div>
            <div className="hidden sm:block text-white/20">•</div>
            <div>🇬🇧 English support</div>
            <div className="hidden sm:block text-white/20">•</div>
            <div>✅ Fixed price — no hidden fees</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
