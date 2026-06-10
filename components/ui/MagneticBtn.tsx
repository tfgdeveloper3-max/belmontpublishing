"use client";

import { useRef } from "react";
import { gsap } from "gsap";

interface Props {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number;
}

const MagneticBtn: React.FC<Props> = ({
    children,
    className,
    onClick,
    strength = 0.3,
}) => {
    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const btn = ref.current;
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
            x: x * strength,
            y: y * strength,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
    };

    return (
        <button
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MagneticBtn;