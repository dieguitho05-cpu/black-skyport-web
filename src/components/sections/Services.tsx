import { motion } from "framer-motion";
import { Plane, Clock, Map, Utensils } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const services = [
  {
    icon: Plane,
    titleEs: "Transfer Aeropuerto ↔ Hotel",
    titleEn: "Airport Transfer",
    descEs: "Traslados seguros desde y hacia el aeropuerto Jorge Chávez. Miraflores, San Isidro, Barranco y más.",
    descEn: "Safe transfers to and from Jorge Chávez airport. Miraflores, San Isidro, Barranco and more.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
  {
    icon: Clock,
    titleEs: "Servicio por Horas",
    titleEn: "Private Driver by Hour",
    descEs: "Vehículo con conductor por horas. Servicio flexible ideal para turismo o negocios.",
    descEn: "Vehicle with driver by the hour. Flexible service ideal for tourism or business.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
  },
  {
    icon: Map,
    titleEs: "City Tour Lima",
    titleEn: "Private City Tour",
    descEs: "Barranco, Miraflores, Parque Kennedy, Plaza Mayor, Catedral. Explora Lima a tu ritmo.",
    descEn: "Barranco, Miraflores, Kennedy Park, Main Square, Cathedral. Explore Lima at your pace.",
    image: "https://images.unsplash.com/photo-1597576135440-7f617b3b3a3a?w=800&q=80",
  },
  {
    icon: Utensils,
    titleEs: "Tour Gastronómico",
    titleEn: "Food Tour Transport",
    descEs: "Transporte seguro a los mejores restaurantes: Central, Maido, La Mar, Isolina. (Solo transporte).",
    descEn: "Safe transport to top restaurants: Central, Maido, La Mar, Isolina. (Transport only).",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
];

const restaurants = [
  { name: "Central", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80" },
  { name: "Maido", image: "https://images.unsplash.com/photo-1540914124281-342587941389?w=400&q=80" },
  { name: "La Mar", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&q=80" },
  { name: "Isolina", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80" },
  { name: "Cosme", image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80" },
  { name: "Panchita", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80" },
  { name: "El Mercado", image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&q=80" },
  { name: "Pescados Capitales", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          titleEs="Nuestros Servicios" 
          titleEn="Our Services" 
          subtitle="Soluciones de transporte privado diseñadas para su comodidad y seguridad. / Private transportation solutions designed for your comfort and safety."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-2xl flex flex-col border border-white/5 hover:border-primary/30 transition-colors duration-300 group shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.titleEs} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {service.titleEs}
                </h3>
                <h4 className="text-primary text-sm font-medium mb-4">
                  {service.titleEn}
                </h4>
                
                <div className="space-y-3 mt-auto">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="block mb-1 text-foreground/80 font-medium">ES:</span> {service.descEs}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-3">
                    <span className="block mb-1 text-foreground/80 font-medium">EN:</span> {service.descEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-2 text-center md:text-left">
              Restaurantes de Clase Mundial <span className="text-primary mx-2">/</span> <span className="text-muted-foreground font-normal">World-Class Restaurants</span>
            </h3>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none" }}>
            {restaurants.map((restaurant, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="w-48 shrink-0 h-64 rounded-xl overflow-hidden relative snap-start group"
              >
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h4 className="text-lg font-bold text-white mb-1 leading-tight">{restaurant.name}</h4>
                  <p className="text-white/70 text-xs">Solo transporte / Transport only</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
