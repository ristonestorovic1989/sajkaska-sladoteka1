import { motion } from "framer-motion";
import heroCake from "@/assets/hero-cake.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          src={heroCake}
          alt="Elegantna svadbena torta sa cvetovima"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/85" />
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-primary/10 blur-2xl"
      />
      <motion.div
        animate={{ y: [10, -15, 10], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[15%] w-32 h-32 rounded-full bg-accent/10 blur-2xl"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-8"
        >
          
          <span className="text-mint-light font-body text-xs tracking-[0.3em] uppercase">
            Domaće torte i kolači
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-primary-foreground mb-6 leading-tight"
        >
          Sajkaška
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="italic text-gradient-gold"
          >
            Sladoteka
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-primary-foreground/80 font-body text-lg md:text-xl font-light max-w-xl mx-auto mb-12"
        >
          Svaki zalogaj priča priču — ručno pravljene torte i kolači
          za vaše najlepše trenutke
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#ponuda"
            className="group relative inline-block px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
          >
            <span className="relative z-10">Pogledaj ponudu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#kontakt"
            className="inline-block px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Naruči tortu
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
