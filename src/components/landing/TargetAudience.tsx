import { Pause, UserCheck, RotateCcw, Target, ShieldAlert } from "lucide-react";
import zaninImg from "@/assets/zanin.png";

const painPoints = [
  { icon: ShieldAlert, text: 'Devedor "sem bens" (mas com sinais de blindagem)' },
  { icon: Pause, text: "Execução travada / cumprimento de sentença sem evolução" },
  { icon: UserCheck, text: "Cliente pressionando por resultado e você sem um caminho claro" },
  { icon: RotateCcw, text: "Tentativas repetidas sem método (e sem retorno)" },
];

const idealMoments = [
  "Antes de entrar com medidas mais complexas (ex.: cautelares)",
  "Quando você quer evitar erros estratégicos que queimam o caso",
  "Quando precisa de um plano tático com foco em prova e efetividade",
];

export default function TargetAudience() {
  return (
    <section id="para-quem" className="relative overflow-hidden bg-white">
      <div className="container  mx-auto max-w-7xl mt-10 pt-10 px-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Container - Content */}
          <div className="order-2 lg:order-1 pb-16 lg:pb-24">
            <p className="mb-2 text-center lg:text-left text-sm font-medium uppercase tracking-[0.2em] text-[#9d814c]">
              Para quem é
            </p>
            <h2 className="mb-4 text-center lg:text-left font-serif text-3xl font-bold text-[#2C2C2C] md:text-4xl">
              Para quem é a Análise de Caso
            </h2>
            <div className="mx-auto lg:mx-0 mb-6 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B8975A] to-transparent" />
            <p className="mb-12 text-center lg:text-left text-[#131313]">
              Para advogados que atuam pelo credor (cível, trabalhista, família,
              empresarial, etc.) e estão enfrentando:
            </p>

            <div className="mb-12 grid gap-4 sm:grid-cols-1">
              {painPoints.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg border border-[#D4C4A8] bg-white/60 backdrop-blur-sm p-5 transition-all hover:border-[#B8975A] hover:shadow-md"
                >
                  <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#B8975A]" />
                  <span className="text-sm text-[#3A3A3A]">{p.text}</span>
                </div>
              ))}
            </div>

            <h3 className="mb-6 text-center lg:text-left font-serif text-2xl font-semibold text-[#2C2C2C]">
              Quando é ideal contratar
            </h3>
            <div className="space-y-3">
              {idealMoments.map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Target className="mt-1 h-4 w-4 shrink-0 text-[#B8975A]" />
                  <span className="text-sm text-[#000000]">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Container - Image */}
          <div className="order-2 lg:order-2 flex items-end justify-center lg:justify-end">
            <img 
              src={zaninImg} 
              alt="Dr. Zanin" 
              className="w-full max-w-md lg:max-w-full h-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
