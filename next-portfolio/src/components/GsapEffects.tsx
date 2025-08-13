"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapEffects() {
  useEffect(() => {
    gsap.from("nav", { y: -100, opacity: 0, duration: 1, ease: "bounce.out" });
    gsap.from("h1", { x: -100, opacity: 0, duration: 1, ease: "power3.out" });

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
  }, []);

  return null;
}


