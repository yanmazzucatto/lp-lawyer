const steps = [
  { num: "01", title: "Análise do processo/contrato", desc: "Base do caso" },
  { num: "02", title: "Investigação de relações", desc: "Familiares e econômicas (PF ou PJ)" },
  { num: "03", title: "Cruzamento de informações", desc: "Dados preliminares" },
  { num: "04", title: "Diagnóstico estratégico", desc: "Elaboração do diagnóstico" },
  { num: "05", title: "Plano tático final", desc: "Construção do plano" },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Metodologia
        </p>
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Metodologia aplicada (Passo a Passo)
        </h2>
        <div className="gold-divider mx-auto mb-12 w-16" />

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-border md:block" />

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-serif text-sm font-bold text-primary">
                  {s.num}
                </div>
                <h4 className="mb-1 font-serif text-sm font-semibold text-foreground">
                  {s.title}
                </h4>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
