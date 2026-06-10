"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";

export function useCountUp(
    target: number,
    suffix: string = "",
    duration: number = 2
) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obj = { val: 0 };

        const ctx = gsap.context(() => {
            gsap.to(obj, {
                val: target,
                duration,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                onUpdate: () => {
                    el.textContent = Math.floor(obj.val) + suffix;
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return ref;
}