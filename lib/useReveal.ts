"use client";

import { useEffect, useRef } from "react";

/**
 * Aplica a classe `is-visible` em todo elemento `.reveal` dentro do container
 * assim que ele entra na viewport. Leve, sem dependências externas e
 * respeita prefers-reduced-motion (tratado via CSS).
 */
export function useReveal<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".reveal");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
