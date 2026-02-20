import { motion } from "framer-motion";
import { Cake, Heart, Star } from "lucide-react";

const items = [
  {
    icon: Heart,
    title: "Sa ljubavlju",
    description: "Svaki proizvod je napravljen sa strašću i posvećenošću, kao za najdražu osobu.",
    color: "primary" as const,
  },
  {
    icon: Cake,
    title: "Domaći ukus",
    description: "Koristimo tradicionalne recepte i najkvalitetnije domaće sastojke za autentičan ukus.",
    color: "accent" as const,
  },
  {
    icon: Star,
    title: "Za svaku priliku",
    description: "Svadbe, rođendani, slave ili bilo koji poseban trenutak — tu smo za vas.",
    color: "blue" as const,
  },
];

const About = () => {
  return (
    <section id="o-nama" className="py-24 md:py-32 bg-gradient-premium relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-accent font-body text-sm uppercase mb-3"
          >
            O nama
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
            Slatka tradicija sa <span className="italic text-primary">ljubavlju</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-px bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="w-16 h-px bg-accent" />
            <div className="w-2 h-2 rounded-full bg-accent/60" />
            <div className="w-8 h-px bg-accent/40" />
          </div>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Sajkaška Sladoteka je porodični posao posvećen stvaranju nezaboravnih slatkiša.
            Svaka torta i kolač su ručno pravljeni sa pažnjom, od najkvalitetnijih
            sastojaka — jer verujemo da svaki poseban trenutak zaslužuje savršen zalogaj.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-shadow duration-500 ${
                  item.color === "primary" ? "bg-rose-light glow-pink" :
                  item.color === "accent" ? "bg-mint-light glow-mint" :
                  "bg-blue-light"
                }`}
              >
                <item.icon className={`w-7 h-7 ${
                  item.color === "primary" ? "text-primary" :
                  item.color === "accent" ? "text-accent" :
                  "text-blue"
                }`} />
              </motion.div>
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
