"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(WHATSAPP_MESSAGES.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Team Peixoto no WhatsApp"
      className="fixed bottom-16 right-6 md:bottom-7 md:right-7 z-40 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/50 px-4 py-4 md:px-5 hover:brightness-110 active:scale-95 transition-all animate-fadeIn"
      style={{ animationDelay: "1s" }}
    >
      <MessageCircle size={24} fill="white" className="text-[#25D366]" />
      <span className="hidden md:inline font-semibold text-sm pr-1">
        Fale conosco
      </span>
    </a>
  );
}
