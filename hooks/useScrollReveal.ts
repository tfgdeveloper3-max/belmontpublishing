"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";

interface RevealOptions {
    y?: number;
    x?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    scale?: number;
    ease?: string;
    start?: string;
    markers?: boolean;
}

export function useScrollReveal(options: RevealOptions = {}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const {
            y = 60,
            x = 0,
            opacity = 0,
            duration = 1,
            delay = 0,
            scale = 1,
            ease = "power3.out",
            start = "top 85%",
        } = options;

        const ctx = gsap.context(() => {
            gsap.from(el, {
                y,
                x,
                opacity,
                scale: scale !== 1 ? scale : undefined,
                duration,
                delay,
                ease,
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: "play none none none",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return ref;
}

export function useStaggerReveal(
    childSelector: string,
    options: RevealOptions = {}
) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const {
            y = 50,
            x = 0,
            opacity = 0,
            duration = 0.8,
            stagger = 0.12,
            ease = "power3.out",
            start = "top 80%",
        } = options;

        const ctx = gsap.context(() => {
            gsap.from(childSelector, {
                y,
                x,
                opacity,
                duration,
                stagger,
                ease,
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: "play none none none",
                },
            });
        }, el);

        return () => ctx.revert();
    }, []);

    return ref;
}

export function useTextReveal() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            // Split text into words
            const text = el.innerText;
            const words = text.split(" ");
            el.innerHTML = words
                .map(
                    (word) =>
                        `<span style="display:inline-block;overflow:hidden;vertical-align:top"><span style="display:inline-block" class="word-inner">${word}</span></span>`
                )
                .join(" ");

            gsap.from(".word-inner", {
                y: "110%",
                duration: 0.8,
                stagger: 0.04,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return ref;
}