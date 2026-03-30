import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/utils";
import { MessageCircle, CheckCircle2, User, Phone, MapPin, Navigation, Calendar, Users, Briefcase, CreditCard } from "lucide-react";

interface FormData {
  name: string;
  whatsapp: string;
  pickup: string;
  destination: string;
  datetime: string;
  passengers: string;
  luggage: string;
  payment: string;
}

const initialForm: FormData = {
  name: "",
  whatsapp: "",
  pickup: "",
  destination: "",
  datetime: "",
  passengers: "1",
  luggage: "0",
  payment: "",
};

const pickupOptions = [
  "Aeropuerto Jorge Chávez (LIM)",
  "Miraflores",
  "San Isidro",
  "Barranco",
  "Surco",
  "La Molina",
  "San Borja",
  "Otro / Other",
];

const destinationOptions = [
  "Aeropuerto Jorge Chávez (LIM)",
  "Miraflores",
  "San Isidro",
  "Barranco",
  "Surco",
  "La Molina",
  "San Borja",
  "Paracas",
  "Ica / Huacachina",
  "Nazca",
  "Otro / Other",
];

const paymentOptions = [
  "Efectivo / Cash (USD)",
  "Efectivo / Cash (PEN - Soles)",
  "Tarjeta / Card",
  "Yape / Plin",
  "Por confirmar / TBD",
];

export function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.pickup) newErrors.pickup = "Required";
    if (!form.destination) newErrors.destination = "Required";
    if (!form.datetime) newErrors.datetime = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `🚗 *NEW BOOKING — BLACK SKYPORT*

👤 *Name / Nombre:* ${form.name}
📱 *WhatsApp:* ${form.whatsapp || "Not provided"}
📍 *Pickup / Recojo:* ${form.pickup}
🏁 *Destination / Destino:* ${form.destination}
📅 *Date & Time / Fecha y Hora:* ${form.datetime}
👥 *Passengers / Pasajeros:* ${form.passengers}
🧳 *Luggage / Maletas:* ${form.luggage}
💳 *Payment / Pago:* ${form.payment || "Not specified"}

_Sent from blackskyport.com_`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
    setErrors({});
  };

  const field = (key: keyof FormData) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    },
  });

  return (
    <section id="book" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider mb-4">
            BOOK YOUR RIDE / RESERVA AHORA
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Reserve in <span className="text-gradient-gold">30 seconds</span>
          </h2>
          <p className="text-muted-foreground">
            Fill the form and we'll confirm via WhatsApp instantly.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-card border border-primary/30 rounded-3xl p-12 text-center shadow-2xl shadow-primary/10"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                Your reservation has been received ✅
              </h3>
              <p className="text-muted-foreground mb-3">
                We're opening WhatsApp to confirm your booking. If it didn't open automatically, write to us directly.
              </p>
              <p className="text-sm text-muted-foreground/60 mb-8">
                Tu reserva ha sido enviada. Abrimos WhatsApp para confirmar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Open WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
                >
                  New booking / Nueva reserva
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="bg-card border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/40"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <User className="inline w-4 h-4 mr-1 text-primary" />
                    Name / Nombre *
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    {...field("name")}
                    className={`w-full bg-background border ${errors.name ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">Required field</p>}
                </div>

                {/* WhatsApp */}
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <Phone className="inline w-4 h-4 mr-1 text-primary" />
                    Your WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 555 000 0000"
                    {...field("whatsapp")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                {/* Pickup */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <MapPin className="inline w-4 h-4 mr-1 text-primary" />
                    Pickup / Recojo *
                  </label>
                  <select
                    {...field("pickup")}
                    className={`w-full bg-background border ${errors.pickup ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors`}
                  >
                    <option value="">Select pickup...</option>
                    {pickupOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {errors.pickup && <p className="text-red-400 text-xs mt-1">Required field</p>}
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <Navigation className="inline w-4 h-4 mr-1 text-primary" />
                    Destination / Destino *
                  </label>
                  <select
                    {...field("destination")}
                    className={`w-full bg-background border ${errors.destination ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors`}
                  >
                    <option value="">Select destination...</option>
                    {destinationOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {errors.destination && <p className="text-red-400 text-xs mt-1">Required field</p>}
                </div>

                {/* Date & Time */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1 text-primary" />
                    Date & Time / Fecha y Hora *
                  </label>
                  <input
                    type="datetime-local"
                    {...field("datetime")}
                    className={`w-full bg-background border ${errors.datetime ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors [color-scheme:dark]`}
                  />
                  {errors.datetime && <p className="text-red-400 text-xs mt-1">Required field</p>}
                </div>

                {/* Passengers */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <Users className="inline w-4 h-4 mr-1 text-primary" />
                    Passengers / Pasajeros
                  </label>
                  <select
                    {...field("passengers")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                      <option key={n} value={n}>{n} passenger{n > 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>

                {/* Luggage */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <Briefcase className="inline w-4 h-4 mr-1 text-primary" />
                    Luggage / Maletas
                  </label>
                  <select
                    {...field("luggage")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    {[0,1,2,3,4,5,6].map((n) => (
                      <option key={n} value={n}>{n} bag{n !== 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>

                {/* Payment */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <CreditCard className="inline w-4 h-4 mr-1 text-primary" />
                    Payment / Método de Pago
                  </label>
                  <select
                    {...field("payment")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Select payment method...</option>
                    {paymentOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full flex items-center justify-center gap-3 py-4 px-8 bg-primary text-primary-foreground font-bold text-lg rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/30"
              >
                <MessageCircle className="w-6 h-6" />
                Book Now via WhatsApp
              </button>

              <p className="text-center text-xs text-muted-foreground/50 mt-4">
                Your info will be sent securely via WhatsApp • Tu info se envía por WhatsApp de forma segura
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
