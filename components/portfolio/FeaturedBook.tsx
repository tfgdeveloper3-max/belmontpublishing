"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturedBook: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Parallax on the book image
            gsap.to(".featured-img", {
                yPercent: -15, ease: "none",
                scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 }
            });

            // Text reveals
            gsap.from(".feat-badge", { x: -30, opacity: 0, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
            gsap.from(".feat-title", { y: 50, opacity: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
            gsap.from(".feat-text", { y: 30, opacity: 0, stagger: 0.1, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: "top 65%" } });
            gsap.from(".feat-btn", { y: 30, opacity: 0, duration: 0.6, scrollTrigger: { trigger: ".feat-btn", start: "top 90%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="feat-section" ref={sectionRef}>
            <div className="feat-inner">
                <div className="feat-left">
                    <div className="feat-img-wrap">
                        <div className="feat-glow" />
                        <div className="featured-img">
                            <Image src="/images/Portfolio/5.webp" alt="Featured Book" width={400} height={600} style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", position: "relative", zIndex: 2 }} />
                        </div>
                    </div>
                </div>

                <div className="feat-right">
                    <div className="feat-badge">Featured Bestseller</div>
                    <h2 className="feat-title">Tailormade By God</h2>
                    <div className="feat-divider" />
                    <p className="feat-text">A masterpiece that transcends genres. This book stood at #1 on Amazon's Religious & Spiritual category for 8 consecutive weeks.</p>
                    <p className="feat-text">Belmont Publishing provided end-to-end services: from developmental editing to a global launch campaign that captured the hearts of hundreds of thousands.</p>

                    <div className="feat-stats">
                        <div className="stat-box"><span className="stat-num">250K+</span><span className="stat-label">Copies Sold</span></div>
                        <div className="stat-box"><span className="stat-num">4.8</span><span className="stat-label">Avg Rating</span></div>
                        <div className="stat-box"><span className="stat-num">12</span><span className="stat-label">Countries</span></div>
                    </div>

                    <button className="feat-btn">Start Your Bestseller Journey</button>
                </div>
            </div>

            <style jsx>{`
        .feat-section { background: #111; padding: 100px 50px; overflow: hidden; }
        .feat-inner { display: flex; align-items: center; gap: 80px; max-width: 1300px; margin: 0 auto; }
        
        .feat-left { flex: 0 0 40%; display: flex; justify-content: center; position: relative; }
        .feat-img-wrap { position: relative; width: 100%; max-width: 340px; }
        .feat-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: 300px; background: radial-gradient(circle, rgba(245,124,21,0.15) 0%, transparent 70%); border-radius: 50%; z-index: 0; }
        .featured-img { box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(245,124,21,0.1); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); position: relative; z-index: 1; }
        
        .feat-right { flex: 1; }
        .feat-badge { display: inline-block; background: rgba(245,124,21,0.1); border: 1px solid rgba(245,124,21,0.3); color: #f57c15; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 6px 16px; border-radius: 20px; margin-bottom: 20px; }
        .feat-title { font-family: 'Oswald', sans-serif; font-size: clamp(2rem, 4vw, 3.5rem); color: #fff; margin-bottom: 16px; text-transform: uppercase; }
        .feat-divider { width: 60px; height: 3px; background: #f57c15; margin-bottom: 24px; border-radius: 3px; }
        .feat-text { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.8; margin-bottom: 16px; max-width: 520px; }
        
        .feat-stats { display: flex; gap: 32px; margin: 32px 0; }
        .stat-box { display: flex; flex-direction: column; gap: 4px; }
        .stat-num { font-family: 'Oswald', sans-serif; font-size: 28px; font-weight: 700; color: #f57c15; }
        .stat-label { font-size: 12px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.5px; }
        
        .feat-btn { background: #f57c15; color: #fff; border: none; padding: 16px 36px; border-radius: 6px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transition: background 0.2s, transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 20px rgba(245,124,21,0.3); }
        .feat-btn:hover { background: #d96a0a; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(245,124,21,0.5); }

        @media (max-width: 900px) {
          .feat-inner { flex-direction: column; text-align: center; gap: 40px; padding: 0 20px; }
          .feat-left { flex: unset; width: 100%; }
          .feat-img-wrap { max-width: 250px; margin: 0 auto; }
          .feat-divider { margin: 0 auto 24px; }
          .feat-text { margin: 0 auto 16px; }
          .feat-stats { justify-content: center; }
        }
      `}</style>
        </section>
    );
};

export default FeaturedBook;