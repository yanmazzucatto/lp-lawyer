import { useEffect, useState, useRef } from "react";
import { Search, FileText, TrendingUp } from "lucide-react";

const blocks = [
  {
    icon: Search,
    title: "Identifique Patrimônio",
    description: "Descubra onde está o patrimônio e onde ele pode estar sendo escondido",
  },
  {
    icon: FileText,
    title: "Diagnóstico Completo",
    description: "Tenha um diagnóstico e um plano tático com diligências priorizadas",
  },
  {
    icon: TrendingUp,
    title: "Maximize Resultados",
    description: "Aumente a chance de recuperação do crédito e reduza retrabalho",
  },
];

export default function ScrollRevealBlocks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-transparent from-60% to-white to-20%"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`
                bg-[#2C3E50]/95 backdrop-blur-md rounded-lg p-6 shadow-2xl 
                border border-[#B8975A]/20 
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-[#B8975A]/10 rounded-full">
                  <block.icon className="h-8 w-8 text-[#B8975A]" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-[#B8975A]">
                  {block.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

