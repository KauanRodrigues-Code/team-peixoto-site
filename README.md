# Team Peixoto — Landing Page

Landing page em Next.js 14 (App Router) + React + TypeScript + Tailwind CSS
+ lucide-react para o Team Peixoto (Muay Thai & MMA), focada em conversão
via WhatsApp.

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Build de produção:

```bash
npm run build
npm start
```

## Estrutura

```
app/
  layout.tsx      -> fontes, metadata, SEO, Open Graph
  page.tsx         -> monta todas as seções
  globals.css      -> estilos globais, animação de reveal, reduced-motion
components/
  Header.tsx        Modalities.tsx     Instagram.tsx
  Hero.tsx           Benefits.tsx       Contact.tsx
  About.tsx          Results.tsx        Footer.tsx
                      Athletes.tsx       WhatsAppButton.tsx
                      Gallery.tsx        HowItWorks.tsx
                      CTA.tsx
lib/
  config.ts        -> dados de contato, WhatsApp, links (edite aqui)
  useReveal.ts      -> hook de animação ao scroll (IntersectionObserver)
```

## O que editar antes de publicar

1. **Imagens**: todas as fotos usadas são placeholders do Unsplash. Troque
   pelas fotos reais do Team Peixoto (idealmente em `public/images/` e
   apontando os componentes para lá).
2. **Atletas** (`components/Athletes.tsx`): nomes, modalidades, categorias e
   fotos são placeholders — nenhum dado foi inventado.
3. **Resultados/Competições** (`components/Results.tsx`): os cards e a
   galeria são genéricos — substitua por eventos e conquistas reais quando
   disponíveis.
4. **Dados de contato** (`lib/config.ts`): telefone, endereço e Instagram já
   estão preenchidos com os dados informados; centralizar mudanças aqui.
5. **Favicon**: adicione um `favicon.ico` em `app/` (ou `public/`) com a
   identidade do Team Peixoto.

## Checklist já coberto

- Header com efeito glass no scroll + menu mobile funcional
- Hero cinematográfico com CTA para WhatsApp
- Todas as seções pedidas (Sobre, Modalidades, Benefícios, Resultados,
  Atletas, Espaço, Como Funciona, CTA, Instagram, Contato, Footer)
- Botão flutuante do WhatsApp (ícone no mobile, texto no desktop)
- Botão "Como chegar" para o Google Maps
- Crédito "Desenvolvido por Kauan Rodrigues" no footer, linkando para
  `https://www.instagram.com/_kauanr12/` em nova aba
- Animações discretas (fade/slide/hover) respeitando `prefers-reduced-motion`
- Responsivo de 375px a telas grandes, sem overflow horizontal
- SEO básico (title, description, keywords, Open Graph) e acessibilidade
  (alt em imagens, aria-label, foco visível, HTML semântico)
