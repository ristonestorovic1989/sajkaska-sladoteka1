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
    vibe: "Svadbe, rođendani, tematske",
    note: "Ručni rad i premijum dekoracije",
    featured: true,
    size: "large",
  },
  {
    slug: "sitni-kolaci",
    label: "Sitni kolači",
    image: catSitniKolaci,
    vibe: "Koktel i slavske selekcije",
    note: "Elegantne mini forme i puni ukusi",
    size: "tall",
  },
  {
    slug: "palacinke",
    label: "Palačinke",
    image: catPalacinke,
    vibe: "Slatke i kremaste kombinacije",
    note: "Topla priprema i bogati filovi",
    size: "wide",
  },
  {
    slug: "sladoled",
    label: "Sladoled",
    image: catSladoled,
    vibe: "Osvežavajući domaći ukusi",
    note: "Kremaste baze i sezonske arome",
    size: "tall",
  },
];

const getSpanClasses = (size: CategorySize) => {
  if (size === "large") return "md:col-span-2 md:row-span-3";
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
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 text-primary/65">
            <div className="h-px w-14 bg-primary/45" />
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-background/85 px-4 py-1.5 text-xs font-body uppercase tracking-[0.22em] text-warm-brown shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Naši radovi
            </p>
          </div>

          <div className="mt-6 grid items-end gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-display leading-tight text-foreground md:text-6xl">
                Signature kolekcije
                <span className="block italic text-primary">za posebne prilike</span>
              </h2>
              <p className="mt-4 max-w-2xl font-body text-warm-brown/85 md:mt-5 md:text-lg">
                Izdvojili smo radove koji najbolje opisuju naš stil, teksturu i završnu obradu. Svaka
                kolekcija vodi na kompletnu galeriju sa svim fotografijama.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/25 bg-background/70 p-5 shadow-[0_20px_50px_-35px_hsl(var(--foreground)/0.9)] backdrop-blur-sm">
              <p className="text-[11px] font-body uppercase tracking-[0.18em] text-warm-brown/70">
                Boutique izbor
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span
                    key={cat.slug}
                    className="rounded-full border border-primary/25 bg-white/80 px-3 py-1 text-xs font-body text-warm-brown"
                  >
                    {cat.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid auto-rows-[230px] grid-cols-1 gap-4 md:auto-rows-[170px] md:grid-cols-4 md:grid-flow-dense md:gap-5">
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
                className="group relative block h-full w-full overflow-hidden rounded-[1.75rem] border border-primary/25 bg-white/25 shadow-[0_16px_42px_-24px_hsl(var(--foreground)/0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_26px_60px_-24px_hsl(var(--foreground)/0.72)]"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/38 to-foreground/0 transition-colors duration-500 group-hover:from-foreground/98" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-blue/25 opacity-95 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-primary/35 bg-white/90 px-3 py-1 text-[11px] font-body uppercase tracking-[0.12em] text-foreground/85">
                      {cat.featured ? "Izdvojeno" : "Kolekcija"}
                    </span>
                    <span className="rounded-full border border-white/35 bg-white/15 px-2.5 py-1 text-[11px] font-body text-white/90 backdrop-blur-sm">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
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
    </section>
  );
};

export default Gallery;
