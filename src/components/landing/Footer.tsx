import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5519981428347?text=Olá,%20Dr.%20Zanin.%20Quero%20contratar%20a%20Análise%20de%20Caso.%20Posso%20te%20enviar%20um%20resumo%20do%20processo%20e%20documentos?";

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Closing CTA */}
      <div className="section-padding border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Se você atua pelo credor, não precisa continuar no{" "}
            <span className="text-primary">"tentativa e erro"</span>.
          </h2>
          <p className="mb-8 text-muted-foreground">
            Conduza seu caso com estratégia e investigação aplicada.
          </p>
          <Button variant="cta" size="lg" asChild className="px-8 py-6 text-base">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com o Dr. Zanin
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dr. Zanin — Análise de Caso. Todos os direitos reservados.
      </div>
    </footer>
  );
}
