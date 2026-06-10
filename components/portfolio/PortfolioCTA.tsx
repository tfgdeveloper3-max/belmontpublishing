"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PortfolioCTA: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".cta-content", { y: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="p-cta-section" ref={sectionRef}>
            <div className="p-cta-grid" />
            <div className="p-cta-inner">
                <div className="cta-content">
                    <h2 className="cta-title">Ready To Write <span className="hl">Your Own</span> Success Story?</h2>
                    <p className="cta-desc">Join the ranks of our bestselling authors. Let's turn your manuscript into the next big literary sensation.</p>
                    <div className="cta-btns">
                        <button className="btn-orange">Get Started</button>
                        <button className="btn-dark">Talk To An Expert</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .p-cta-section { position: relative; background: #f5f5f0; padding: 120px 50px; overflow: hidden; text-align: center; }
        .p-cta-grid { position: absolute; inset: 0; background-image: radial-gradient(#e0e0db 1px, transparent 1px); background-size: 24px 24px; opacity: 0.5; z-index: 0; }
        .p-cta-inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; }
        
        .cta-title { font-family: 'Oswald', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); color: #111; margin-bottom: 20px; text-transform: uppercase; line-height: 1.1; }
        .hl { color: #f57c15; }
        .cta-desc { font-size: 16px; color: #555; line-height: 1.7; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
        
        .cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .btn-orange { background: #f57c15; color: #fff; border: none; padding: 16px 36px; border-radius: 6px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transition: background 0.2s, transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 20px rgba(245,124,21,0.3); }
        .btn-orange:hover { background: #d96a0a; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(245,124,21,0.5); }
        .btn-dark { background: #111; color: #fff; border: none; padding: 16px 36px; border-radius: 6px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transition: background 0.2s, transform 0.2s; }
        .btn-dark:hover { background: #333; transform: translateY(-2px); }
      `}</style>
        </section>
    );
};

export default PortfolioCTA;