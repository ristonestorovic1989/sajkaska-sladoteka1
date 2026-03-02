import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Cake,
  CakeSlice,
  Cherry,
  Cookie,
  Croissant,
  IceCreamCone,
  Sparkles,
} from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import catSitniKolaci from "@/assets/cat-sitni-kolaci.jpg";
import catPalacinke from "@/assets/cat-palacinke.jpg";
import catSladoled from "@/assets/cat-sladoled.jpg";

type CategorySize = "large" | "tall" | "wide" | "default";

type Category = {
  slug: string;
  label: string;
  image: string;
  vibe: string;
  note: string;
  featured?: boolean;
  size: CategorySize;
};

const categories: Category[] = [
  {
    slug: "torte",
    label: "Torte",
    image: gallery1,
    vibe: "Wedding, rodjendani, tematske",
    note: "Rucni rad i premium dekoracije",
    featured: true,
    size: "large",
  },
  {
    slug: "sitni-kolaci",
    label: "Sitni kolaci",
    image: catSitniKolaci,
    vibe: "Cocktail i slavske selekcije",
    note: "Elegantne mini forme i puni ukusi",
    size: "tall",
  },
  {
    slug: "palacinke",
    label: "Palacinke",
    image: catPalacinke,
    vibe: "Slatke i kremaste kombinacije",
    note: "Topla priprema i bogati filovi",
    size: "wide",
  },
  {
    slug: "sladoled",
    label: "Sladoled",
    image: catSladoled,
    vibe: "Osvezavajuci domaci ukusi",
    note: "Kremaste baze i sezonske arome",
    size: "default",
  },
];

const getSpanClasses = (size: CategorySize) => {
  if (size === "large") return "md:col-span-2 md:row-span-2";
  if (size === "tall") return "md:row-span-2";
  if (size === "wide") return "md:col-span-2";
  return "";
};

const Gallery = () => {
  return (
    <section
      id="galerija"
      className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-rose-light via-cream to-blue-light"
    >
      <div className="absolute top-0 left-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -top-20 right-[-120px] h-[360px] w-[360px] rounded-full bg-gold-light/35 blur-3xl" />
      <div className="absolute bottom-[-140px] left-[-140px] h-[360px] w-[360px] rounded-full bg-blue/25 blur-3xl" />

      <div className="absolute inset-0 pointer-events-none select-none text-primary/[0.07]">
        <Cake className="absolute top-[8%] left-[5%] h-20 w-20 rotate-[-15deg] md:h-28 md:w-28" />
        <CakeSlice className="absolute top-[15%] right-[8%] h-16 w-16 rotate-[12deg] md:h-24 md:w-24" />
        <IceCreamCone className="absolute top-[45%] left-[3%] h-14 w-14 rotate-[-8deg] md:h-20 md:w-20" />
        <Cookie className="absolute top-[55%] right-[5%] h-18 w-18 rotate-[20deg] md:h-24 md:w-24" />
        <Cherry className="absolute bottom-[15%] left-[10%] h-12 w-12 rotate-[10deg] md:h-18 md:w-18" />
        <Croissant className="absolute bottom-[10%] right-[10%] h-16 w-16 rotate-[-12deg] md:h-22 md:w-22" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-3xl md:mb-14"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-background/85 px-4 py-1.5 text-xs font-body uppercase tracking-[0.22em] text-warm-brown shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Naši radovi
          </p>
          <h2 className="mt-5 text-3xl font-display leading-tight text-foreground md:text-5xl">
            Naši radovi za
            <span className="italic text-primary"> sve posebne prilike</span>
          </h2>
          <p className="mt-4 max-w-2xl font-body text-warm-brown/85 md:mt-5 md:text-lg">
            Izdvojili smo četiri kolekcije koje najvernije predstavljaju naš
            stil, teksturu i završnu obradu. Izaberi kategoriju i pogledaj celu
            galeriju.
          </p>
        </motion.div>

        <div className="rounded-[2rem] border border-primary/20 bg-background/45 p-3 shadow-[0_25px_70px_-35px_hsl(var(--foreground)/0.55)] backdrop-blur-sm md:p-4">
          <div className="grid auto-rows-[230px] grid-cols-1 gap-4 md:auto-rows-[220px] md:grid-cols-4 md:gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={getSpanClasses(cat.size)}
              >
                <Link
                  to={`/galerija/${cat.slug}`}
                  className="group relative block h-full w-full overflow-hidden rounded-[1.75rem] border border-primary/30 bg-white/25 shadow-[0_18px_45px_-24px_hsl(var(--foreground)/0.7)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_25px_55px_-24px_hsl(var(--primary)/0.75)]"
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/35 to-foreground/0 transition-colors duration-500 group-hover:from-foreground/95" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue/20 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold-light via-primary to-gold-light opacity-90" />

                  <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                    <span className="rounded-full border border-primary/35 bg-white/90 px-3 py-1 text-[11px] font-body uppercase tracking-[0.12em] text-foreground/85">
                      {cat.featured ? "Izdvojeno" : "Kolekcija"}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-2xl font-display leading-none text-white md:text-[1.7rem]">
                      {cat.label}
                    </h3>
                    <p className="mt-2 text-sm font-body text-white/90 md:text-[15px]">
                      {cat.vibe}
                    </p>
                    <p className="mt-1 text-xs font-body uppercase tracking-[0.11em] text-white/70">
                      {cat.note}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
