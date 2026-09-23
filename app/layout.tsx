import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Team Peixoto | Muay Thai & MMA em Morungaba",
  description:
    "Team Peixoto — Muay Thai e MMA em Morungaba - SP. Treinamento para iniciantes, atletas e competidores. Faça parte da equipe.",
  keywords: [
    "Muay Thai Morungaba",
    "MMA Morungaba",
    "Team Peixoto",
    "Muay Thai SP",
    "MMA SP",
    "academia Muay Thai",
    "treino Muay Thai",
  ],
  authors: [{ name: "Team Peixoto" }],
  openGraph: {
    title: "Team Peixoto | Muay Thai & MMA em Morungaba",
    description:
      "Treinamento, disciplina e espírito de equipe para quem busca evoluir dentro e fora do ringue.",
    url: "https://teampeixoto.com.br",
    siteName: "Team Peixoto",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Peixoto | Muay Thai & MMA em Morungaba",
    description:
      "Treinamento, disciplina e espírito de equipe para quem busca evoluir dentro e fora do ringue.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
