"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BlogsHero: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.6, delay: 0.2 })
                .from(".hero-title .word", { y: "110%", duration: 0.8, stagger: 0.05 }, "-=0.3")
                .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
                .from(".hero-line", { width: 0, duration: 1, ease: "power4.inOut" }, "-=0.5")
                .from(".hero-categories button", { y: 20, opacity: 0, stagger: 0.05, duration: 0.4 }, "-=0.6");

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="b-hero" ref={sectionRef}>
            <div className="b-hero-grid" />
            <div className="b-hero-glow" />

            <div className="b-hero-inner">
                <div className="hero-badge">The Belmont Journal</div>
                <h1 className="hero-title">
                    <span className="word-wrap"><span className="word">Insights</span></span>{" "}
                    <span className="word-wrap"><span className="word">&</span></span>{" "}
                    <span className="word-wrap"><span className="word hl">Stories</span></span>
                </h1>
                <p className="hero-subtitle">
                    Expert advice on writing, publishing, and marketing. Elevate your author journey with our latest articles.
                </p>
                <div className="hero-line" />

                <div className="hero-categories">
                    <button className="cat-btn active">All Posts</button>
                    <button className="cat-btn">Publishing</button>
                    <button className="cat-btn">Marketing</button>
                    <button className="cat-btn">Writing Tips</button>
                    <button className="cat-btn">Author Interviews</button>
                </div>
            </div>

            <style jsx>{`
        .b-hero { position: relative; min-height: 70vh; display: flex; align-items: center; justify-content: center; background: #0f0f0f; overflow: hidden; padding-top: 100px; text-align: center; }
        .b-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(245,124,21,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,124,21,0.03) 1px, transparent 1px); background-size: 60px 60px; z-index: 0; }
        .b-hero-glow { position: absolute; top: -20%; left: 50%; transform: translateX(-50%); width: 800px; height: 500px; background: radial-gradient(circle, rgba(245,124,21,0.1) 0%, transparent 65%); z-index: 0; pointer-events: none; }
        
        .b-hero-inner { position: relative; z-index: 2; max-width: 900px; padding: 60px 24px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(245,124,21,0.1); border: 1px solid rgba(245,124,21,0.2); color: #f57c15; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 8px 18px; border-radius: 30px; margin-bottom: 24px; }
        
        .hero-title { font-family: 'Oswald', sans-serif; font-size: clamp(3rem, 7vw, 6rem); font-weight: 700; color: #fff; line-height: 1.05; margin-bottom: 24px; text-transform: uppercase; }
        .word-wrap { display: inline-block; overflow: hidden; vertical-align: bottom; }
        .word { display: inline-block; }
        .hl { color: #f57c15; }
        
        .hero-subtitle { font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.8; max-width: 600px; margin: 0 auto 32px; }
        .hero-line { height: 3px; width: 80px; background: linear-gradient(90deg, transparent, #f57c15, transparent); border-radius: 3px; margin: 0 auto 40px; }
        
        .hero-categories { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
        .cat-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); padding: 10px 22px; border-radius: 30px; font-size: 13px; font-weight: 600; cursor: pointer; font-family: 'Raleway', sans-serif; transition: all 0.2s; }
        .cat-btn:hover, .cat-btn.active { background: #f57c15; border-color: #f57c15; color: #fff; box-shadow: 0 4px 15px rgba(245,124,21,0.3); }
      `}</style>
        </section>
    );
};

export default BlogsHero;