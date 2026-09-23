"use client";

import { useReveal } from "@/lib/useReveal";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/config";

export default function CTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-brand/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full" />

      <div
        className="relative max-w-3xl mx-auto px-5 md:px-8 text-center reveal"
        ref={ref}
      >
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight">
          PRONTO PARA <span className="text-gold">COMEÇAR?</span>
        </h2>
        <p className="text-gray-brand text-lg mt-5 mb-10">
          Entre em contato e descubra como fazer parte do Team Peixoto.
        </p>
        <a
          href={whatsappLink(WHATSAPP_MESSAGES.start)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gold-gradient text-black font-display text-xl tracking-wide px-10 py-4 rounded-sm hover:brightness-110 active:scale-95 transition-all"
        >
          FALAR NO WHATSAPP
        </a>
      </div>
    </section>
  );
}
