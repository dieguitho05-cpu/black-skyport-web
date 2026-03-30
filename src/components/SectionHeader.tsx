import { motion } from "framer-motion";

interface SectionHeaderProps {
  titleEs: string;
  titleEn: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ titleEs, titleEn, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"}`}
    >
      <div className={`inline-flex items-center gap-2 mb-4 ${centered ? "justify-center w-full" : ""}`}>
        <div className="h-[1px] w-8 bg-primary"></div>
        <span className="text-primary font-bold tracking-widest uppercase text-xs">Black Skyport</span>
        <div className="h-[1px] w-8 bg-primary"></div>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-2">
        {titleEs}
      </h2>
      <h3 className="text-xl md:text-2xl font-display text-muted-foreground italic mb-6">
        {titleEn}
      </h3>
      
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl font-light text-lg mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
