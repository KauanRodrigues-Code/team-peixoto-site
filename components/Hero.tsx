import { MapPin } from "lucide-react";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-end md:items-center overflow-hidden pt-24 pb-16 md:py-0"
    >
      {/* Imagem real da Team Peixoto */}
      <div className="absolute inset-0">
        <img
          src="/images/tatame.png"
          alt="Estrutura da Team Peixoto — Muay Thai e MMA"
          className="w-full h-full object-cover object-center scale-105"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
      </div>

      {/* Selo com a logo oficial */}
      <div className="absolute top-24 right-8 w-24 h-24 border border-gold/50 rounded-full hidden md:flex items-center justify-center overflow-hidden">
        <img
          src="/images/logo.png"
          alt="Team Peixoto"
          className="w-full h-full object-contain scale-[3.2]"
        />
      </div>

      {/* Detalhe gráfico lateral */}
      <div className="absolute bottom-32 left-8 w-1 h-32 bg-gold/40 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="max-w-3xl">
          <p className="text-gold font-semibold tracking-[0.3em] text-xs md:text-sm mb-4 animate-fadeIn">
            TEAM PEIXOTO — MUAY THAI &amp; MMA
          </p>

          <h1 className="font-display text-6xl xs:text-7xl sm:text-8xl md:text-9xl leading-[0.9] tracking-wide text-white">
            <span className="block animate-fadeIn">
              FORÇA.
            </span>

            <span
              className="block text-gold animate-fadeInUp"
              style={{ animationDelay: "0.12s" }}
            >
              DISCIPLINA.
            </span>

            <span
              className="block animate-fadeInUp"
              style={{ animationDelay: "0.24s" }}
            >
              EVOLUÇÃO.
            </span>
          </h1>

          <p
            className="mt-6 text-base md:text-lg text-gray-brand max-w-xl leading-relaxed animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Treinamento, disciplina e espírito de equipe para quem busca
            evoluir dentro e fora do ringue.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row gap-4 animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold-gradient text-black font-display text-xl tracking-wide px-8 py-4 rounded-sm hover:brightness-110 active:scale-95 transition-all text-center"
            >
              QUERO COMEÇAR A TREINAR
            </a>

            <a
              href="#equipe"
              className="inline-flex items-center justify-center border border-white/30 text-white font-display text-xl tracking-wide px-8 py-4 rounded-sm hover:border-gold hover:text-gold active:scale-95 transition-all text-center"
            >
              CONHECER A EQUIPE
            </a>
          </div>

          <div
            className="mt-8 flex items-center gap-2 text-gray-brand text-sm animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <MapPin size={16} className="text-gold" />
            Morungaba - SP
          </div>
        </div>
      </div>
    </section>
  );
}