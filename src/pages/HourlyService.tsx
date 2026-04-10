import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MessageCircle, Check, Briefcase, ShoppingBag, Users, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HourlyService() {
  return (
    <PageLayout title="Hourly Service" description="Flexible private driver by the hour in Lima. 3, 5 or 8 hour packages available.">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-bold tracking-widest mb-6">
              PRIVATE DRIVER BY THE HOUR
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Flexible Transportation <br className="hidden sm:block" />by the Hour
            </h1>
            <p className="text-xl md:text-2xl text-primary italic mb-6">
              Your time, your schedule, your driver
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Hire a professional driver and vehicle for any number of hours. Perfect for business trips, shopping, meetings, and exploring Lima at your own pace.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                Book Now
              </Link>
              <a 
                href={getWhatsAppUrl("Hello! I need a private driver by the hour in Lima")}
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

      {/* Pricing by Vehicle */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Price per Hour</h2>
            <p className="text-muted-foreground">Choose your vehicle — billed by the hour, minimum 2 hours</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Auto / Sedan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col"
            >
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-white mb-1">Auto / Sedan</h3>
              <p className="text-muted-foreground text-sm mb-6">Up to 3 passengers · Ideal for city rides</p>
              <div className="mb-6">
                <span className="text-5xl font-display font-bold text-primary">S/ 40</span>
                <span className="text-white/50 text-lg ml-2">/ hora</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 mb-8 space-y-2 text-sm text-white/70">
                <div className="flex justify-between"><span>2 horas</span><span className="text-white font-semibold">S/ 80</span></div>
                <div className="flex justify-between"><span>4 horas</span><span className="text-white font-semibold">S/ 160</span></div>
                <div className="flex justify-between"><span>8 horas (full day)</span><span className="text-white font-semibold">S/ 320</span></div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {["Professional driver","Flexible stops","All Lima","English support"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl("Hola! Quiero cotizar el servicio por horas en Auto/Sedan. ¿Pueden darme más información?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-primary text-primary font-bold text-center hover:bg-primary hover:text-primary-foreground transition-colors block"
              >
                Book Auto — S/40/hr
              </a>
            </motion.div>

            {/* Camioneta / SUV */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#111] border-2 border-primary rounded-3xl p-8 flex flex-col relative md:-translate-y-4 shadow-2xl shadow-primary/20"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold tracking-widest whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="text-4xl mb-4 mt-2">🚙</div>
              <h3 className="text-2xl font-bold text-white mb-1">Camioneta / SUV</h3>
              <p className="text-muted-foreground text-sm mb-6">Up to 6 passengers · Comfort & space</p>
              <div className="mb-6">
                <span className="text-5xl font-display font-bold text-primary">S/ 50</span>
                <span className="text-white/50 text-lg ml-2">/ hora</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 mb-8 space-y-2 text-sm text-white/70">
                <div className="flex justify-between"><span>2 horas</span><span className="text-white font-semibold">S/ 100</span></div>
                <div className="flex justify-between"><span>4 horas</span><span className="text-white font-semibold">S/ 200</span></div>
                <div className="flex justify-between"><span>8 horas (full day)</span><span className="text-white font-semibold">S/ 400</span></div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {["Professional driver","Flexible stops","All Lima","English support","More luggage space"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl("Hola! Quiero cotizar el servicio por horas en Camioneta/SUV. ¿Pueden darme más información?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-center hover:opacity-90 transition-opacity block"
              >
                Book SUV — S/50/hr
              </a>
            </motion.div>

            {/* Ejecutivo Premium Deluxe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col"
            >
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-2xl font-bold text-white mb-1">Ejecutivo Premium</h3>
              <p className="text-muted-foreground text-sm mb-6">Luxury service · Deluxe experience</p>
              <div className="mb-6">
                <span className="text-5xl font-display font-bold text-primary">S/ 60</span>
                <span className="text-white/50 text-lg ml-2">/ hora</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 mb-8 space-y-2 text-sm text-white/70">
                <div className="flex justify-between"><span>2 horas</span><span className="text-white font-semibold">S/ 120</span></div>
                <div className="flex justify-between"><span>4 horas</span><span className="text-white font-semibold">S/ 240</span></div>
                <div className="flex justify-between"><span>8 horas (full day)</span><span className="text-white font-semibold">S/ 480</span></div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {["Premium vehicle","VIP driver","All Lima & beyond","English speaking","Deluxe comfort & privacy"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl("Hola! Quiero cotizar el servicio por horas en Ejecutivo Premium Deluxe. ¿Pueden darme más información?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-primary text-primary font-bold text-center hover:bg-primary hover:text-primary-foreground transition-colors block"
              >
                Book Premium — S/60/hr
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-white mb-6">What's included in all packages:</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base text-white/80">
            {[
              "Professional licensed driver",
              "Clean & comfortable vehicle",
              "English-speaking available",
              "Flexible pickup location",
              "No extra charges"
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mx-auto bg-card rounded-2xl flex items-center justify-center border border-white/5 shadow-lg shadow-black/50 mb-6">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Travel</h3>
              <p className="text-muted-foreground">Meetings, airport pickups, corporate events.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-20 h-20 mx-auto bg-card rounded-2xl flex items-center justify-center border border-white/5 shadow-lg shadow-black/50 mb-6">
                <ShoppingBag className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Shopping & Leisure</h3>
              <p className="text-muted-foreground">Markets, malls, restaurants, Miraflores.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 mx-auto bg-card rounded-2xl flex items-center justify-center border border-white/5 shadow-lg shadow-black/50 mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Family & Groups</h3>
              <p className="text-muted-foreground">Tours, school pickups, group activities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Need a custom quote?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us how many hours you need and where you want to go. We'll give you a great price.
          </p>
          <a 
            href={getWhatsAppUrl("Hello! I need a custom quote for a private driver by the hour")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe5d] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-5 h-5" /> Chat with us on WhatsApp
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
