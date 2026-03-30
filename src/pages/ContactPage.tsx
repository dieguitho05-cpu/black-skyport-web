import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, MapPin, Clock, Globe, Smartphone, Plane } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils";
import { BookingForm } from "@/components/sections/BookingForm";

export default function ContactPage() {
  return (
    <PageLayout title="Book Now" description="Book your private transfer in Lima. Confirmation via WhatsApp in minutes.">
      {/* Hero Minimal */}
      <section className="pt-32 pb-10 relative overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest mb-6">
              BOOK YOUR RIDE
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Reserve Your Transfer
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Confirmation via WhatsApp in minutes <br className="sm:hidden" />
              <span className="opacity-60 text-sm">/ Confirmación por WhatsApp en minutos</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-primary" /> Instant confirmation</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-primary" /> Secure booking</span>
              <span className="flex items-center gap-1"><Plane className="w-4 h-4 text-primary" /> Flight tracking</span>
              <span className="flex items-center gap-1"><Smartphone className="w-4 h-4 text-primary" /> WhatsApp support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <div className="-mt-10">
        <BookingForm />
      </div>

      {/* Direct WhatsApp CTA */}
      <section className="py-12 text-center bg-background">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-lg text-white mb-6">Or contact us directly on WhatsApp</p>
          <a
            href={getWhatsAppUrl("Hello! I need to book a transfer with Black Skyport")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#25D366] text-white font-bold text-xl hover:bg-[#1ebe5d] transition-colors shadow-xl shadow-[#25D366]/20"
          >
            <MessageCircle className="w-6 h-6" /> WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-white mb-1">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">+{WHATSAPP_NUMBER.slice(0,2)} {WHATSAPP_NUMBER.slice(2,5)} {WHATSAPP_NUMBER.slice(5,8)} {WHATSAPP_NUMBER.slice(8)}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-white mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Lima, Peru<br/>Aeropuerto Jorge Chávez (LIM)</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-white mb-1">Available</h3>
              <p className="text-muted-foreground text-sm">24 hours / 7 days</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-white mb-1">Languages</h3>
              <p className="text-muted-foreground text-sm">English & Español</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
