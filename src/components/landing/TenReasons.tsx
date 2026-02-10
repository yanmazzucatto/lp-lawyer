import {
  Clock, Eye, Route, Network, BarChart3, Zap,
  ListOrdered, UserCog, Award, Rocket, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5519981428347?text=Olá,%20Dr.%20Zanin.%20Quero%20contratar%20a%20Análise%20de%20Caso.%20Posso%20te%20enviar%20um%20resumo%20do%20processo%20e%20documentos?";

const reasons = [
  { icon: Clock, title: "Você para de perder tempo", desc: 'Chega de "testar" uma coisa por semana. Você ganha um roteiro lógico.' },
  { icon: Eye, title: "Entenda as fraudes", desc: "O relatório aponta sinais, hipóteses e padrões de fraude no seu caso." },
  { icon: Route, title: "Caminho para prova", desc: 'Não adianta "achar". A análise mostra o caminho probatório e as diligências.' },
  { icon: Network, title: "Mapeamento da blindagem", desc: "Relações familiares, vínculos econômicos e movimentações mapeadas." },
  { icon: BarChart3, title: "Taxa de recuperação", desc: 'Saia do "tentar" para o "executar com método" e previsibilidade.' },
  { icon: Zap, title: "Eficiência de energia", desc: "Plano tático com diligências que fazem sentido para aquele devedor real." },
  { icon: ListOrdered, title: "Timing estratégico", desc: "Receba o sequenciamento correto para evitar decisões negativas do juiz." },
  { icon: UserCog, title: "Autoridade com o cliente", desc: "Conduza a conversa com plano técnico e reduza a cobrança emocional." },
  { icon: Award, title: "Acesso à experiência", desc: "23 anos de experiência em cobrança e investigação aplicada ao seu caso." },
  { icon: Rocket, title: "Projeto executável", desc: 'Transforme o "beco sem saída" em um diagnóstico claro + lista de ações.' },
];

export default function TenReasons() {
  return (
    <section id="motivos" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Por que contratar
        </p>
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          10 motivos para contratar a Análise de Caso
        </h2>
        <p className="mx-auto mb-4 max-w-xl text-center text-lg text-primary font-serif">
          (e destravar sua execução)
        </p>
        <div className="gold-divider mx-auto mb-12 w-16" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <r.icon className="h-5 w-5" />
                </span>
                <span className="font-sans text-xs font-semibold text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-14 text-center">
          <Button variant="cta" size="lg" asChild className="px-4 py-6 text-base">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-auto" />
              Quero destravar meu caso
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
