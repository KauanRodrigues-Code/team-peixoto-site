"use client";

import { useReveal } from "@/lib/useReveal";

// Destaques
const HIGHLIGHT_CARDS = [
  { label: "COMBATE STADIUM" },
  { label: "COMPETIÇÕES" },
  { label: "RESULTADOS" },
  { label: "EVENTOS" },
];

// Fotos reais da Team Peixoto
const GALLERY = [
  {
    src: "/images/instagram%2001.png",
    alt: "Atleta da Team Peixoto no ringue",
    credit: "Foto: @assae_lwallacy",
  },
  {
    src: "/images/instagram%2002.png",
    alt: "Atleta da Team Peixoto acompanhado pela equipe",
    credit: "Foto: @augusto_dantas_muaythai",
  },
  {
    src: "/images/treino%2005.png",
    alt: "Treinamento de Muay Thai da Team Peixoto",
    credit: "Arquivo Team Peixoto",
  },
];

export default function Results() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="resultados"
      className="relative py-24 md:py-32 bg-black"
    >
      <div
        className="max-w-7xl mx-auto px-5 md:px-8"
        ref={ref}
      >
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-gold font-semibold tracking-[0.3em] text-xs">
            DENTRO DO RINGUE
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3">
            RESULTADOS DENTRO DO RINGUE.
          </h2>
        </div>

        {/* Destaques */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {HIGHLIGHT_CARDS.map((card, i) => (
            <div
              key={card.label}
              className="reveal group border border-gold/20 hover:border-gold rounded-sm p-8 text-center transition-colors"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="font-display text-3xl text-gold group-hover:text-gold-light transition-colors">
                {card.label}
              </span>
            </div>
          ))}
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((photo, i) => (
            <div
              key={photo.src}
              className="reveal group relative aspect-square overflow-hidden rounded-sm"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Crédito */}
              <div className="absolute bottom-2 right-2 bg-black/65 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-white/75">
                {photo.credit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}