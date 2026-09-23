"use client";

import { Target, ShieldCheck, Activity, HeartHandshake } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "DISCIPLINA",
    description: "Construa consistência e determinação.",
  },
  {
    icon: Target,
    title: "TÉCNICA",
    description: "Aprenda com treinamento estruturado.",
  },
  {
    icon: Activity,
    title: "CONDICIONAMENTO",
    description: "Melhore resistência, mobilidade e preparo físico.",
  },
  {
    icon: HeartHandshake,
    title: "EQUIPE",
    description: "Treine em um ambiente de respeito e união.",
  },
];

export default function Benefits() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 bg-black-secondary overflow-hidden">
      {/* elemento gráfico inspirado em corda de ringue */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-brand to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-5 md:px-8" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-gold font-semibold tracking-[0.3em] text-xs">
            POR QUE TREINAR CONOSCO
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3">
            EVOLUA A CADA TREINO.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="reveal text-center px-4"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-gold/40 flex items-center justify-center">
                  <Icon className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-2xl tracking-wide mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-brand text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
