"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useSmoothScroll() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href) return;

            // Home link: "/" — top pe scroll
            if (href === "/") {
                e.preventDefault();
                lenis.scrollTo(0, { duration: 1.4 });
                return;
            }

            // Same-page anchor: "#about" ya "/#about"
            const hashMatch = href.match(/^(\/)?#(.+)$/);
            if (!hashMatch) return;

            const id = hashMatch[2];
            const section = document.getElementById(id);
            if (!section) return;

            e.preventDefault();
            lenis.scrollTo(section, { offset: -80, duration: 1.4 });
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);
}