"use client";

import { useEffect, useRef } from "react";

export default function GsapEffects() {
  const initialized = useRef(false);

  useEffect(() => {
    // Evitar múltiples inicializaciones
    if (initialized.current) return;
    initialized.current = true;

    let ctx: { revert: () => void } | undefined;
    
    const initGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Animación del navbar solo si existe
          const nav = document.querySelector("nav");
          if (nav) {
            gsap.from(nav, { 
              y: -100, 
              opacity: 0, 
              duration: 1, 
              ease: "power3.out" 
            });
          }

          // Animación de h1 solo si existe
          const h1 = document.querySelector("h1");
          if (h1) {
            gsap.from(h1, { 
              x: -100, 
              opacity: 0, 
              duration: 1, 
              ease: "power3.out" 
            });
          }

          // Animación de secciones solo si existen
          const sections = document.querySelectorAll("section");
          if (sections.length > 0) {
            gsap.utils.toArray("section").forEach((el) => {
              gsap.from(el as Element, {
                opacity: 0,
                y: 30,
                duration: 0.6,
                scrollTrigger: {
                  trigger: el as Element,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              });
            });
          }
        });
      } catch (error) {
        console.warn("GSAP failed to load:", error);
      }
    };

    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(initGSAP, 100);

    return () => {
      clearTimeout(timer);
      try {
        ctx?.revert();
        initialized.current = false;
      } catch {}
    };
  }, []);

  return null;
}


