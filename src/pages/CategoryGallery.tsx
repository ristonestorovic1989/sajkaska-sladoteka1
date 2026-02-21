import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import all gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

type CategoryKey = "torte" | "sitni-kolaci" | "palacinke" | "kupovi";

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
      { src: gallery1, alt: "Elegantna torta sa cvetnim detaljima" },
      { src: gallery2, alt: "Rođendanska torta sa zlatnim ukrasima" },
      { src: gallery3, alt: "Svadbena torta sa ružama" },
      { src: gallery4, alt: "Dečija torta sa šarenim motivima" },
      { src: gallery5, alt: "Luksuzna torta sa fondanom" },
      { src: gallery6, alt: "Tematska torta za posebne prilike" },
    ],
  },
  "sitni-kolaci": {
    title: "Sitni kolači",
    subtitle: "Domaći kolači za svaki slatki sto",
    images: [],
  },
  palacinke: {
    title: "Palačinke",
    subtitle: "Savršene palačinke sa raznim filovima",
    images: [],
  },
  kupovi: {
    title: "Kupovi",
    subtitle: "Dekorativni kupovi za sve prilike",
    images: [],
  },
};

const CategoryGallery = () => {
  const { category } = useParams<{ category: string }>();
  const data = categoryData[category as CategoryKey];

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

      <main className="flex-1 pt-24 md:pt-32 pb-16 bg-blue-light">
        <div className="container max-w-6xl mx-auto px-6">
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
            <h1 className="text-3xl md:text-5xl font-display text-foreground mb-3">
              {data.title}
            </h1>
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
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-500"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
              <p className="text-muted-foreground font-body text-lg">
                Slike uskoro dolaze! 📸
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryGallery;
