import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight, MapPin, Clock, Info } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function TouristServices() {
  return (
    <PageLayout title="Tourist Services" description="Discover Lima and beyond with private tours. Huacachina, Paracas, Ica, Nazca and City Tours.">
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
              PRIVATE TOURS FROM LIMA
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Discover Lima & Beyond
            </h1>
            <p className="text-xl md:text-2xl text-primary italic mb-6">
              Private day trips · English guide available · Flexible schedule
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Explore Peru's most iconic destinations with your own private vehicle and driver. No shared buses, no fixed schedules.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
                Book a Tour
              </Link>
              <a 
                href={getWhatsAppUrl("Hello! I want to book a private tour")}
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

      {/* Popular Tours */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Popular Tours</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden relative min-h-[500px] flex flex-col justify-end"
            >
              <img 
                src="https://images.unsplash.com/photo-1521729839347-1b5c4ca63168?w=800&q=80" 
                alt="Huacachina" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="relative z-10 p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                  POPULAR
                </span>
                <h3 className="text-3xl font-display font-bold text-white mb-2">Huacachina + Sandboarding 🏄</h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Experience the stunning oasis of Huacachina surrounded by giant sand dunes. Sandboarding and dune buggy rides available.
                </p>
                <div className="flex flex-col gap-2 mb-6 text-sm text-white/70">
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Duration: Full Day (12–14 hours)</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Departs: From your hotel in Lima</div>
                </div>
                <a
                  href={getWhatsAppUrl("Hello! I want to book the Huacachina + Sandboarding tour")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group rounded-3xl overflow-hidden relative min-h-[500px] flex flex-col justify-end"
            >
              <img 
                src="https://images.unsplash.com/photo-1547566348-bd7b4a23bc90?w=800&q=80" 
                alt="Paracas" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="relative z-10 p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                  POPULAR
                </span>
                <h3 className="text-3xl font-display font-bold text-white mb-2">Paracas + Ballestas Islands 🐦</h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Visit the 'Poor Man's Galapagos' — sea lions, penguins, and thousands of birds on a boat tour, then explore the Paracas Reserve.
                </p>
                <div className="flex flex-col gap-2 mb-6 text-sm text-white/70">
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Duration: Full Day (10–12 hours)</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Departs: From your hotel in Lima</div>
                </div>
                <a
                  href={getWhatsAppUrl("Hello! I want to book the Paracas + Ballestas tour")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Tours Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-12 text-center">More Day Trips from Lima</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "City Tour Lima 🏛️",
                desc: "Explore Miraflores, Barranco, Plaza Mayor, Catedral, Parque del Amor and more",
                dur: "4–6 hours | Private transport",
                img: "https://images.unsplash.com/photo-1597576135440-7f617b3b3a3a?w=800&q=80",
                msg: "Hello! I want to book the Lima City Tour"
              },
              {
                title: "Ica Desert Tours 🌵",
                desc: "Explore the mysterious Ica desert, visit wineries, and experience the local culture",
                dur: "Full Day",
                img: "https://images.unsplash.com/photo-1608392543861-c8ae0f8b5f31?w=800&q=80",
                msg: "Hello! I want to book the Ica tour"
              },
              {
                title: "Nazca Lines ✈️",
                desc: "See the enigmatic Nazca Lines from the air. Transport from Lima to Nazca included.",
                dur: "Full Day (long trip)",
                img: "https://images.unsplash.com/photo-1548625149-720754002647?w=800&q=80",
                msg: "Hello! I want to book the Nazca Lines tour"
              },
              {
                title: "Lima Food Tour 🍽️",
                desc: "Private transport to Lima's world-class restaurants: Central, Maido, La Mar, Isolina and more.",
                dur: "Transport + recommendations only — not a guided tour",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
                msg: "Hello! I want to book the Lima Food Tour transport",
                note: true
              }
            ].map((tour, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-white/5 flex flex-col md:flex-row group"
              >
                <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-2">{tour.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tour.desc}</p>
                  <div className="flex items-start gap-2 mb-4 text-xs text-white/60">
                    {tour.note ? <Info className="w-4 h-4 text-primary shrink-0" /> : <Clock className="w-4 h-4 text-primary shrink-0" />}
                    <span>{tour.dur}</span>
                  </div>
                  <a
                    href={getWhatsAppUrl(tour.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start text-primary font-semibold hover:text-white transition-colors flex items-center gap-1 text-sm"
                  >
                    Book Tour <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included & CTA */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">What's included</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {["Private vehicle", "Professional driver", "English support", "Flexible schedule"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 bg-white/5 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
              </div>
            ))}
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Can't find your tour? We customize!</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Tell us where you want to go and we'll create a custom itinerary just for you.
            </p>
            <a 
              href={getWhatsAppUrl("Hello! I need a custom tour in Lima")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Request Custom Tour
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
