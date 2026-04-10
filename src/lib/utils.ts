import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = "51922024645";

export const getWhatsAppUrl = (customMessage?: string) => {
  const defaultMessage = `Hola Black Skyport! 🚗✈️
Nombre / Name: 
Fecha / Date: 
Hora / Time: 
Pasajeros / Passengers: 
Maletas / Luggage: 
Unidad / Vehicle: 
Servicio / Service: `;

  const text = customMessage || defaultMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
