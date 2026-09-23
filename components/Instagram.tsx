"use client";

import { Instagram as InstagramIcon } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { SITE } from "@/lib/config";

const FEED = [
  {
    src: "/images/treino%2005.png",
    alt: "Treinamento da Team Peixoto",
  },
  {
    src: "/images/treino%2006.png",
    alt: "Atleta durante treinamento na Team Peixoto",
  },
  {
    src: "/images/treino%2007.png",
    alt: "Treino de Muay Thai da Team Peixoto",
  },
  {
    src: "/images/treino%2008.png",
    alt: "Treinamento de atleta da Team Peixoto",
  },
];

export default function Instagram() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="instagram"
      className="relative py-24 md:py-32 bg-black-secondary"
    >
      <div
        className="max-w-7xl mx-auto px-5 md:px-8 text-center"
        ref={ref}
      >
        {/* TÍTULO */}
        <div className="reveal max-w-2xl mx-auto mb-10">
          <InstagramIcon
            className="text-gold mx-auto mb-4"
            size={32}
          />

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">
            ACOMPANHE O TEAM PEIXOTO
          </h2>

          <p className="text-gray-brand mt-4">
            Confira nossos treinos, atletas, resultados e novidades no
            Instagram.
          </p>
        </div>

        {/* FOTOS */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          {FEED.map((photo) => (
            <a
              key={photo.src}
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm block"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-colors duration-300">
                <InstagramIcon
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={22}
                />
              </div>
            </a>
          ))}
        </div>

        {/* BOTÃO */}
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal inline-flex items-center gap-2 border border-gold text-gold font-display text-lg tracking-wide px-8 py-3.5 rounded-sm hover:bg-gold hover:text-black active:scale-95 transition-all"
        >
          <InstagramIcon size={20} />
          SEGUIR NO INSTAGRAM
        </a>
      </div>
    </section>
  );
}