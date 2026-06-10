"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PortfolioHero: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.6, delay: 0.2 })
                .from(".hero-title .word", { y: "110%", duration: 0.8, stagger: 0.05 }, "-=0.3")
                .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
                .from(".hero-line", { width: 0, duration: 1, ease: "power4.inOut" }, "-=0.5")
                .from(".floating-book", { y: 60, opacity: 0, stagger: 0.15, duration: 0.8 }, "-=0.8");

            // Parallax floating books on scroll
            gsap.utils.toArray<HTMLElement>(".floating-book").forEach((book, i) => {
                gsap.to(book, {
                    y: i % 2 === 0 ? -60 : -30,
                    ease: "none",
                    scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1 }
                });
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="p-hero" ref={sectionRef}>
            <div className="p-hero-grid" />
            <div className="p-hero-glow p-hero-glow-l" />
            <div className="p-hero-glow p-hero-glow-r" />

            <div className="p-hero-inner">
                <div className="p-hero-content">
                    <div className="hero-badge">Our Portfolio</div>
                    <h1 className="hero-title">
                        <span className="word-wrap"><span className="word">Stories</span></span>{" "}
                        <span className="word-wrap"><span className="word">That</span></span>{" "}
                        <span className="word-wrap"><span className="word hl">Transcend</span></span><br />
                        <span className="word-wrap"><span className="word">The</span></span>{" "}
                        <span className="word-wrap"><span className="word">Ordinary</span></span>
                    </h1>
                    <p className="hero-subtitle">
                        A curated collection of masterpieces we’ve brought to life. From initial manuscripts to global bestsellers, witness the Belmont Publishing legacy.
                    </p>
                    <div className="hero-line" />
                </div>

                <div className="p-hero-books">
                    <div className="floating-book fb-1">
                        <img src="/images/Portfolio/1.webp" alt="Book 1" />
                    </div>
                    <div className="floating-book fb-2">
                        <img src="/images/Portfolio/4.webp" alt="Book 2" />
                    </div>
                    <div className="floating-book fb-3">
                        <img src="/images/Portfolio/7.webp" alt="Book 3" />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .p-hero { position: relative; min-height: 85vh; display: flex; align-items: center; background: #0f0f0f; overflow: hidden; padding-top: 80px; }
        .p-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(245,124,21,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,124,21,0.03) 1px, transparent 1px); background-size: 60px 60px; z-index: 0; }
        .p-hero-glow { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
        .p-hero-glow-l { top: -10%; left: -5%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(245,124,21,0.12) 0%, transparent 65%); }
        .p-hero-glow-r { bottom: -15%; right: -5%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(245,124,21,0.08) 0%, transparent 65%); }
        
        .p-hero-inner { position: relative; z-index: 2; display: flex; align-items: center; gap: 80px; max-width: 1400px; margin: 0 auto; padding: 60px 50px; width: 100%; }
        .p-hero-content { flex: 1; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(245,124,21,0.1); border: 1px solid rgba(245,124,21,0.2); color: #f57c15; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 8px 18px; border-radius: 30px; margin-bottom: 24px; }
        
        .hero-title { font-family: 'Oswald', sans-serif; font-size: clamp(3rem, 6vw, 6rem); font-weight: 700; color: #fff; line-height: 1.05; margin-bottom: 24px; text-transform: uppercase; }
        .word-wrap { display: inline-block; overflow: hidden; vertical-align: bottom; }
        .word { display: inline-block; }
        .hl { color: #f57c15; }
        
        .hero-subtitle { font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.8; max-width: 500px; margin-bottom: 32px; }
        .hero-line { height: 3px; width: 80px; background: linear-gradient(90deg, #f57c15, transparent); border-radius: 3px; }
        
        .p-hero-books { flex: 0 0 40%; position: relative; height: 500px; display: flex; align-items: center; justify-content: center; }
        .floating-book { position: absolute; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(245,124,21,0.1); transition: transform 0.4s ease; border: 1px solid rgba(255,255,255,0.05); }
        .floating-book img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .floating-book:hover { transform: scale(1.05) !important; z-index: 5; }
        .fb-1 { width: 180px; height: 270px; top: 10%; left: 10%; z-index: 2; }
        .fb-2 { width: 200px; height: 300px; top: 25%; left: 45%; z-index: 3; }
        .fb-3 { width: 160px; height: 240px; top: 5%; right: 5%; z-index: 1; }

        @media (max-width: 900px) {
          .p-hero-inner { flex-direction: column; text-align: center; gap: 40px; padding: 40px 24px; }
          .p-hero-books { flex: unset; width: 100%; height: 300px; }
          .fb-1 { width: 120px; height: 180px; top: 20%; left: 5%; }
          .fb-2 { width: 140px; height: 210px; top: 10%; left: 40%; }
          .fb-3 { width: 110px; height: 160px; top: 30%; right: 5%; }
          .hero-line { margin: 0 auto; }
        }
      `}</style>
        </section>
    );
};

export default PortfolioHero;