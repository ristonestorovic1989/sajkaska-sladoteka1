import { motion } from "framer-motion";
import { Cake, Cookie, UtensilsCrossed, PartyPopper } from "lucide-react";

const offerings = [
  {
    icon: Cake,
    title: "Svadbene torte",
    description: "Elegantne višespratne torte po meri, ukrašene cvetovima, čipkom i fondanom za vaš najlepši dan.",
  },
  {
    icon: PartyPopper,
    title: "Rođendanske torte",
    description: "Kreativne tematske torte za decu i odrasle — od klasičnih do potpuno personalizovanih dizajna.",
  },
  {
    icon: Cookie,
    title: "Sitni kolači",
    description: "Domaći kolači, cupcakes, makronsi i petit four za svaki slatki sto i svečanu priliku.",
  },
  {
    icon: UtensilsCrossed,
    title: "Slatki stolovi",
    description: "Kompletna organizacija slatkog stola za svadbe, krštenja, rođendane i korporativne događaje.",
  },
];

const Offerings = () => {
  return (
    <section id="ponuda" className="py-24 md:py-32 bg-mint-light">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-mint font-body text-sm tracking-[0.25em] uppercase mb-3">
            Ponuda
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
            Šta <span className="italic text-primary">nudimo</span>
          </h2>
          <div className="w-16 h-px bg-mint mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-500 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-full bg-mint-light flex items-center justify-center group-hover:bg-mint/20 transition-colors">
                  <item.icon className="w-6 h-6 text-mint" />
                </div>
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
