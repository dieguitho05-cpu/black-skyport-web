import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { WhyUs } from "@/components/sections/WhyUs";
import { BookingForm } from "@/components/sections/BookingForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { getWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, Plane, Map, Clock } from "lucide-react";

const SERVICES = [
  {
    href: "/airport-transfers",
    icon: <Plane className="w-7 h-7 text-primary" />,
    title: "Airport Transfers",
    titleEs: "Traslados Aeropuerto",
    desc: "Fixed rates from Jorge Chávez Airport to any district in Lima. Flight tracking included.",
    descEs: "Tarifas fijas desde el aeropuerto. Seguimiento de vuelo incluido.",
    cta: "View Prices →",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    whatsapp: "Hello! I need an airport transfer in Lima.",
  },
  {
    href: "/tourist-services",
    icon: <Map className="w-7 h-7 text-primary" />,
    title: "Tourist Services",
    titleEs: "Servicios Turísticos",
    desc: "Private day trips to Huacachina, Paracas, Nazca and City Tours in Lima. Your schedule.",
    descEs: "Excursiones privadas a Huacachina, Paracas, Nazca y City Tour Lima.",
    cta: "See Tours →",
    img: "https://images.unsplash.com/photo-1521729839347-1b5c4ca63168?w=600&q=80",
    whatsapp: "Hello! I want to book a tourist tour from Lima.",
  },
  {
    href: "/hourly-service",
    icon: <Clock className="w-7 h-7 text-primary" />,
    title: "Hourly Service",
    titleEs: "Servicio por Horas",
    desc: "Private driver by the hour for meetings, shopping or exploring Lima at your own pace.",
    descEs: "Conductor privado por horas para reuniones, compras o turismo a tu ritmo.",
    cta: "See Packages →",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
    whatsapp: "Hello! I need a private driver by the hour in Lima.",
  },
];

function ServiceCards() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
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
            key={s.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white/3 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
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

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-white mb-0.5">{s.title}</h3>
              <p className="text-xs text-primary/80 italic mb-3">{s.titleEs}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-1">{s.desc}</p>
              <p className="text-xs text-muted-foreground/50 italic mb-5">{s.descEs}</p>

              <div className="mt-auto flex gap-2">
                <Link
                  href={s.href}
                  className="flex-1 text-center py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary hover:text-black transition-all"
                >
                  {s.cta}
                </Link>
                <a
                  href={getWhatsAppUrl(s.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
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
        <ServiceCards />
        <PriceCalculator />
        <WhyUs />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
