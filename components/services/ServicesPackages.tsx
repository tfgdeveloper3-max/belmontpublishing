"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const packages = [
    { name: "Essential", price: "$999", desc: "Perfect for first-time authors needing core publishing services.", features: ["Professional Editing", "Cover Design", "ISBN Assignment", "Amazon Distribution"], btn: "Get Started" },
    { name: "Professional", price: "$2499", desc: "Our most popular package for authors who want full market readiness.", features: ["Everything in Essential", "Global Distribution (400+)", "Author Website Setup", "SEO & Metadata Optimization", "Social Media Kit"], btn: "Get Started", featured: true },
    { name: "Elite", price: "$4999", desc: "The ultimate package for a blockbuster launch and sustained sales.", features: ["Everything in Professional", "Dedicated Marketing Manager", "Video Book Trailer", "Press Release Campaign", "Amazon Ads Management"], btn: "Get Started" },
];

const ServicesPackages: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".pkg-card", { y: 80, opacity: 0, scale: 0.95, stagger: 0.15, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".pkg-grid", start: "top 85%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="s-pkg-section" ref={sectionRef}>
            <div className="s-pkg-inner">
                <h2 className="pkg-title">Publishing <span className="hl">Packages</span></h2>
                <p className="pkg-subtitle">Transparent pricing. No hidden fees. 100% Royalties to you.</p>

                <div className="pkg-grid">
                    {packages.map((pkg) => (
                        <div key={pkg.name} className={`pkg-card ${pkg.featured ? 'featured' : ''}`}>
                            {pkg.featured && <div className="featured-badge">Most Popular</div>}
                            <h3 className="pkg-name">{pkg.name}</h3>
                            <div className="pkg-price">{pkg.price}</div>
                            <p className="pkg-desc">{pkg.desc}</p>
                            <ul className="pkg-features">
                                {pkg.features.map(ft => <li key={ft}><span>&#10003;</span> {ft}</li>)}
                            </ul>
                            <button className="pkg-btn">{pkg.btn}</button>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .s-pkg-section { background: #f5f5f0; padding: 120px 50px; }
        .s-pkg-inner { max-width: 1200px; margin: 0 auto; text-align: center; }
        .pkg-title { font-family: 'Oswald', sans-serif; font-size: clamp(2rem, 4vw, 3rem); color: #111; margin-bottom: 16px; text-transform: uppercase; }
        .hl { color: #f57c15; }
        .pkg-subtitle { color: #666; font-size: 15px; margin-bottom: 60px; }
        
        .pkg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; align-items: center; }
        
        .pkg-card { background: #fff; border: 1px solid #e0e0db; border-radius: 16px; padding: 40px 30px; text-align: left; position: relative; transition: transform 0.3s, box-shadow 0.3s; }
        .pkg-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        
        .pkg-card.featured { background: #111; border-color: #f57c15; color: #fff; transform: scale(1.05); box-shadow: 0 20px 60px rgba(245,124,21,0.2); }
        .pkg-card.featured:hover { transform: scale(1.08); }
        
        .featured-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #f57c15; color: #fff; font-size: 11px; font-weight: 700; padding: 6px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; }
        
        .pkg-name { font-family: 'Oswald', sans-serif; font-size: 22px; margin-bottom: 8px; text-transform: uppercase; color: #111; }
        .pkg-card.featured .pkg-name { color: #fff; }
        
        .pkg-price { font-family: 'Oswald', sans-serif; font-size: 42px; font-weight: 700; color: #f57c15; margin-bottom: 16px; }
        
        .pkg-desc { font-size: 13px; color: #888; line-height: 1.6; margin-bottom: 24px; min-height: 40px; }
        .pkg-card.featured .pkg-desc { color: rgba(255,255,255,0.6); }
        
        .pkg-features { list-style: none; padding: 0; margin-bottom: 30px; display: flex; flex-direction: column; gap: 12px; }
        .pkg-features li { display: flex; align-items: center; gap: 10px; font-size: 13px; color: #555; }
        .pkg-card.featured .pkg-features li { color: rgba(255,255,255,0.8); }
        .pkg-features li span { color: #f57c15; font-weight: 700; }
        
        .pkg-btn { width: 100%; background: #111; color: #fff; border: none; padding: 14px; border-radius: 6px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transition: background 0.2s; }
        .pkg-btn:hover { background: #333; }
        .pkg-card.featured .pkg-btn { background: #f57c15; box-shadow: 0 4px 20px rgba(245,124,21,0.4); }
        .pkg-card.featured .pkg-btn:hover { background: #d96a0a; }

        @media (max-width: 900px) { .pkg-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; } .pkg-card.featured { transform: scale(1); } .pkg-card.featured:hover { transform: translateY(-10px); } }
      `}</style>
        </section>
    );
};

export default ServicesPackages;