import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import gallery1 from "@/assets/gallery-1.jpg";
import catSitniKolaci from "@/assets/cat-sitni-kolaci.jpg";
import catPalacinke from "@/assets/cat-palacinke.jpg";
import catKupovi from "@/assets/cat-kupovi.jpg";
import catSladoled from "@/assets/cat-sladoled.jpg";

const categories = [
  { slug: "torte", label: "Torte", image: gallery1 },
  { slug: "sitni-kolaci", label: "Sitni kolači", image: catSitniKolaci },
  { slug: "palacinke", label: "Palačinke", image: catPalacinke },
  { slug: "kupovi", label: "Kupovi", image: catKupovi },
  { slug: "sladoled", label: "Sladoled", image: catSladoled },
];

const Gallery = () => {
  return (
    <section id="galerija" className="py-24 md:py-32 bg-blue-light relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={`/galerija/${cat.slug}`}
                className="block group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/15 transition-all duration-500"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="font-display text-lg md:text-xl text-primary-foreground">
                    {cat.label}
                  </h3>
                  <span className="text-primary-foreground/70 font-body text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Pogledaj →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
