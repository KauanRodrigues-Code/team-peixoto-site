"use client";

import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/config";

const STEPS = [
  {
    number: "01",
    title: "ENTRE EM CONTATO",
    description: "Fale com nossa equipe pelo WhatsApp.",
  },
  {
    number: "02",
    title: "CONHEÇA OS TREINOS",
    description: "Escolha a modalidade e conheça nossa rotina.",
  },
  {
    number: "03",
    title: "COMECE SUA EVOLUÇÃO",
    description: "Faça parte do Team Peixoto.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-black-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-gold">
            COMO FUNCIONA
          </span>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
            SEU CAMINHO ATÉ O RINGUE
          </h2>
        </div>

        {/* Etapas */}
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative"
            >
              <span className="font-display text-7xl leading-none text-gold/20">
                {step.number}
              </span>

              <h3 className="mt-2 mb-2 font-display text-2xl tracking-wide">
                {step.title}
              </h3>

              <p className="leading-relaxed text-gray-brand">
                {step.description}
              </p>

              {/* Linha entre as etapas — apenas desktop */}
              {i < STEPS.length - 1 && (
                <div className="absolute right-[-16px] top-8 hidden h-px w-8 bg-gold/30 md:block" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-sm bg-gold-gradient px-8 py-3.5 font-display text-lg tracking-wide text-black transition-all hover:brightness-110 active:scale-95 sm:w-auto"
          >
            FALAR COM O TEAM PEIXOTO
          </a>
        </div>

      </div>
    </section>
  );
}