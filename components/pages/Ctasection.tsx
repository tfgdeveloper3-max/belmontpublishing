"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CTASection: React.FC = () => {
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
        <section className="cta-section" ref={sectionRef}>
            {/* Subtle grid pattern */}
            <div className="cta-grid-lines" />

            {/* Ambient glows */}
            <div className="cta-glow cta-glow-tl" />
            <div className="cta-glow cta-glow-br" />

            <div className="cta-inner">
                {/* Left — image */}
                <div className={`cta-left${visible ? " slide-in-left" : ""}`}>
                    <div className="cta-img-frame">
                        <div className="ring ring-1" />
                        <div className="ring ring-2" />
                        <div className="cta-img-wrap">
                            <Image
                                src="/images/cta-sec-img-1.png"
                                alt="Book Publishing"
                                width={500}
                                height={400}
                                style={{
                                    width: "100%",
                                    maxWidth: "460px",
                                    height: "auto",
                                    display: "block",
                                    borderRadius: "20px",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Right — content */}
                <div className={`cta-right${visible ? " slide-in-right" : ""}`}>
                    {/* Animated badge */}
                    <div className="cta-pill">
                        <span className="pill-dot" />
                        Publishing Excellence
                    </div>

                    <h2 className="cta-heading">
                        <span className="highlight">Professional Publishing</span>{" "} House for Authors Ready to Be Heard
                    </h2>

                    <h3 className="cta-subheading">
                        You Dream It. You Write It. We Bring It to Your Audience!
                    </h3>

                    <p className="cta-desc">
                        With over 1,000 successful publishing projects, a 98% author satisfaction rate, and readers reaching across 75+ countries, Belmont Publishing has helped authors transform their manuscripts into professionally published books that make a lasting impact.
                    </p>

                    <div className="cta-btns">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-orange">Live Chat</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cta-section {
                    position: relative;
                    overflow: hidden;
                    font-family: "Nunito Sans", sans-serif;
                    min-height: 480px;
                    display: flex;
                    align-items: center;
                    background-color: #1e1e1e;
                }

                /* Subtle grid */
                .cta-grid-lines {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(245, 124, 21, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245, 124, 21, 0.04) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                    z-index: 0;
                }

                /* Ambient glows */
                .cta-glow {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }
                .cta-glow-tl {
                    top: -120px;
                    left: -80px;
                    width: 440px;
                    height: 440px;
                    background: radial-gradient(
                        circle,
                        rgba(245, 124, 21, 0.18) 0%,
                        transparent 65%
                    );
                }
                .cta-glow-br {
                    bottom: -100px;
                    right: -60px;
                    width: 360px;
                    height: 360px;
                    background: radial-gradient(
                        circle,
                        rgba(245, 124, 21, 0.10) 0%,
                        transparent 65%
                    );
                }

                /* Inner layout */
                .cta-inner {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    padding: 64px 70px;
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                    box-sizing: border-box;
                }

                /* Left */
                .cta-left {
                    flex: 0 0 42%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transform: translateX(-120px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                }
                .cta-left.slide-in-left {
                    opacity: 1;
                    transform: translateX(0);
                }

                .cta-img-frame {
                    position: relative;
                    width: 100%;
                    max-width: 420px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Decorative rings around image */
                .ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .ring-1 {
                    width: 320px;
                    height: 320px;
                    border: 1px solid rgba(245, 124, 21, 0.18);
                    box-shadow: 0 0 60px rgba(245, 124, 21, 0.10);
                }
                .ring-2 {
                    width: 400px;
                    height: 400px;
                    border: 1px dashed rgba(245, 124, 21, 0.08);
                }

                .cta-img-wrap {
                    animation: updown2 3s ease-in-out infinite;
                    position: relative;
                    z-index: 1;
                    width: 100%;
                    filter: drop-shadow(0 12px 40px rgba(0, 0, 0, 0.5));
                }

                @keyframes updown2 {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-16px); }
                }

                /* Right */
                .cta-right {
                    flex: 1;
                    min-width: 0;
                    opacity: 0;
                    transform: translateX(120px);
                    transition: opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s;
                }
                .cta-right.slide-in-right {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Animated badge pill */
                .cta-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(245, 124, 21, 0.12);
                    border: 1px solid rgba(245, 124, 21, 0.25);
                    color: #f57c15;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    padding: 6px 14px;
                    border-radius: 20px;
                    margin-bottom: 20px;
                }
                .pill-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #f57c15;
                    animation: blink 1.5s ease-in-out infinite;
                    flex-shrink: 0;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.25; }
                }

                /* Text */
                .cta-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(2.5rem, 2.5vw, 5.2rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.2;
                    margin-bottom: 18px;
                }
                .highlight {
                    color: #f57c15;
                }
                .cta-subheading {
                    font-size: clamp(13px, 1.4vw, 17px);
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.70);
                    line-height: 1.5;
                    margin-bottom: 16px;
                    border-left: 3px solid #f57c15;
                    padding-left: 12px;
                    border-radius: 0;
                }
                .cta-desc {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.52);
                    line-height: 1.85;
                    margin-bottom: 28px;
                    max-width: 520px;
                }

                /* Stats row */
                .cta-stats {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    margin-bottom: 32px;
                    flex-wrap: wrap;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .stat-num {
                    font-size: 22px;
                    font-weight: 700;
                    color: #f57c15;
                    line-height: 1;
                }
                .stat-label {
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.38);
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }
                .stat-divider {
                    width: 1px;
                    height: 36px;
                    background: rgba(255, 255, 255, 0.10);
                    flex-shrink: 0;
                }

                /* Buttons */
                .cta-btns {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex-wrap: wrap;
                }
                .btn-dark {
                    background: rgba(255, 255, 255, 0.08);
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    padding: 14px 34px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    letter-spacing: 0.3px;
                    backdrop-filter: blur(8px);
                }
                .btn-dark:hover {
                    background: rgba(255, 255, 255, 0.14);
                    box-shadow: 0 4px 18px rgba(255, 255, 255, 0.06);
                }
                .btn-orange {
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    padding: 14px 34px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    letter-spacing: 0.3px;
                    box-shadow: 0 4px 22px rgba(245, 124, 21, 0.42);
                }
                .btn-orange:hover {
                    background: #d96a0a;
                    box-shadow: 0 6px 30px rgba(245, 124, 21, 0.58);
                }

                /* Responsive */
                @media (max-width: 820px) {
                    .cta-inner {
                        flex-direction: column;
                        padding: 50px 24px;
                        gap: 36px;
                    }
                    .cta-left {
                        width: 100%;
                        flex: unset;
                    }
                    .ring-1, .ring-2 { display: none; }
                }
            `}</style>
        </section>
    );
};

export default CTASection;