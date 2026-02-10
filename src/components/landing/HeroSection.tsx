import { Search, FileText, TrendingUp, MessageCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/video-hero.mp4";

const WHATSAPP_URL = "https://wa.me/5519981428347?text=Olá,%20Dr.%20Zanin.%20Quero%20contratar%20a%20Análise%20de%20Caso.%20Posso%20te%20enviar%20um%20resumo%20do%20processo%20e%20documentos?";

const benefits = [
  { icon: Search, text: "Identifique onde está o patrimônio (e onde ele pode estar sendo escondido)" },
  { icon: FileText, text: "Tenha um diagnóstico e um plano tático com diligências priorizadas" },
  { icon: TrendingUp, text: "Aumente a chance de recuperação do crédito e reduza retrabalho" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/70 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Overline */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Análise de Caso com Dr. Zanin
          </p>

          <div className="gold-divider mx-auto mb-8 w-24" />

          <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            10 motivos para você{" "}
            <span className="text-gold-gradient">(advogado do credor)</span>{" "}
            contratar uma Análise de Caso e parar de{" "}
            <em className="italic">"atirar no escuro"</em> na execução
          </h1>
          {/* CTA */}
          <Button variant="cta" size="lg" asChild className="px-8 py-6 mt-14 text-base md:text-lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
             Quero analisar meu caso
            </a>
          </Button>

          {/* Microcopy */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Resposta rápida</span>
            <span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" /> Atendimento direto</span>
            <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> Confidencialidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
