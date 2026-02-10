import { Quote } from "lucide-react";

const quotes = [
  "Depois do relatório, finalmente entendi onde estava o gargalo e o que pedir na ordem certa.",
  "Eu estava há meses sem avanço. Com o plano tático, destravei as diligências.",
  "A clareza sobre prova e estratégia mudou a conversa com meu cliente.",
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Depoimentos
        </p>
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          O que dizem os advogados
        </h2>
        <div className="gold-divider mx-auto mb-12 w-16" />

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <div key={i} className="bg-glass rounded-xl p-6">
              <Quote className="mb-4 h-6 w-6 text-primary/40" />
              <p className="text-sm italic leading-relaxed text-foreground/90">
                "{q}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
