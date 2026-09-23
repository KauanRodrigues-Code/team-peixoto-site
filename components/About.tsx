"use client";

import { useReveal } from "@/lib/useReveal";

const TAGS = ["Muay Thai", "MMA", "Atletas", "Competição"];

const HIGHLIGHTS = [
  "Formação de atletas e iniciantes",
  "Treinamento técnico",
  "Preparação para competições",
  "Espírito de equipe",
  "Evolução constante",
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="equipe" className="relative py-24 md:py-32 bg-black-secondary">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center"
      >
        <div className="reveal order-2 md:order-1">
          <span className="text-gold font-semibold tracking-[0.3em] text-xs">
            SOBRE NÓS
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mt-3 mb-6">
            MAIS QUE UMA EQUIPE.
            <br />
            <span className="text-gold">UMA FAMÍLIA.</span>
          </h2>

          <p className="text-gray-brand leading-relaxed text-base md:text-lg mb-8">
            O Team Peixoto é uma equipe dedicada ao Muay Thai e MMA, formando
            atletas e iniciantes através de treinamento, disciplina e
            acompanhamento dentro e fora do ringue.
          </p>

          <ul className="space-y-3 mb-8">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold tracking-wider text-gold border border-gold/40 rounded-full px-4 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal order-1 md:order-2 relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src="/images/foto%20de%20todos.png"
              alt="Equipe Team Peixoto reunida na academia"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-white/70">
              Arquivo Team Peixoto
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 w-24 h-24 border-b-2 border-l-2 border-gold hidden md:block" />
        </div>
      </div>
    </section>
  );
}