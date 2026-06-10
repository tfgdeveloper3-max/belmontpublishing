"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services: string[] = [
    "Book Marketing & Promotion",
    "Cover Design & Illustration",
    "Audiobook Publishing",
    "Author Website Development",
];

const GiveStorySection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="give-section" ref={sectionRef}>
            {/* Grid overlay */}
            <div className="give-grid" />

            {/* Ambient glows */}
            <div className="give-glow give-glow-l" />
            <div className="give-glow give-glow-r" />

            <div className="give-inner">

                {/* LEFT — Image */}
                <div className={`give-left${visible ? " slide-in-left" : ""}`}>
                    <div className="give-img-frame">
                        <Image
                            src="/images/give-story-img.png"
                            alt="Book Publishing"
                            width={520}
                            height={480}
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                        {/* Orange corner accents */}
                        <div className="corner corner-tl" />
                        <div className="corner corner-br" />
                    </div>
                </div>

                {/* RIGHT — Content */}
                <div className={`give-right${visible ? " slide-in-right" : ""}`}>
                    {/* Badge */}
                    <div className="give-badge">
                        <span className="badge-dot" />
                        Our Services
                    </div>

                    <h2 className="give-heading">
                        Top Online Book Publishers in {" "}
                        <span className="hl">USA</span>, Offering Complete Publishing Solutions for Authors Under One Roof 
                    </h2>

                    <div className="give-divider" />

                    <p className="give-desc">
                        At Belmont Publishing, we provide comprehensive publishing solutions designed to reach readers. You require strategy, expertise, and a team committed to your success. As one of the trusted online book publishing service providers in the USA, Belmont Publishing helps authors transform manuscripts into professionally published books that attract readers and create lasting impact.
                    </p>

                    <div className="give-services">
                        {services.map((s) => (
                            <div key={s} className="give-item">
                                <span className="give-check">✔</span>
                                <span>{s}</span>
                            </div>
                        ))}
                    </div>

                    <div className="give-btns">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-orange">Live Chat</button>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .give-section {
                    background: #1a1a1a;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 72px 60px;
                    position: relative;
                    overflow: hidden;
                }

                /* Grid */
                .give-grid {
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(245, 124, 21, 0.035) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245, 124, 21, 0.035) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none; z-index: 0;
                }

                /* Glows */
                .give-glow {
                    position: absolute; border-radius: 50%;
                    pointer-events: none; z-index: 0;
                }
                .give-glow-l {
                    top: -80px; left: -80px;
                    width: 420px; height: 420px;
                    background: radial-gradient(circle, rgba(245, 124, 21, 0.13) 0%, transparent 65%);
                }
                .give-glow-r {
                    bottom: -60px; right: -60px;
                    width: 340px; height: 340px;
                    background: radial-gradient(circle, rgba(245, 124, 21, 0.08) 0%, transparent 65%);
                }

                /* Layout */
                .give-inner {
                    position: relative; z-index: 2;
                    display: flex; align-items: center; gap: 64px;
                    max-width: 1200px; margin: 0 auto;
                }

                /* LEFT */
                .give-left {
                    flex: 0 0 44%;
                    opacity: 0;
                    transform: translateX(-80px);
                    transition: opacity 0.9s ease, transform 0.9s ease;
                }
                .give-left.slide-in-left {
                    opacity: 1; transform: translateX(0);
                }

                .give-img-frame {
                    position: relative;
                    border-radius: 24px; overflow: hidden;
                    border: 1px solid rgba(245, 124, 21, 0.20);
                    box-shadow: 0 0 60px rgba(245, 124, 21, 0.12),
                                0 24px 64px rgba(0, 0, 0, 0.55);
                }
                .give-img-frame::after {
                    content: '';
                    position: absolute; inset: 0;
                    background: linear-gradient(
                        135deg, rgba(245, 124, 21, 0.06) 0%, transparent 55%
                    );
                    pointer-events: none;
                }

                /* Orange corner accents */
                .corner { position: absolute; width: 56px; height: 56px; z-index: 2; }
                .corner-tl {
                    top: -1px; left: -1px;
                    border-top: 3px solid #f57c15;
                    border-left: 3px solid #f57c15;
                    border-radius: 24px 0 0 0;
                }
                .corner-br {
                    bottom: -1px; right: -1px;
                    border-bottom: 3px solid #f57c15;
                    border-right: 3px solid #f57c15;
                    border-radius: 0 0 24px 0;
                }

                /* RIGHT */
                .give-right {
                    flex: 1; min-width: 0;
                    opacity: 0;
                    transform: translateX(80px);
                    transition: opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s;
                }
                .give-right.slide-in-right {
                    opacity: 1; transform: translateX(0);
                }

                /* Badge */
                .give-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(245, 124, 21, 0.10);
                    border: 1px solid rgba(245, 124, 21, 0.22);
                    color: #f57c15; font-size: 11px; font-weight: 700;
                    letter-spacing: 1px; text-transform: uppercase;
                    padding: 5px 14px; border-radius: 20px; margin-bottom: 18px;
                }
                .badge-dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #f57c15; flex-shrink: 0;
                    animation: blink 1.5s ease-in-out infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.2; }
                }

                .give-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(2rem, 2.5vw, 4rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.2; margin-bottom: 16px;
                }
                .hl { color: #f57c15; }

                .give-divider {
                    width: 48px; height: 3px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 3px; margin-bottom: 18px;
                }

                .give-desc {
                    font-size: 1rem; color: rgba(255, 255, 255, 0.52);
                    line-height: 1.88; margin-bottom: 26px; max-width: 500px;
                }

                /* Service items */
                .give-services {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 12px; margin-bottom: 32px;
                }
                .give-item {
                    display: flex; align-items: center; gap: 10px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(245, 124, 21, 0.16);
                    border-radius: 10px; padding: 12px 16px;
                    font-size: 13px; color: rgba(255, 255, 255, 0.78);
                    font-weight: 600;
                    backdrop-filter: blur(6px);
                    transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
                }
                .give-item:hover {
                    background: rgba(245, 124, 21, 0.10);
                    border-color: rgba(245, 124, 21, 0.34);
                    box-shadow: 0 4px 20px rgba(245, 124, 21, 0.14);
                }
                .give-check {
                    width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
                    background: rgba(245, 124, 21, 0.14);
                    border: 1px solid rgba(245, 124, 21, 0.34);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 11px; color: #f57c15; font-weight: 700;
                }

                /* Buttons */
                .give-btns { display: flex; gap: 14px; flex-wrap: wrap; }
                .btn-dark {
                    background: rgba(255, 255, 255, 0.08); color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    padding: 13px 32px; border-radius: 6px;
                    font-size: 14px; font-weight: 700; cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    backdrop-filter: blur(8px);
                    transition: background 0.2s;
                }
                .btn-dark:hover { background: rgba(255, 255, 255, 0.14); }
                .btn-orange {
                    background: #f57c15; color: #fff; border: none;
                    padding: 13px 32px; border-radius: 6px;
                    font-size: 14px; font-weight: 700; cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    box-shadow: 0 4px 22px rgba(245, 124, 21, 0.40);
                    transition: background 0.2s, box-shadow 0.2s;
                }
                .btn-orange:hover {
                    background: #d96a0a;
                    box-shadow: 0 6px 30px rgba(245, 124, 21, 0.56);
                }

                /* Responsive */
                @media (max-width: 820px) {
                    .give-section { padding: 50px 20px; }
                    .give-inner { flex-direction: column; gap: 36px; }
                    .give-left { flex: unset; width: 100%; }
                    .give-services { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default GiveStorySection;