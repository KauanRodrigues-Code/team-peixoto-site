"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import {
  NAV_LINKS,
  SITE,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ========================================
          HEADER
      ======================================== */}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gold/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2 font-display text-2xl tracking-wider text-white md:text-3xl"
          >
            TEAM <span className="text-gold">PEIXOTO</span>
          </a>

          {/* ========================================
              MENU DESKTOP
          ======================================== */}

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-gray-brand transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-sm bg-gold-gradient px-6 py-2.5 font-display text-lg tracking-wide text-black transition-all hover:brightness-110 active:scale-95 lg:inline-flex"
          >
            QUERO TREINAR
          </a>

          {/* Botão Mobile */}
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-[70] p-2 -mr-2 text-white transition-colors hover:text-gold lg:hidden"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* ========================================
          MENU MOBILE
      ======================================== */}

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        style={{
          height: "100dvh",
          backgroundColor: "#050505",
          transition:
            "opacity 250ms ease, visibility 250ms ease",
        }}
      >
        {/* Conteúdo com rolagem própria */}
        <div
          className="flex h-full flex-col overflow-y-auto overscroll-contain bg-[#050505]"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* ========================================
              TOPO DO MENU
          ======================================== */}

          <div className="flex shrink-0 items-center justify-between border-b border-gold/20 bg-[#050505] px-5 py-5">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="font-display text-2xl tracking-wider text-white"
            >
              TEAM <span className="text-gold">PEIXOTO</span>
            </a>

            <button
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
              className="p-2 text-white transition-colors hover:text-gold"
            >
              <X size={30} />
            </button>
          </div>

          {/* ========================================
              LOCALIZAÇÃO
          ======================================== */}

          <div className="shrink-0 border-b border-white/5 bg-[#050505] px-5 py-5">
            <div className="flex items-center gap-2 text-sm text-gray-brand">
              <MapPin size={17} className="shrink-0 text-gold" />

              <span>Morungaba - SP</span>
            </div>
          </div>

          {/* ========================================
              LINKS
          ======================================== */}

          <nav className="flex flex-1 flex-col bg-[#050505] px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group flex min-h-[58px] items-center border-b border-white/5 py-3 font-display text-2xl tracking-wide text-white transition-colors hover:text-gold active:text-gold"
              >
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* ========================================
              CTA MOBILE
          ======================================== */}

          <div className="shrink-0 border-t border-gold/10 bg-[#050505] px-5 pb-8 pt-5">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 py-4 font-display text-xl tracking-wide text-black transition-all hover:brightness-110 active:scale-95"
            >
              <MessageCircle size={22} />
              QUERO TREINAR
            </a>

            <a
              href={`tel:${SITE.phoneDisplay.replace(/\D/g, "")}`}
              className="mt-4 block text-center text-sm text-gray-brand transition-colors hover:text-gold"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}