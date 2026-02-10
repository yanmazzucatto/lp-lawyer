import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5519981428347?text=Olá,%20Dr.%20Zanin.%20Quero%20contratar%20a%20Análise%20de%20Caso.%20Posso%20te%20enviar%20um%20resumo%20do%20processo%20e%20documentos?";

const navLinks = [
  { label: "Para quem é", href: "#para-quem" },
  { label: "10 Motivos", href: "#motivos" },
  { label: "Entregáveis", href: "#entregaveis" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Investimento", href: "#investimento" },
  { label: "FAQ", href: "#faq" },
];

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="font-serif text-xl font-bold text-foreground">
          Dr. <span className="text-primary">Zanin</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="cta" size="sm" asChild className="hidden sm:inline-flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1 h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
          <button
            className="text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-navy/95 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-2 px-4 pb-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="cta" size="sm" asChild className="mt-2">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
