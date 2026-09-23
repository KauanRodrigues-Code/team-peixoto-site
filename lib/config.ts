export const SITE = {
  name: "Team Peixoto",
  tagline: "Muay Thai & MMA",
  phoneDisplay: "(11) 95698-2777",
  whatsappNumber: "5511956982777",
  instagramHandle: "@teampeixotoofc",
  instagramUrl: "https://www.instagram.com/teampeixotoofc/",
  address: {
    street: "Av. Paulo Gomes, 193",
    neighborhood: "Santo Antônio",
    city: "Morungaba - SP",
    full: "Av. Paulo Gomes, 193 — Santo Antônio, Morungaba - SP",
  },
  developer: {
    name: "Kauan Rodrigues",
    instagramUrl: "https://www.instagram.com/_kauanr12/",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const WHATSAPP_MESSAGES = {
  default:
    "Olá! Vim pelo site do Team Peixoto e gostaria de saber mais sobre os treinos.",
  start: "Olá! Vim pelo site do Team Peixoto e quero conhecer os treinos.",
};

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Equipe", href: "#equipe" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Resultados", href: "#resultados" },
  { label: "Atletas", href: "#atletas" },
  { label: "Nosso Espaço", href: "#espaco" },
  { label: "Contato", href: "#contato" },
];

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.address.full
)}`;
