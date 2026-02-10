import { Award, Users, DollarSign, GraduationCap, Mic } from "lucide-react";

const stats = [
  { icon: Award, value: "23 anos", desc: "atuando para credores (Cooperativas, FIDCs, Securitizadoras)" },
  { icon: Users, value: "+500", desc: "casos investigados" },
  { icon: DollarSign, value: "+R$ 300 mi", desc: "encontrados" },
  { icon: GraduationCap, value: "+350 alunos", desc: "Professor, Mestre e Doutor em Direito" },
  { icon: Mic, value: "+300", desc: "palestras realizadas no Brasil" },
];

export default function Authority() {
  return (
    <section className="section-padding bg-navy">
      <div className="container mx-auto max-w-5xl">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Autoridade
        </p>
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Por que com o @doutorzanin?
        </h2>
        <div className="gold-divider mx-auto mb-6 w-16" />
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Sócio fundador da Recuperium Business Intelligence
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
            >
              <s.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-serif text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
