"use client";

import { useReveal } from "@/lib/useReveal";

const PHOTOS = [
  {
    src: "/images/tatame sem IA.png",
    alt: "Espaço real de treinamento da Team Peixoto",
    credit: "Arquivo Team Peixoto",
    featured: true,
  },
  {
    src: "/images/treino%2009.png",
    alt: "Treino técnico da Team Peixoto",
    credit: "Arquivo Team Peixoto",
  },
  {
    src: "/images/treino%2001.png",
    alt: "Treino de Muay Thai da Team Peixoto",
    credit: "Arquivo Team Peixoto",
  },
  {
    src: "/images/treino%2002.png",
    alt: "Treino de MMA da Team Peixoto",
    credit: "Arquivo Team Peixoto",
  },
  {
    src: "/images/foto%20de%20todos.png",
    alt: "Equipe Team Peixoto reunida",
    credit: "Arquivo Team Peixoto",
  },
  {
    src: "/images/treino%2003.png",
    alt: "Treinamento em grupo da Team Peixoto",
    credit: "Arquivo Team Peixoto",
  },
];

export default function Gallery() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="espaco"
      className="relative py-24 md:py-32 bg-black"
    >
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 md:px-8"
      >
        {/* TÍTULO */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-gold font-semibold tracking-[0.3em] text-xs">
            ONDE TUDO ACONTECE
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3">
            NOSSO ESPAÇO
          </h2>

          <p className="text-gray-brand mt-4">
            Um ambiente preparado para quem quer treinar, evoluir e fazer
            parte da equipe.
          </p>
        </div>

        {/* GALERIA */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className={`reveal group relative overflow-hidden rounded-sm ${
                photo.featured
                  ? "col-span-2 md:col-span-2 aspect-[16/9]"
                  : "aspect-square"
              }`}
              style={{
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  photo.featured
                    ? "object-center"
                    : "object-center"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Crédito */}
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white/70">
                {photo.credit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}