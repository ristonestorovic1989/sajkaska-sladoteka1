import { motion } from "framer-motion";
import { Instagram, Facebook, Heart } from "lucide-react";
import logoInverted from "@/assets/logo-inverted.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/5" />

      <div className="container max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src={logoInverted} alt="Logo" className="h-14 md:h-16 w-auto" style={{ mixBlendMode: "screen" }} />
            <div className="font-display text-2xl md:text-3xl text-primary-foreground leading-tight">
              <span>Šajkaška</span>
              <br />
              <span className="italic text-gradient-gold text-xl md:text-2xl">Sladoteka</span>
            </div>
          </div>
          <p className="text-primary-foreground/50 font-body text-sm mb-8">
            Domaće torte i kolači — Sajkaš, Vojvodina
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.instagram.com/sajkaska_sladoteka/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.facebook.com/jelenabiljana.tortesajkas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="w-16 h-px bg-primary-foreground/10 mx-auto mb-6" />
          <p className="text-primary-foreground/30 font-body text-xs flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Sajkaška Sladoteka. Napravljeno sa
            <Heart className="w-3 h-3 text-primary inline" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
