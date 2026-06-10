"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturedPost: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.to(".feat-img", {
                yPercent: -15, ease: "none",
                scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 }
            });

            gsap.from(".feat-left", { x: -60, opacity: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
            gsap.from(".feat-content > *", { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="feat-section" ref={sectionRef}>
            <div className="feat-inner">
                <div className="feat-left">
                    <div className="feat-img-wrap">
                        <div className="feat-glow" />
                        <div className="feat-img">
                            <Image src="/images/blog-featured.webp" alt="Featured Blog Post" width={700} height={500} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "12px" }} />
                        </div>
                    </div>
                </div>

                <div className="feat-right">
                    <div className="feat-content">
                        <span className="feat-cat">Author Journey</span>
                        <h2 className="feat-title">From Rejection to Bestseller: The 5-Step Blueprint Every Author Needs</h2>
                        <p className="feat-meta">By Belmont Publishing • November 12, 2024</p>
                        <p className="feat-excerpt">Rejection slips don't mean the end of your writing career. In fact, they might just be the beginning. Discover the proven strategies that transformed rejected manuscripts into global bestsellers.</p>
                        <button className="read-btn">Read Article <span>&#8594;</span></button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .feat-section { background: #fff; padding: 100px 50px; overflow: hidden; }
        .feat-inner { display: flex; align-items: center; gap: 80px; max-width: 1300px; margin: 0 auto; }
        
        .feat-left { flex: 0 0 50%; position: relative; }
        .feat-img-wrap { position: relative; width: 100%; aspect-ratio: 4/3; border-radius: 16px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.08); }
        .feat-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; height: 80%; background: radial-gradient(circle, rgba(245,124,21,0.1) 0%, transparent 70%); z-index: 0; pointer-events: none; }
        .feat-img { position: relative; z-index: 1; width: 100%; height: 100%; }
        
        .feat-right { flex: 1; }
        .feat-cat { display: inline-block; background: rgba(245,124,21,0.1); color: #f57c15; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 6px 14px; border-radius: 20px; margin-bottom: 20px; }
        .feat-title { font-family: 'Oswald', sans-serif; font-size: clamp(2rem, 3vw, 2.8rem); color: #111; margin-bottom: 16px; text-transform: uppercase; line-height: 1.2; }
        .feat-meta { font-size: 13px; color: #888; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
        .feat-excerpt { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 30px; }
        
        .read-btn { display: inline-flex; align-items: center; gap: 10px; background: #111; color: #fff; border: none; padding: 14px 28px; border-radius: 6px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transition: background 0.2s, transform 0.2s; }
        .read-btn:hover { background: #f57c15; transform: translateY(-2px); }
        .read-btn span { font-size: 18px; transition: transform 0.2s; }
        .read-btn:hover span { transform: translateX(4px); }

        @media (max-width: 900px) {
          .feat-inner { flex-direction: column; gap: 40px; }
          .feat-left { flex: unset; width: 100%; }
        }
      `}</style>
        </section>
    );
};

export default FeaturedPost;