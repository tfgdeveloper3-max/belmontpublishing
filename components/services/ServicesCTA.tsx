"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServicesCTA: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".cta-data", { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="s-cta" ref={sectionRef}>
            <div className="cta-data">
                <h2 className="cta-title">Ready To Publish <span className="hl">Your Book?</span></h2>
                <p className="cta-desc">Schedule a free consultation with our publishing experts today.</p>
                <div className="cta-btns">
                    <button className="btn-orange">Get A Free Quote</button>
                    <button className="btn-outline">(646) 298 6438</button>
                </div>
            </div>

            <style jsx>{`
        .s-cta { background: #050505; padding: 120px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); }
        
        .cta-title { font-family: 'Oswald', sans-serif; font-size: clamp(2.5rem, 5vw, 4.5rem); color: #fff; margin-bottom: 20px; text-transform: uppercase; line-height: 1; }
        .hl { color: #f57c15; }
        .cta-desc { font-size: 15px; color: rgba(255,255,255,0.4); margin-bottom: 40px; }
        
        .cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .btn-orange { background: #f57c15; color: #fff; border: none; padding: 16px 36px; border-radius: 4px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transition: all 0.2s; letter-spacing: 1px; text-transform: uppercase; }
        .btn-orange:hover { background: #fff; color: #000; }
        .btn-outline { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.15); padding: 16px 36px; border-radius: 4px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transition: all 0.2s; letter-spacing: 1px; text-transform: uppercase; }
        .btn-outline:hover { border-color: #fff; background: #fff; color: #000; }
      `}</style>
        </section>
    );
};

export default ServicesCTA;