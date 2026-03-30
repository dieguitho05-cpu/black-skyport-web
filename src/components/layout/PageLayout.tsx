import { ReactNode } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  if (title) document.title = `${title} | Black Skyport Lima`;
  if (description) {
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (meta) meta.content = description;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
