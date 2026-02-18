import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-rose-light">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
            Javite nam <span className="italic text-primary">se</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Želite da naručite tortu ili imate pitanje? Kontaktirajte nas putem
            društvenih mreža ili telefona — rado ćemo vam pomoći!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <a
            href="https://www.instagram.com/sajkaska_sladoteka/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display text-foreground text-lg">Instagram</p>
              <p className="text-muted-foreground text-sm font-body">@sajkaska_sladoteka</p>
            </div>
          </a>

          <a
            href="https://www.facebook.com/jelenabiljana.tortesajkas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Facebook className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display text-foreground text-lg">Facebook</p>
              <p className="text-muted-foreground text-sm font-body">Sajkaška Sladoteka</p>
            </div>
          </a>

          <a
            href="tel:+381600000000"
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display text-foreground text-lg">Telefon</p>
              <p className="text-muted-foreground text-sm font-body">Pozovite nas</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 group">
            <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display text-foreground text-lg">Lokacija</p>
              <p className="text-muted-foreground text-sm font-body">Sajkaš, Vojvodina</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
