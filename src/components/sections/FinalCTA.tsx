import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="py-24 bg-card border-t-2 border-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Book your ride now and travel with confidence
            <span className="block text-primary/90 italic text-2xl md:text-4xl mt-4 font-normal">
              ¿Listo para tu traslado? Reserva ahora.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't wait — secure your private transfer today. Limited availability.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="w-full sm:w-auto flex flex-col items-center gap-3">
              <a href="#book" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 rounded-2xl font-bold text-xl gap-2 shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                  Reserve Now
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </a>
              <span className="text-sm text-primary/80 font-medium">⚡ Limited availability — Book in advance</span>
            </div>

            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#25D366] transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Or contact us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
