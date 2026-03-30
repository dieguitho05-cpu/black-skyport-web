import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Phone, Globe } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/airport-transfers", label: "Airport Transfers" },
  { href: "/tourist-services", label: "Tourist Services" },
  { href: "/hourly-service", label: "Hourly Service" },
  { href: "/contact", label: "Book Now" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [location] = useLocation();

  const LABELS: Record<string, { EN: string; ES: string }> = {
    "/": { EN: "Home", ES: "Inicio" },
    "/airport-transfers": { EN: "Airport Transfers", ES: "Traslados" },
    "/tourist-services": { EN: "Tourist Services", ES: "Turismo" },
    "/hourly-service": { EN: "Hourly Service", ES: "Por Horas" },
    "/contact": { EN: "Book Now", ES: "Reservar" },
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="h-11 w-44 overflow-hidden rounded-sm">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-black-skyport.png`}
              alt="Black Skyport"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-primary ${
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {LABELS[link.href][lang]}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang((l) => (l === "EN" ? "ES" : "EN"))}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors border border-white/10 rounded-full px-3 py-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "EN" ? "ES" : "EN"}
          </button>

          {/* Book Now */}
          <Link href="/contact">
            <Button className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-5 py-2 text-sm rounded-lg">
              Book Now
            </Button>
          </Link>

          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 border-white/10 hover:bg-white/5 text-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp
            </Button>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-white/5 px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${
                location === link.href
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {LABELS[link.href][lang]}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setLang((l) => (l === "EN" ? "ES" : "EN"))}
              className="flex items-center gap-1 px-4 py-3 rounded-xl border border-white/10 text-sm font-semibold text-muted-foreground"
            >
              <Globe className="w-4 h-4" />
              {lang === "EN" ? "ES" : "EN"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
