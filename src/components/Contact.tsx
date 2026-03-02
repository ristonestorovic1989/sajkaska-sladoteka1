import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    href: "https://www.instagram.com/sajkaska_sladoteka/",
    icon: Instagram,
    title: "Instagram",
    subtitle: "@sajkaska_sladoteka",
    external: true,
    color: "primary",
  },
  {
    href: "https://www.facebook.com/jelenabiljana.tortesajkas",
    icon: Facebook,
    title: "Facebook",
    subtitle: "Šajkaška Sladoteka",
    external: true,
    color: "blue",
  },
  {
    href: "tel:+381666865062",
    icon: Phone,
    title: "Telefon",
    subtitle: "Pozovite nas",
    external: false,
    color: "accent",
  },
  {
    href: null,
    icon: MapPin,
    title: "Lokacija",
    subtitle: "Šajkaš, Vojvodina",
    external: false,
    color: "primary",
  },
];

const Contact = () => {
  return (
    <section
      id="kontakt"
      className="py-24 md:py-32 bg-rose-light relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
            Javite nam <span className="italic text-primary">se</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-px bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="w-16 h-px bg-accent" />
            <div className="w-2 h-2 rounded-full bg-accent/60" />
            <div className="w-8 h-px bg-accent/40" />
          </div>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Želite da naručite tortu ili imate pitanje? Kontaktirajte nas putem
            društvenih mreža ili telefona - rado ćemo vam pomoći!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {contacts.map((item, i) => {
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? {
                  href: item.href,
                  ...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}),
                }
              : {};

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="flex items-center gap-4 glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      item.color === "primary"
                        ? "bg-rose-light group-hover:bg-primary/20"
                        : item.color === "accent"
                          ? "bg-mint-light group-hover:bg-accent/20"
                          : "bg-blue-light group-hover:bg-blue/20"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.color === "primary"
                          ? "text-primary"
                          : item.color === "accent"
                            ? "text-accent"
                            : "text-blue"
                      }`}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-display text-foreground text-lg">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-sm font-body">
                      {item.subtitle}
                    </p>
                  </div>
                  {item.external && (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
