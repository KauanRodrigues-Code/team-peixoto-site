"use client";

import { Swords, Users, Flame, Trophy } from "lucide-react";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/config";

const CARDS = [
  {
    icon: Flame,
    title: "MUAY THAI",
    description:
      "Aprenda técnicas, movimentação, golpes, defesa e condicionamento dentro da arte marcial tailandesa.",
    image: "/images/treino%2001.png",
  },
  {
    icon: Swords,
    title: "MMA",
    description:
      "Treinamento completo combinando diferentes disciplinas e preparação para combate.",
    image: "/images/treino%2002.png",
  },
  {
    icon: Users,
    title: "INICIANTES",
    description:
      "Comece do zero, evolua no seu ritmo e faça parte da equipe.",
    image: "/images/treino%2003.png",
  },
  {
    icon: Trophy,
    title: "PREPARAÇÃO DE ATLETAS",
    description:
      "Treinamento direcionado para atletas que buscam evolução e desempenho em competições.",
    image: "/images/treino%2004.png",
  },
];

export default function Modalities() {
  return (
    <section
      id="modalidades"
      className="relative bg-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-gold">
            TREINAMENTOS
          </span>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
            MODALIDADES
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5"
              >
                {/* Imagem real da Team Peixoto */}
                <img
                  src={card.image}
                  alt={`Treinamento de ${card.title} - Team Peixoto`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 transition-colors duration-300 group-hover:from-black/95" />

                {/* Conteúdo */}
                <div className="relative flex h-full flex-col justify-end p-5">
                  <Icon
                    className="mb-3 text-gold"
                    size={28}
                    strokeWidth={2}
                  />

                  <h3 className="mb-2 font-display text-2xl tracking-wide">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-brand">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-sm bg-gold-gradient px-8 py-3.5 font-display text-lg tracking-wide text-black transition-all hover:brightness-110 active:scale-95 sm:w-auto"
          >
            QUERO CONHECER AS MODALIDADES
          </a>
        </div>
      </div>
    </section>
  );
}