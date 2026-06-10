"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
    { value: 500, suffix: "+", label: "Articles Published" },
    { value: 50, suffix: "K+", label: "Monthly Readers" },
    { value: 120, suffix: "+", label: "Expert Authors" },
    { value: 98, suffix: "%", label: "Reader Satisfaction" },
];

const BlogsStats: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const statNums = document.querySelectorAll(".stat-val");
            statNums.forEach(num => {
                const text = num.textContent || "";
                const target = parseInt(text);
                const suffix = text.replace(/[0-9]/g, '');
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target, duration: 2, ease: "power2.out",
                    scrollTrigger: { trigger: num, start: "top 85%" },
                    onUpdate: () => { num.textContent = Math.floor(obj.val) + suffix; }
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="b-stats-section" ref={sectionRef}>
            <div className="b-stats-inner">
                {stats.map((stat) => (
                    <div key={stat.label} className="stat-box">
                        <span className="stat-val">{stat.value}{stat.suffix}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .b-stats-section { background: #f5f5f0; padding: 80px 50px; }
        .b-stats-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap; text-align: center; }
        
        .stat-box { flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 8px; }
        .stat-val { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 700; color: #f57c15; line-height: 1; }
        .stat-label { font-size: 14px; color: #555; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
      `}</style>
        </section>
    );
};

export default BlogsStats;