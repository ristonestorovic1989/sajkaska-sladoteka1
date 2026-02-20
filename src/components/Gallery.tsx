import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Elegantni petit four kolačići", label: "Sitni kolači" },
  { src: gallery2, alt: "Čokoladna drip torta", label: "Čokoladne torte" },
  { src: gallery3, alt: "Rođendanska torta sa cvetovima", label: "Rođendanske torte" },
  { src: gallery4, alt: "Cupcakes sa ružama", label: "Cupcakes" },
  { src: gallery5, alt: "Voćna torta sa kremom", label: "Voćne torte" },
  { src: gallery6, alt: "Slatki sto za proslavu", label: "Slatki stolovi" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <motion.span
                  initial={false}
                  className="text-primary-foreground font-display text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {img.label}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
