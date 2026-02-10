import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5519981428347?text=Olá,%20Dr.%20Zanin.%20Quero%20contratar%20a%20Análise%20de%20Caso.%20Posso%20te%20enviar%20um%20resumo%20do%20processo%20e%20documentos?";

const included = [
  "Relatório em PDF completo",
  "Reunião por Zoom (entrega guiada)",
  "Plano tático com diligências priorizadas",
  "Mapeamento de blindagem e fraudes",
  "Hipóteses investigativas e linhas de prova",
];

export default function Pricing() {
  return (
    <section id="investimento" className="section-padding bg-navy">
      <div className="container mx-auto max-w-lg">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Investimento
        </p>
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Investimento na Análise de Caso
        </h2>
        <div className="gold-divider mx-auto mb-12 w-16" />

        <div className="rounded-2xl border border-primary/30 bg-card p-8 text-center shadow-2xl shadow-primary/5">
          <ul className="mb-8 space-y-3 text-left">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mb-2">
            <span className="font-serif text-4xl font-bold text-foreground">R$ 2.500</span>
            <span className="text-muted-foreground">,00</span>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">em até 5 parcelas</p>

          <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="font-serif text-2xl font-bold text-primary">R$ 2.000,00</p>
            <p className="text-sm text-muted-foreground">
              no Pix <span className="font-semibold text-primary">(20% OFF)</span>
            </p>
          </div>

          <Button variant="cta" size="lg" asChild className="w-full py-6 text-base">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Quero contratar
            </a>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            Você me envia um resumo do caso e eu te digo os próximos passos.
          </p>
        </div>
      </div>
    </section>
  );
}
