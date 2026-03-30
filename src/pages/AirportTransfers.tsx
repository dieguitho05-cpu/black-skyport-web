import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Plane, Car, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { BookingForm } from "@/components/sections/BookingForm";

export default function AirportTransfers() {
  return (
    <PageLayout title="Airport Transfers" description="Reliable airport transfers in Lima with fixed rates. Book your private transfer from Jorge Chávez Airport.">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-bold tracking-widest mb-6">
              LIMA AIRPORT TRANSFERS
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Reliable Airport <br className="hidden md:block" />
              Transfers in Lima
            </h1>
            <p className="text-xl md:text-2xl text-primary italic mb-6">
              Fixed rates · No hidden fees · 24/7 service
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Professional private drivers from Jorge Chávez Airport (LIM) to any destination in Lima. We track your flight for on-time pickup.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Book Now <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href={getWhatsAppUrl("Hello! I need an airport transfer from Jorge Chávez Airport")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price Calculator */}
      <PriceCalculator />

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-white/5 rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Book your ride</h3>
              <p className="text-muted-foreground">Fill the form or WhatsApp us</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/5 rounded-3xl p-8 text-center relative"
            >
              <div className="hidden md:block absolute top-1/2 -left-4 w-8 border-t-2 border-dashed border-white/20" />
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-white/20" />
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. We track your flight</h3>
              <p className="text-muted-foreground">We monitor your arrival in real time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-white/5 rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. We pick you up</h3>
              <p className="text-muted-foreground">Your driver meets you at arrivals</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8">We cover all Lima districts</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Miraflores", "San Isidro", "Barranco", "Surco", "La Molina", "San Borja", "Chorrillos", "Lince", "Jesús María", "Centro Histórico"].map((zone) => (
                <span key={zone} className="px-4 py-2 rounded-full bg-background border border-white/10 text-white/80 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> {zone}
                </span>
              ))}
            </div>
            <a
              href={getWhatsAppUrl("Hi, I need a transfer to:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-primary/50 text-primary font-bold hover:bg-primary/10 transition-colors"
            >
              Ask about your zone <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

      {/* Final CTA */}
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Book your airport transfer now</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
              Fill Booking Form
            </Link>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
