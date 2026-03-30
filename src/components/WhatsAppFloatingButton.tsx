import { useState } from "react";
import { MessageCircle, X, Calendar } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      {open && (
        <div className="flex flex-col gap-2 items-end mb-1">
          {/* Book Now */}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-4 py-2.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </a>

          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-4 py-2.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5d] hover:scale-105 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Contact options"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}

        {/* Ping dot — only when closed */}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white/90" />
          </span>
        )}
      </button>
    </div>
  );
}
