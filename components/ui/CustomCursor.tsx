"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Mobile/touch devices pe mat dikhao
        if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        gsap.set(dot, { xPercent: -50, yPercent: -50 });
        gsap.set(ring, { xPercent: -50, yPercent: -50 });

        // Mouse Move
        const onMouseMove = (e: MouseEvent) => {
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3 });
        };
        window.addEventListener("mousemove", onMouseMove);

        // Event Delegation for Hover (Buttons, Links, Cards etc.)
        const interactiveElements = "a, button, input, textarea, .book-card, .service-card, .post-card, .cat-btn, .read-btn";

        const onMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest(interactiveElements)) {
                gsap.to(ring, { scale: 2, duration: 0.3, ease: "power2.out" });
                gsap.to(dot, { scale: 0, duration: 0.3 });
            }
        };

        const onMouseOut = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest(interactiveElements)) {
                gsap.to(ring, { scale: 1, duration: 0.3, ease: "power2.out" });
                gsap.to(dot, { scale: 1, duration: 0.3 });
            }
        };

        // Document level pe listeners lagane se dynamically aane wale elements pe bhi kaam karega
        document.addEventListener("mouseover", onMouseOver);
        document.addEventListener("mouseout", onMouseOut);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseover", onMouseOver);
            document.removeEventListener("mouseout", onMouseOut);
        };
    }, []);

    return (
        <div id="custom-cursor">
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </div>
    );
};

export default CustomCursor;