import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBlock } from "@/components/sections/TrustBlock";
import { QuickPrices } from "@/components/sections/QuickPrices";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingForm } from "@/components/sections/BookingForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { getWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, Plane, Map, Clock, Zap } from "lucide-react";

function MidCTA() {
  return (
    <section className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-8 text-center"
      >
        <span className="inline-flex items-center gap-2 text-yellow-400 text-sm font-bold mb-3">
          <Zap className="w-4 h-4" /> Quick response · Usually replies in minutes
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
          Ready to book your ride?
        </h3>
        <p className="text-white/50 text-sm mb-6">
          No forms, no wait. Just send a WhatsApp message and confirm instantly.
        </p>
        <a
          href={getWhatsAppUrl(`Hello, I need an airport transfer in Lima.\nPickup: \nDrop-off: \nDate: \nTime: \nPassengers: `)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white font-extrabold text-lg px-10 py-4 rounded-2xl shadow-[0_0_32px_rgba(37,211,102,0.4)] hover:bg-[#1ebe5d] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <MessageCircle className="w-6 h-6" />
          Contact on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}

const SERVICES = [
  {
    icon: <Plane className="w-7 h-7 text-primary" />,
    title: "Airport Transfer",
    titleEs: "Traslado al Aeropuerto",
    desc: "Pickup & drop-off at Jorge Chávez. Flight tracking included. Fixed price.",
    descEs: "Recojo y entrega en el aeropuerto Jorge Chávez. Seguimiento de vuelo incluido.",
    img: "/images/service-airport.jpg",
    msg: `Hello, I need an airport transfer in Lima.\nPickup: \nDrop-off: \nDate: \nTime: \nPassengers: `,
  },
  {
    icon: <Clock className="w-7 h-7 text-primary" />,
    title: "City Rides",
    titleEs: "Transporte por Horas",
    desc: "Private driver by the hour for meetings, shopping or exploring Lima at your pace.",
    descEs: "Conductor privado por horas para reuniones, compras o turismo en Lima.",
    img: "/images/service-driver.jpg",
    msg: `Hello, I need a private driver by the hour in Lima.\nDate: \nHours needed: \nPlaces to visit: \nPassengers: `,
  },
  {
    icon: <Map className="w-7 h-7 text-primary" />,
    title: "Tours",
    titleEs: "Tours desde Lima",
    desc: "Private day trips to Huacachina, Paracas and Lima City Tour. Your schedule, your pace.",
    descEs: "Excursiones privadas a Huacachina, Paracas y City Tour Lima.",
    img: "/images/tour-huacachina.jpg",
    msg: `Hello, I want to book a tour from Lima.\nDestination: \nDate: \nPassengers: \nAdditional info: `,
  },
];

function ServiceCards() {
  return (
    <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          Our Services
        </h2>
        <p className="text-muted-foreground text-sm">Nuestros Servicios</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white/3 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute top-4 left-4 p-2 bg-black/60 rounded-xl border border-primary/20">
                {s.icon}
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-white mb-0.5">{s.title}</h3>
              <p className="text-xs text-primary/80 italic mb-3">{s.titleEs}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-1">{s.desc}</p>
              <p className="text-xs text-muted-foreground/50 italic mb-5">{s.descEs}</p>

              <div className="mt-auto">
                <a
                  href={getWhatsAppUrl(s.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-sm hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <TrustBlock />
        <ServiceCards />
        <QuickPrices />
        <HowItWorks />
        <MidCTA />
        <Pricing />
        <WhyUs />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
