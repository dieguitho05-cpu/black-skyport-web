import { Link } from "wouter";
import { getWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, MapPin, Phone } from "lucide-react";

const PAGE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/airport-transfers", label: "Airport Transfers" },
  { href: "/tourist-services", label: "Tourist Services" },
  { href: "/hourly-service", label: "Hourly Service" },
  { href: "/contact", label: "Book Now" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4 h-16 w-56 overflow-hidden rounded-sm">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-pro.png`}
                alt="Black Skyport"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium private transportation in Lima. Airport transfers, city tours, and hourly service. English & Spanish support 24/7.
            </p>
            <p className="text-xs text-muted-foreground/50 mt-3 italic">
              Transporte privado premium en Lima. 24 horas, 7 días.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              Pages / Páginas
            </h4>
            <ul className="space-y-3">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              Contact / Contacto
            </h4>
            <div className="space-y-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#25D366] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                +51 922 024 645
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                Lima, Peru – Aeropuerto Jorge Chávez
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                24/7 — English & Español
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Black Skyport. All rights reserved. Lima, Peru.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Private transportation · Airport transfers · City tours
          </p>
        </div>
      </div>
    </footer>
  );
}
