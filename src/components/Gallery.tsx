import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cake, CakeSlice, IceCreamCone, Cookie, Cherry, Croissant } from "lucide-react";
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

      {/* Decorative background icons */}
      <div className="absolute inset-0 pointer-events-none select-none text-primary/[0.07]">
        <Cake className="absolute top-[8%] left-[5%] w-20 h-20 md:w-28 md:h-28 rotate-[-15deg]" />
        <CakeSlice className="absolute top-[15%] right-[8%] w-16 h-16 md:w-24 md:h-24 rotate-[12deg]" />
        <IceCreamCone className="absolute top-[45%] left-[3%] w-14 h-14 md:w-20 md:h-20 rotate-[-8deg]" />
        <Cookie className="absolute top-[55%] right-[5%] w-18 h-18 md:w-24 md:h-24 rotate-[20deg]" />
        <Cherry className="absolute bottom-[15%] left-[10%] w-12 h-12 md:w-18 md:h-18 rotate-[10deg]" />
        <Croissant className="absolute bottom-[10%] right-[10%] w-16 h-16 md:w-22 md:h-22 rotate-[-12deg]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
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

        {/* Bento grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {categories.map((cat, i) => {
            // First item spans 2 cols + 2 rows for hero effect
            const isHero = i === 0;
            const isTall = i === 2;

            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${isHero ? "col-span-2 row-span-2" : ""} ${isTall ? "row-span-2" : ""}`}
              >
                <Link
                  to={`/galerija/${cat.slug}`}
                  className="block group relative w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className={`font-display text-primary-foreground ${isHero ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                      {cat.label}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-6 h-px bg-primary-foreground/60" />
                      <span className="text-primary-foreground/80 font-body text-xs tracking-wider uppercase">
                        Pogledaj
                      </span>
                    </div>
                  </div>
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
