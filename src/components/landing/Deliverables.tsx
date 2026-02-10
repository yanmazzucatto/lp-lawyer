import { FileText, Video, CalendarClock } from "lucide-react";

const deliverables = [
  {
    icon: FileText,
    title: "Relatório em PDF",
    items: [
      "Possíveis fraudes e sinais de blindagem",
      "Hipóteses investigativas e linhas de prova",
      "Plano tático com diligências práticas (ordem de execução)",
    ],
  },
  {
    icon: Video,
    title: "Reunião por Zoom (Entrega guiada)",
    items: [
      "Explicação detalhada do relatório",
      "Esclarecimento de dúvidas",
    ],
  },
];

export default function Deliverables() {
  return (
    <section id="entregaveis" className="section-padding bg-navy">
      <div className="container mx-auto max-w-4xl">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Entregáveis
        </p>
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          O que está incluído na Análise de Caso
        </h2>
        <div className="gold-divider mx-auto mb-12 w-16" />

        <div className="grid gap-6 md:grid-cols-2">
          {deliverables.map((d, i) => (
            <div key={i} className="bg-glass rounded-xl p-8">
              <d.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                {d.title}
              </h3>
              <ul className="space-y-2">
                {d.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 rounded-lg border border-primary/20 bg-card p-4">
          <CalendarClock className="h-5 w-5 text-primary" />
          <span className="text-sm text-foreground">
            <strong>Prazo de entrega:</strong> relatório em até 30 dias
          </span>
        </div>
      </div>
    </section>
  );
}
