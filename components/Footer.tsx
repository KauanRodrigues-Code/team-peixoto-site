import { Instagram as InstagramIcon, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black-secondary border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <a
              href="#inicio"
              className="font-display text-2xl tracking-wider text-white"
            >
              TEAM <span className="text-gold">PEIXOTO</span>
            </a>
            <p className="text-gray-brand text-sm mt-3 leading-relaxed">
              Team Peixoto — Muay Thai &amp; MMA
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-brand text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
              REDES SOCIAIS
            </h4>
            <div className="flex gap-3">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Team Peixoto"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp do Team Peixoto"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-brand">
          <p>© {year} Team Peixoto. Todos os direitos reservados.</p>
          <a
            href={SITE.developer.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Desenvolvido por {SITE.developer.name}
          </a>
        </div>
      </div>
    </footer>
  );
}
