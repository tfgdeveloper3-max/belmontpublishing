"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    {
        num: "01",
        title: "Consultation",
        desc: "We discuss your vision, goals, and the best path for your manuscript.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 4a2 2 0 110 4 2 2 0 010-4zm0 10c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08A7.16 7.16 0 0111 16z" fill="currentColor" opacity=".7" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Manuscript Review",
        desc: "Our experts analyze your draft to recommend editing and design strategies.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" fill="currentColor" opacity=".7" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Editing & Design",
        desc: "Polishing the prose and creating a cover that demands attention.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor" opacity=".7" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Publishing",
        desc: "Formatting and uploading your book to 400+ global platforms.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" fill="currentColor" opacity=".7" />
            </svg>
        ),
    },
    {
        num: "05",
        title: "Marketing Launch",
        desc: "Executing targeted campaigns to ensure your book reaches its audience.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 11l19-9-9 19-2-8-8-2z" fill="currentColor" opacity=".7" />
            </svg>
        ),
    },
];

const ServicesProcess: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Register plugin
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // ─────────────────────────────────────────────────────────────────
            // FIX: Do NOT use opacity:0 as initial state via gsap.from() when
            // Lenis / Locomotive smooth scroll is active — the virtual scroll
            // means ScrollTrigger fires before the element is in real viewport.
            // Instead: use CSS opacity:0 + gsap.to() (additive, not from),
            // triggered on a generous start threshold.
            // ─────────────────────────────────────────────────────────────────
            gsap.to(".sp-step", {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.65,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".sp-grid",
                    start: "top 92%",   // very early trigger — catches Lenis offset
                    once: true,
                },
            });

            // Connector line draw
            gsap.to(".sp-connector-fill", {
                scaleX: 1,
                duration: 1.2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".sp-grid",
                    start: "top 92%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="sp-section" ref={sectionRef}>
            <div className="sp-inner">

                {/* ── Header ── */}
                <div className="sp-head">
                    <span className="sp-badge">How It Works</span>
                    <h2 className="sp-title">Our <em className="sp-em">Process</em></h2>
                    <p className="sp-sub">Five focused steps from first draft to full launch.</p>
                </div>

                {/* ── Steps grid ── */}
                <div className="sp-grid-wrap">

                    {/* Connector line behind nodes */}
                    <div className="sp-connector-track">
                        <div className="sp-connector-fill" />
                    </div>

                    <div className="sp-grid">
                        {steps.map((step, i) => (
                            <div key={step.num} className="sp-step">

                                {/* Node */}
                                <div className="sp-node-wrap">
                                    <div className="sp-node">
                                        <span className="sp-node-num">{step.num}</span>
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="sp-card">
                                    <div className="sp-card-icon">{step.icon}</div>
                                    <h3 className="sp-card-title">{step.title}</h3>
                                    <p className="sp-card-desc">{step.desc}</p>
                                    <span className="sp-card-tag">Step {i + 1}</span>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                .sp-section {
                    background: #fff;
                    padding: 100px 24px 110px;
                    position: relative;
                    overflow: hidden;
                }
                /* subtle warm tint top right */
                .sp-section::after {
                    content: '';
                    position: absolute;
                    top: -80px; right: -80px;
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(245,124,21,0.06) 0%, transparent 70%);
                    pointer-events: none;
                }

                .sp-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* ── Header ── */
                .sp-head {
                    text-align: center;
                    margin-bottom: 72px;
                }
                .sp-badge {
                    display: inline-block;
                    background: rgba(245,124,21,0.08);
                    border: 1px solid rgba(245,124,21,0.22);
                    color: #f57c15;
                    font-family: 'Raleway', sans-serif;
                    font-size: 10.5px;
                    font-weight: 800;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    padding: 7px 18px;
                    border-radius: 30px;
                    margin-bottom: 18px;
                }
                .sp-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: clamp(2.2rem, 4.5vw, 3.2rem);
                    color: #111;
                    text-transform: uppercase;
                    margin: 0 0 12px 0;
                    font-style: normal;
                    letter-spacing: -0.5px;
                }
                .sp-em {
                    color: #f57c15;
                    font-style: italic;
                }
                .sp-sub {
                    font-family: 'Raleway', sans-serif;
                    font-size: 13.5px;
                    color: #888;
                    margin: 0;
                }

                /* ── Grid wrapper + connector ── */
                .sp-grid-wrap {
                    position: relative;
                }

                /* Connector track sits horizontally at the center of the nodes */
                .sp-connector-track {
                    position: absolute;
                    /* 
                     * top = node-wrap height / 2
                     * node-wrap is 60px tall (node 44px + 8px margin above, 8px below)
                     * So center = padding-top of sp-step (0) + 30px
                     */
                    top: 22px;
                    /* 
                     * left/right = half of first/last step width (1/5 of total = 10%)
                     * This ensures line starts & ends at node centers
                     */
                    left: 10%;
                    right: 10%;
                    height: 2px;
                    background: rgba(0,0,0,0.07);
                    overflow: hidden;
                }
                .sp-connector-fill {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, #f57c15, rgba(245,124,21,0.3));
                    transform-origin: left center;
                    transform: scaleX(0);   /* animated to 1 by GSAP */
                }

                /* ── Steps grid (always flex, all 5 visible) ── */
                .sp-grid {
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                    position: relative;
                    z-index: 2;
                }

                /* ── Individual step ── */
                .sp-step {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    /* CSS starts hidden — GSAP animates to visible */
                    opacity: 0;
                    transform: translateY(24px);
                }

                /* ── Node ── */
                .sp-node-wrap {
                    margin-bottom: 20px;
                    position: relative;
                    z-index: 3;
                }
                .sp-node {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #fff;
                    border: 2px solid #f57c15;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s, transform 0.3s;
                    box-shadow: 0 0 0 5px #fff; /* hides the connector behind node */
                }
                .sp-step:hover .sp-node {
                    background: #f57c15;
                    transform: scale(1.12);
                }
                .sp-node-num {
                    font-family: 'Oswald', sans-serif;
                    font-size: 13px;
                    font-weight: 700;
                    color: #f57c15;
                    transition: color 0.3s;
                }
                .sp-step:hover .sp-node-num { color: #fff; }

                /* ── Card ── */
                .sp-card {
                    background: #fafafa;
                    border: 1px solid rgba(0,0,0,0.05);
                    border-radius: 8px;
                    padding: 18px 14px;
                    width: 100%;
                    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
                    position: relative;
                }
                .sp-step:hover .sp-card {
                    border-color: rgba(245,124,21,0.2);
                    box-shadow: 0 12px 28px rgba(245,124,21,0.09);
                    transform: translateY(-3px);
                }
                .sp-card-icon {
                    color: #f57c15;
                    margin-bottom: 10px;
                    display: flex;
                    justify-content: center;
                }
                .sp-card-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: 14px;
                    font-weight: 600;
                    color: #111;
                    text-transform: uppercase;
                    margin: 0 0 8px 0;
                    letter-spacing: 0.3px;
                }
                .sp-card-desc {
                    font-family: 'Raleway', sans-serif;
                    font-size: 11px;
                    color: #777;
                    line-height: 1.6;
                    margin: 0 0 12px 0;
                }
                .sp-card-tag {
                    font-family: 'Raleway', sans-serif;
                    font-size: 9.5px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(245,124,21,0.5);
                }

                /* ── Responsive ── */
                @media (max-width: 900px) {
                    .sp-grid {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 20px;
                    }
                    .sp-step { width: calc(33% - 14px); flex: none; }
                    .sp-connector-track { display: none; }
                }
                @media (max-width: 580px) {
                    .sp-step { width: 100%; flex-direction: row; text-align: left; gap: 16px; }
                    .sp-node-wrap { margin-bottom: 0; flex-shrink: 0; }
                    .sp-card-icon { justify-content: flex-start; }
                    .sp-connector-track { display: none; }
                }
            `}</style>
        </section>
    );
};

export default ServicesProcess;