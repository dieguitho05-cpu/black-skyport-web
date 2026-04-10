import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = "51922024645";

export const WA_MSG_EN = `Hello, I need a transfer in Lima.
Pickup: 
Drop-off: 
Date: 
Time: 
Passengers: `;

export const WA_MSG_ES = `Hola, necesito un traslado en Lima.
Recojo: 
Destino: 
Fecha: 
Hora: 
Pasajeros: `;

export const getWhatsAppUrl = (customMessage?: string) => {
  const text = customMessage || WA_MSG_EN;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const getWhatsAppUrlEs = (customMessage?: string) => {
  const text = customMessage || WA_MSG_ES;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
