import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

const SITE_URL = "https://teampeixoto.com.br";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Team Peixoto | Muay Thai & MMA em Morungaba",
    template: "%s | Team Peixoto",
  },

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
    "Muay Thai em Morungaba",
    "MMA em Morungaba",
    "academia em Morungaba",
  ],

  authors: [
    {
      name: "Team Peixoto",
    },
  ],

  creator: "Team Peixoto",
  publisher: "Team Peixoto",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Team Peixoto",
    title: "Team Peixoto | Muay Thai & MMA em Morungaba",
    description:
      "Treinamento, disciplina e espírito de equipe para quem busca evoluir dentro e fora do ringue.",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Team Peixoto",
  description:
    "Team Peixoto — Muay Thai e MMA em Morungaba - SP.",
  url: SITE_URL,
  telephone: "+55 11 95698-2777",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Paulo Gomes, 193",
    addressLocality: "Morungaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/teampeixotoofc/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        {children}

        {/* Dados estruturados para mecanismos de busca */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}