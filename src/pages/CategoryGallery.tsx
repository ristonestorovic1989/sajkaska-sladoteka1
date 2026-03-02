import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cake,
  CakeSlice,
  IceCreamCone,
  Cookie,
  Cherry,
  Croissant,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import torta1 from "@/assets/torta-1.jpg";
import torta2 from "@/assets/torta-2.jpg";
import torta3 from "@/assets/torta-3.jpg";
import torta4 from "@/assets/torta-4.jpg";
import torta5 from "@/assets/torta-5.jpg";
import torta6 from "@/assets/torta-6.jpg";
import torta7 from "@/assets/torta-7.jpg";
import torta8 from "@/assets/torta-8.jpg";
import torta9 from "@/assets/torta-9.jpg";
import torta10 from "@/assets/torta-10.jpg";
import catSitniKolaci from "@/assets/cat-sitni-kolaci.jpg";
import catKupovi from "@/assets/cat-kupovi.jpg";
import catSladoled from "@/assets/cat-sladoled.jpg";
import palacinka1 from "@/assets/palacinka-1.jpg";
import palacinka2 from "@/assets/palacinka-2.jpg";
import palacinka3 from "@/assets/palacinka-3.jpg";
import palacinka4 from "@/assets/palacinka-4.jpg";
import palacinka5 from "@/assets/palacinka-5.jpg";
import palacinka6 from "@/assets/palacinka-6.jpg";
import torta11 from "@/assets/torta-11.jpg";
import torta12 from "@/assets/torta-12.jpg";
import torta13 from "@/assets/torta-13.jpg";
import torta14 from "@/assets/torta-14.jpg";
import torta15 from "@/assets/torta-15.jpg";
import torta16 from "@/assets/torta-16.jpg";

type CategoryKey = "torte" | "sitni-kolaci" | "palacinke" | "kupovi" | "sladoled";

interface CategoryData {
  title: string;
  subtitle: string;
  images: { src: string; alt: string }[];
}

const categoryData: Record<CategoryKey, CategoryData> = {
  torte: {
    title: "Torte",
    subtitle: "Elegantne torte za svaku priliku",
    images: [
      { src: torta1, alt: "Svadbena torta sa biserima i ružama" },
      { src: torta2, alt: "Rođendanska torta sa crvenim ružama" },
      { src: torta3, alt: "Elegantna torta sa krunom i mašnom" },
      { src: torta4, alt: "Tematska torta sa muzičkim motivima" },
      { src: torta5, alt: "Svadbena torta sa ružičastim ružama" },
      { src: torta6, alt: "Jack Daniels tematska torta" },
      { src: torta7, alt: "Dečije torte sa medvedićima i leptirima" },
      { src: torta8, alt: "Svadbena torta sa zlatnim postoljem" },
      { src: torta9, alt: "Dečija torta sa medvedićem i balonima" },
      { src: torta10, alt: "Crno-zlatna torta za 18. rođendan" },
      { src: torta11, alt: "Plavo-zlatna torta za 18. rođendan sa balonima" },
      { src: torta12, alt: "Svadbena torta sa ružama na drvenom postolju" },
      { src: torta13, alt: "Ružičasta torta sa makaronima i ružama za 18. rođendan" },
      { src: torta14, alt: "Bela torta sa zlatnim srcima" },
      { src: torta15, alt: "Ružičasta torta sa jagodama za 19. rođendan" },
      { src: torta16, alt: "Crno-zlatna torta sa natpisom Luka" },
    ],
  },
  "sitni-kolaci": {
    title: "Sitni kolači",
    subtitle: "Domaći kolači za svaki slatki sto",
    images: [{ src: catSitniKolaci, alt: "Kutije sitnih kolača" }],
  },
  palacinke: {
    title: "Palačinke",
    subtitle: "Savršene palačinke sa raznim filovima",
    images: [
      { src: palacinka1, alt: "Palačinka sa čokoladom i lešnicima" },
      { src: palacinka2, alt: "Dubai palačinka sa pistaćima" },
      { src: palacinka3, alt: "Palačinka sa šlagom i keksom" },
      { src: palacinka4, alt: "Palačinka u ambijentu kafića" },
      { src: palacinka5, alt: "Palačinka sa pistaćima i čokoladom" },
      { src: palacinka6, alt: "Palačinke sa malinama i čokoladom" },
    ],
  },
  kupovi: {
    title: "Kupovi",
    subtitle: "Dekorativni kupovi za sve prilike",
    images: [{ src: catKupovi, alt: "Zlatni rođendanski kup sa slatkišima" }],
  },
  sladoled: {
    title: "Sladoled",
    subtitle: "Kremasti sladoledi sa raznim prelivima",
    images: [{ src: catSladoled, alt: "Sladoled u čaši sa čokoladnim prelivom" }],
  },
};

const CategoryGallery = () => {
  const { category } = useParams<{ category: string }>();
  const data = categoryData[category as CategoryKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-display text-foreground mb-4">Kategorija nije pronađena</h1>
            <Link to="/#galerija" className="text-primary hover:underline font-body">
              ← Nazad na galeriju
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-16 bg-blue-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none text-primary/[0.07]">
          <Cake className="absolute top-[8%] left-[5%] w-20 h-20 md:w-28 md:h-28 rotate-[-15deg]" />
          <CakeSlice className="absolute top-[15%] right-[8%] w-16 h-16 md:w-24 md:h-24 rotate-[12deg]" />
          <IceCreamCone className="absolute top-[45%] left-[3%] w-14 h-14 md:w-20 md:h-20 rotate-[-8deg]" />
          <Cookie className="absolute top-[55%] right-[5%] w-18 h-18 md:w-24 md:h-24 rotate-[20deg]" />
          <Cherry className="absolute bottom-[15%] left-[10%] w-12 h-12 md:w-18 md:h-18 rotate-[10deg]" />
          <Croissant className="absolute bottom-[10%] right-[10%] w-16 h-16 md:w-22 md:h-22 rotate-[-12deg]" />
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#galerija"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Nazad na galeriju
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-display text-foreground mb-3">{data.title}</h1>
            <p className="text-muted-foreground font-body">{data.subtitle}</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-8 h-px bg-primary/40" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <div className="w-16 h-px bg-primary" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <div className="w-8 h-px bg-primary/40" />
            </div>
          </motion.div>

          {data.images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {data.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-500 bg-card"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground font-body text-lg">Slike uskoro dolaze!</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryGallery;


