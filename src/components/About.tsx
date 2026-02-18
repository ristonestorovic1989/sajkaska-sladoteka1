import { motion } from "framer-motion";
import { Cake, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <section id="o-nama" className="py-24 md:py-32 bg-gradient-premium">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
            O nama
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
            Slatka tradicija sa <span className="italic text-primary">ljubavlju</span>
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Sajkaška Sladoteka je porodični posao posvećen stvaranju nezaboravnih slatkiša.
            Svaka torta i kolač su ručno pravljeni sa pažnjom, od najkvalitetnijih
            sastojaka — jer verujemo da svaki poseban trenutak zaslužuje savršen zalogaj.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              icon: Heart,
              title: "Sa ljubavlju",
              description:
                "Svaki proizvod je napravljen sa strašću i posvećenošću, kao za najdražu osobu.",
            },
            {
              icon: Cake,
              title: "Domaći ukus",
              description:
                "Koristimo tradicionalne recepte i najkvalitetnije domaće sastojke za autentičan ukus.",
            },
            {
              icon: Star,
              title: "Za svaku priliku",
              description:
                "Svadbe, rođendani, slave ili bilo koji poseban trenutak — tu smo za vas.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-light flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-7 h-7 text-blue" />
              </div>
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
