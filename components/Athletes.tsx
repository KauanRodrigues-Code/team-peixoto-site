"use client";

import { useReveal } from "@/lib/useReveal";

// Fotos reais da Team Peixoto.
// Os nomes dos atletas podem ser adicionados depois,
// quando os dados reais forem fornecidos.
const ATHLETES = [
  {
    name: "Atleta Team Peixoto",
    modality: "Muay Thai",
    category: "Treinamento",
    image: "/images/treino%2006.png",
  },
  {
    name: "Atleta Team Peixoto",
    modality: "Muay Thai",
    category: "Treinamento",
    image: "/images/treino%2007.png",
  },
  {
    name: "Atleta Team Peixoto",
    modality: "Muay Thai",
    category: "Treinamento",
    image: "/images/treino%2008.png",
  },
];

export default function Athletes() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="atletas"
      className="relative py-24 md:py-32 bg-black-secondary"
    >
      <div
        className="max-w-7xl mx-auto px-5 md:px-8"
        ref={ref}
      >
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-gold font-semibold tracking-[0.3em] text-xs">
            NOSSOS ATLETAS
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3">
            QUEM REPRESENTA O TEAM PEIXOTO
          </h2>

          <p className="text-gray-brand text-sm mt-4">
            Treinamento, dedicação e evolução de quem faz parte da equipe.
          </p>
        </div>

        {/* Atletas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATHLETES.map((athlete, i) => (
            <div
              key={`${athlete.image}-${i}`}
              className="reveal group relative rounded-sm overflow-hidden aspect-[3/4] border border-white/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Foto */}
              <img
                src={athlete.image}
                alt={`${athlete.name} em treinamento na Team Peixoto`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Conteúdo */}
              <div className="relative h-full flex flex-col justify-end p-5">
                <span className="text-xs font-semibold tracking-wider text-gold mb-1">
                  {athlete.modality} · {athlete.category}
                </span>

                <h3 className="font-display text-2xl tracking-wide">
                  {athlete.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}