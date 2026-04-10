import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John",
    country: "🇺🇸 USA",
    text: "Excellent service, very punctual and safe. Highly recommend Black Skyport to anyone visiting Lima!",
    rating: 5,
  },
  {
    name: "Sarah M.",
    country: "🇺🇸 USA",
    text: "The driver was waiting at arrivals with a sign. Very professional and comfortable ride. Highly recommended!",
    rating: 5,
  },
  {
    name: "James T.",
    country: "🇬🇧 UK",
    text: "Driver was waiting at the airport even though my flight was delayed. They tracked my flight and adjusted. Amazing!",
    rating: 5,
  },
  {
    name: "Marie L.",
    country: "🇫🇷 France",
    text: "Clean, comfortable car and a very friendly driver who spoke good English. Best airport transfer in Lima!",
    rating: 5,
  },
  {
    name: "Carlos R.",
    country: "🇨🇴 Colombia",
    text: "Excelente servicio. Muy puntual y profesional. El vehículo estaba impecable. Los recomiendo al 100%.",
    rating: 5,
  },
  {
    name: "Anna K.",
    country: "🇩🇪 Germany",
    text: "Booked for our family of 4 with lots of luggage. They arranged a van, no problems at all. Perfect experience.",
    rating: 5,
  },
  {
    name: "Michael B.",
    country: "🇦🇺 Australia",
    text: "Used Black Skyport 3 times during my stay in Lima. Always on time, always professional. My go-to service.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider mb-4">
            REVIEWS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
            What our clients say
          </h2>
          <p className="text-muted-foreground">
            Lo que dicen nuestros clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-colors flex flex-col gap-4 shadow-lg shadow-black/20"
            >
              <Stars count={t.rating} />
              <p className="text-foreground/90 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground/50 mt-10"
        >
          ⭐ 500+ satisfied clients across Lima • 500+ clientes satisfechos en Lima
        </motion.p>
      </div>
    </section>
  );
}
