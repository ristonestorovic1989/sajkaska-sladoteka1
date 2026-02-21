import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cake, Cookie, ChefHat, CupSoda } from "lucide-react";

const categories = [
  {
    slug: "torte",
    label: "Torte",
    description: "Elegantne torte za svaku priliku",
    icon: Cake,
    accent: "primary" as const,
  },
  {
    slug: "sitni-kolaci",
    label: "Sitni kolači",
    description: "Domaći kolači za svaki slatki sto",
    icon: Cookie,
    accent: "accent" as const,
  },
  {
    slug: "palacinke",
    label: "Palačinke",
    description: "Savršene palačinke sa raznim filovima",
    icon: ChefHat,
    accent: "blue" as const,
  },
  {
    slug: "kupovi",
    label: "Kupovi",
    description: "Dekorativni kupovi za sve prilike",
    icon: CupSoda,
    accent: "primary" as const,
  },
];

const accentStyles = {
  primary: {
    iconBg: "bg-rose-light",
    iconColor: "text-primary",
    hoverGlow: "hover:shadow-primary/15",
  },
  accent: {
    iconBg: "bg-mint-light",
    iconColor: "text-accent",
    hoverGlow: "hover:shadow-accent/15",
  },
  blue: {
    iconBg: "bg-blue-light",
    iconColor: "text-blue",
    hoverGlow: "hover:shadow-blue/15",
  },
};

const Gallery = () => {
  return (
    <section id="galerija" className="py-24 md:py-32 bg-blue-light relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue font-body text-sm tracking-[0.25em] uppercase mb-3">
            Galerija
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
            Naše <span className="italic text-primary">kreacije</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-blue/40" />
            <div className="w-2 h-2 rounded-full bg-blue/60" />
            <div className="w-16 h-px bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="w-8 h-px bg-primary/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => {
            const style = accentStyles[cat.accent];
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/galerija/${cat.slug}`}
                  className={`glass-card rounded-2xl p-6 md:p-8 flex flex-col items-center text-center gap-4 group hover:shadow-xl ${style.hoverGlow} transition-all duration-500 block h-full`}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${style.iconBg}`}
                  >
                    <cat.icon className={`w-7 h-7 ${style.iconColor}`} />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-foreground mb-1">
                      {cat.label}
                    </h3>
                    <p className="text-muted-foreground font-body text-xs md:text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-primary font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Pogledaj →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
