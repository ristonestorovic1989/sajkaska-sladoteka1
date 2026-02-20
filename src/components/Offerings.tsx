import { motion } from "framer-motion";
import { Cake, Cookie, UtensilsCrossed, PartyPopper } from "lucide-react";

const offerings = [
  {
    icon: Cake,
    title: "Svadbene torte",
    description: "Elegantne višespratne torte po meri, ukrašene cvetovima, čipkom i fondanom za vaš najlepši dan.",
    accent: "primary",
  },
  {
    icon: PartyPopper,
    title: "Rođendanske torte",
    description: "Kreativne tematske torte za decu i odrasle — od klasičnih do potpuno personalizovanih dizajna.",
    accent: "accent",
  },
  {
    icon: Cookie,
    title: "Sitni kolači",
    description: "Domaći kolači, cupcakes, makronsi i petit four za svaki slatki sto i svečanu priliku.",
    accent: "blue",
  },
  {
    icon: UtensilsCrossed,
    title: "Slatki stolovi",
    description: "Kompletna organizacija slatkog stola za svadbe, krštenja, rođendane i korporativne događaje.",
    accent: "primary",
  },
];

const Offerings = () => {
  return (
    <section id="ponuda" className="py-24 md:py-32 bg-mint-light relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/8 blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
            Ponuda
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
            Šta <span className="italic text-primary">nudimo</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-accent/40" />
            <div className="w-2 h-2 rounded-full bg-accent/60" />
            <div className="w-16 h-px bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="w-8 h-px bg-primary/40" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 group"
            >
              <div className="flex items-start gap-5">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    item.accent === "primary" ? "bg-rose-light group-hover:glow-pink" :
                    item.accent === "accent" ? "bg-mint-light group-hover:glow-mint" :
                    "bg-blue-light"
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${
                    item.accent === "primary" ? "text-primary" :
                    item.accent === "accent" ? "text-accent" :
                    "text-blue"
                  }`} />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
