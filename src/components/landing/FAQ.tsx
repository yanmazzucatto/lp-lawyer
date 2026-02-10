import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Não quero gastar agora",
    a: "É investimento estratégico para economizar meses de tentativas em vão.",
  },
  {
    q: "Não tenho tempo",
    a: "Você recebe o plano pronto e executável, sem precisar investigar sozinho.",
  },
  {
    q: "Meu caso é complexo",
    a: "Casos complexos são os que mais precisam de método e organização de provas.",
  },
  {
    q: "Serve para qualquer área?",
    a: "Sim, foco em recuperação de crédito (Cível, Trabalhista, Família, etc).",
  },
  {
    q: "O que preciso enviar?",
    a: "Processo/contrato + resumo do caso + documentos que já possui.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Dúvidas
        </p>
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Perguntas Frequentes
        </h2>
        <div className="gold-divider mx-auto mb-12 w-16" />

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-lg border border-border bg-card px-5"
            >
              <AccordionTrigger className="font-serif text-base font-semibold text-foreground hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
