import { motion } from "framer-motion";
import { Facebook, Heart, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-foreground py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/5" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-2 text-2xl font-display text-primary-foreground md:text-3xl">
            Šajkaška <span className="italic text-gradient-gold">Sladoteka</span>
          </h3>
          <p className="mb-8 text-sm font-body text-primary-foreground/50">
            Domaće torte i kolači - Šajkaš, Vojvodina
          </p>

          <div className="mb-8 flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.instagram.com/sajkaska_sladoteka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.facebook.com/jelenabiljana.tortesajkas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </motion.a>
          </div>

          <div className="mx-auto mb-6 h-px w-16 bg-primary-foreground/10" />
          <p className="flex items-center justify-center gap-1 text-xs font-body text-primary-foreground/30">
            &copy; {new Date().getFullYear()} Šajkaška Sladoteka. Napravljeno sa
            <Heart className="inline h-3 w-3 text-primary" />
          </p>
        </motion.div>

      </div>

      <p className="absolute bottom-5 right-5 z-20 text-[11px] font-body tracking-[0.08em] uppercase text-primary-foreground/40">
        Dizajn i izrada:{" "}
        <a
          href="https://www.instagram.com/ristonestorovic/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/75 transition-colors hover:text-primary"
        >
          RISTO
        </a>
      </p>
    </footer>
  );
};

export default Footer;
