import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, WA_MSG_EN } from "@/lib/utils";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppUrl(WA_MSG_EN)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      style={{ animation: "wa-bounce 2.5s ease-in-out infinite" }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#25D366] text-white font-extrabold text-base px-6 py-4 rounded-full shadow-2xl shadow-[#25D366]/50 hover:bg-[#1ebe5d] hover:scale-110 active:scale-95 transition-colors duration-200"
    >
      <MessageCircle className="w-6 h-6 flex-shrink-0" />
      <span>Book Now</span>
      <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
        <span className="relative inline-flex rounded-full h-5 w-5 bg-white" />
      </span>
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </a>
  );
}
