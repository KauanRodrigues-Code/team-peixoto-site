"use client";

import { MapPin, Phone, Instagram as InstagramIcon, Navigation } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { MAPS_URL, SITE, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/config";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-5 md:px-8" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-gold font-semibold tracking-[0.3em] text-xs">
            CONTATO
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-3">
            FALE COM A GENTE
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="reveal bg-black-secondary border border-white/5 rounded-sm p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-3xl tracking-wide mb-1">
                TEAM PEIXOTO
              </h3>
              <p className="text-gold text-sm font-semibold tracking-wide mb-8">
                Muay Thai &amp; MMA
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={20} />
                  <p className="text-white/90 leading-relaxed">
                    {SITE.address.street}
                    <br />
                    {SITE.address.neighborhood}
                    <br />
                    {SITE.address.city}
                  </p>
                </div>

                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <Phone className="text-gold shrink-0 mt-1" size={20} />
                  <span className="text-white/90 group-hover:text-gold transition-colors">
                    {SITE.phoneDisplay}
                  </span>
                </a>

                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <InstagramIcon className="text-gold shrink-0 mt-1" size={20} />
                  <span className="text-white/90 group-hover:text-gold transition-colors">
                    {SITE.instagramHandle}
                  </span>
                </a>
              </div>
            </div>

            <a
              href={whatsappLink(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center bg-gold-gradient text-black font-display text-lg tracking-wide px-8 py-3.5 rounded-sm hover:brightness-110 active:scale-95 transition-all"
            >
              ABRIR NO WHATSAPP
            </a>
          </div>

          <div className="reveal relative rounded-sm overflow-hidden min-h-[320px] border border-white/5 bg-black-secondary flex flex-col items-center justify-center text-center p-8">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, #C9A227 0%, transparent 40%), radial-gradient(circle at 70% 70%, #B51218 0%, transparent 40%)",
              }}
            />
            <div className="relative">
              <MapPin className="text-gold mx-auto mb-4" size={40} />
              <p className="text-white/90 mb-1">{SITE.address.full}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 border border-gold text-gold font-display text-lg tracking-wide px-7 py-3 rounded-sm hover:bg-gold hover:text-black active:scale-95 transition-all"
              >
                <Navigation size={18} />
                COMO CHEGAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
