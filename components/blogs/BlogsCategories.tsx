"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const categories = [
    { name: "Publishing", count: 24 },
    { name: "Marketing", count: 18 },
    { name: "Writing Tips", count: 32 },
    { name: "Cover Design", count: 12 },
    { name: "Author Journey", count: 15 },
    { name: "Self-Help", count: 9 },
];

const BlogsCategories: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".cat-title", { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
            gsap.from(".cat-item", { y: 50, opacity: 0, scale: 0.9, stagger: 0.08, duration: 0.6, ease: "back.out(1.7)", scrollTrigger: { trigger: ".cat-grid", start: "top 85%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="b-cat-section" ref={sectionRef}>
            <div className="b-cat-inner">
                <h2 className="cat-title">Explore <span className="hl">Topics</span></h2>
                <div className="cat-grid">
                    {categories.map((cat) => (
                        <div key={cat.name} className="cat-item">
                            <span className="cat-name">{cat.name}</span>
                            <span className="cat-count">{cat.count} Articles</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .b-cat-section { background: #111; padding: 80px 50px; }
        .b-cat-inner { max-width: 1200px; margin: 0 auto; text-align: center; }
        .cat-title { font-family: 'Oswald', sans-serif; font-size: clamp(2rem, 4vw, 3rem); color: #fff; margin-bottom: 50px; text-transform: uppercase; }
        .hl { color: #f57c15; }
        
        .cat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .cat-item { background: rgba(255,255,255,0.03); border: 1px solid rgba(245,124,21,0.15); border-radius: 12px; padding: 30px 20px; display: flex; flex-direction: column; gap: 8px; transition: all 0.3s ease; cursor: pointer; }
        .cat-item:hover { background: rgba(245,124,21,0.08); border-color: rgba(245,124,21,0.4); transform: translateY(-5px); box-shadow: 0 10px 30px rgba(245,124,21,0.1); }
        
        .cat-name { font-family: 'Oswald', sans-serif; font-size: 20px; font-weight: 600; color: #fff; text-transform: uppercase; }
        .cat-count { font-size: 13px; color: rgba(255,255,255,0.5); }

        @media (max-width: 768px) { .cat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .cat-grid { grid-template-columns: 1fr; } .b-cat-section { padding: 60px 24px; } }
      `}</style>
        </section>
    );
};

export default BlogsCategories;