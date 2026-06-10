"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BlogsNewsletter: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".nl-content", { y: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="nl-section" ref={sectionRef}>
            <div className="nl-grid" />
            <div className="nl-glow" />
            <div className="nl-inner">
                <div className="nl-content">
                    <h2 className="nl-title">Join The <span className="hl">Author's</span> Inner Circle</h2>
                    <p className="nl-desc">Get exclusive publishing insights, early access to our guides, and industry secrets delivered straight to your inbox every week.</p>

                    <div className="nl-form">
                        <input type="email" placeholder="Enter your email address" className="nl-input" />
                        <button className="nl-btn">Subscribe</button>
                    </div>
                    <p className="nl-disclaimer">No spam, ever. Unsubscribe at any time.</p>
                </div>
            </div>

            <style jsx>{`
        .nl-section { position: relative; background: #111; padding: 120px 50px; overflow: hidden; text-align: center; }
        .nl-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(245,124,21,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,124,21,0.03) 1px, transparent 1px); background-size: 60px 60px; z-index: 0; pointer-events: none; }
        .nl-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 400px; background: radial-gradient(circle, rgba(245,124,21,0.08) 0%, transparent 65%); z-index: 0; pointer-events: none; }
        
        .nl-inner { position: relative; z-index: 2; max-width: 700px; margin: 0 auto; }
        
        .nl-title { font-family: 'Oswald', sans-serif; font-size: clamp(2.5rem, 5vw, 3.5rem); color: #fff; margin-bottom: 20px; text-transform: uppercase; line-height: 1.1; }
        .hl { color: #f57c15; }
        .nl-desc { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 40px; }
        
        .nl-form { display: flex; gap: 12px; max-width: 500px; margin: 0 auto 16px; }
        .nl-input { flex: 1; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 16px 20px; border-radius: 6px; font-size: 14px; font-family: 'Raleway', sans-serif; outline: none; transition: border-color 0.2s; }
        .nl-input:focus { border-color: #f57c15; }
        .nl-input::placeholder { color: rgba(255,255,255,0.4); }
        
        .nl-btn { background: #f57c15; color: #fff; border: none; padding: 16px 32px; border-radius: 6px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transition: background 0.2s, box-shadow 0.2s; white-space: nowrap; }
        .nl-btn:hover { background: #d96a0a; box-shadow: 0 8px 24px rgba(245,124,21,0.4); }
        
        .nl-disclaimer { font-size: 12px; color: rgba(255,255,255,0.3); }

        @media (max-width: 600px) {
          .nl-form { flex-direction: column; }
          .nl-section { padding: 80px 24px; }
        }
      `}</style>
        </section>
    );
};

export default BlogsNewsletter;