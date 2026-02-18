import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 md:py-16">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2">
          Sajkaška <span className="italic text-gold-light">Sladoteka</span>
        </h3>
        <p className="text-primary-foreground/50 font-body text-sm mb-8">
          Domaće torte i kolači — Sajkaš, Vojvodina
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/sajkaska_sladoteka/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/jelenabiljana.tortesajkas"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>

        <div className="w-16 h-px bg-primary-foreground/10 mx-auto mb-6" />
        <p className="text-primary-foreground/30 font-body text-xs">
          © {new Date().getFullYear()} Sajkaška Sladoteka. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
