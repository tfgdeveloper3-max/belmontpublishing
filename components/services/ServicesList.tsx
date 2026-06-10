"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const servicesMenu = [
    {
        label: "Writing Services",
        description: "Transforming your vision into powerful narratives across every genre.",
        links: [
            "Book Writing", "Ghostwriting", "Children's Book Writing", "Sci-Fi Writing",
            "Memoir Writing", "Fiction Writing", "SEO Content Writing", "Mystery Writing",
            "Historical Writing", "Fantasy Writing", "Non-Fiction Writing", "Script Writing", "Horror Writing"
        ],
    },
    {
        label: "Editing & Publishing",
        description: "Expert precision and seamless distribution to refine and launch your book.",
        links: [
            "Book Proofreading", "Book Editing", "Ebook Creation", "Audiobook Narration",
            "Book Formatting", "Children's Book Editing", "Book Publishing"
        ],
    },
    {
        label: "Design, Printing & Marketing",
        description: "Captivate readers with stunning covers, premium print, and strategic campaigns.",
        links: [
            "Book Cover Design", "Author Website Design", "Book Printing", "Book Marketing"
        ],
    },
];

const slugify = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

// ─────────────────────────────────────────────────────────────────────────────
// PILL STYLES: Pure inline React.CSSProperties — completely bypasses any
// global <a> stylesheet, Tailwind preflight, or Next.js base CSS.
// styled-jsx scoped styles CANNOT override global a{} rules on <Link>,
// so we use inline styles + onMouseEnter/Leave handlers instead.
// ─────────────────────────────────────────────────────────────────────────────
const pillStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "9px 15px",
    textDecoration: "none",       // kills underline
    fontFamily: "'Raleway', sans-serif",
    fontSize: "11.5px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.72)",  // kills blue link color
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "5px",
    transition: "all 0.25s ease",
    letterSpacing: "0.3px",
    cursor: "pointer",
    lineHeight: "1.2",
};

const ServicesList: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".sl-card").forEach((card, i) => {
                gsap.from(card, {
                    y: 50, opacity: 0, duration: 0.8, delay: i * 0.1,
                    ease: "power3.out",
                    scrollTrigger: { trigger: card, start: "top 90%" },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="sl-section">

            <div className="sl-label-row">
                <span className="sl-eyebrow">What We Offer</span>
                <div className="sl-line" />
            </div>

            <div className="sl-stack">
                {servicesMenu.map((cat, i) => (
                    <div key={cat.label} className="sl-card">

                        {/* ── Left: category meta ── */}
                        <div className="sl-meta">
                            <span className="sl-index">0{i + 1}</span>
                            <div>
                                <h2 className="sl-title">{cat.label}</h2>
                                <p className="sl-desc">{cat.description}</p>
                            </div>
                        </div>

                        {/* ── Right: pills ── */}
                        <div className="sl-pills">
                            {cat.links.map((link) => (
                                <Link
                                    key={link}
                                    href={`/InnerServices/${slugify(link)}`}
                                    style={pillStyle}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.background = "#f57c15";
                                        el.style.color = "#fff";
                                        el.style.borderColor = "#f57c15";
                                        el.style.transform = "translateY(-2px)";
                                        el.style.boxShadow = "0 6px 18px rgba(245,124,21,0.25)";
                                        el.style.textDecoration = "none";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.background = "rgba(255,255,255,0.04)";
                                        el.style.color = "rgba(255,255,255,0.72)";
                                        el.style.borderColor = "rgba(255,255,255,0.1)";
                                        el.style.transform = "translateY(0)";
                                        el.style.boxShadow = "none";
                                        el.style.textDecoration = "none";
                                    }}
                                >
                                    {link}
                                    <svg
                                        width="9" height="9" viewBox="0 0 9 9" fill="none"
                                        style={{ opacity: 0.55, flexShrink: 0 }}
                                    >
                                        <path d="M1 8L8 1M8 1H2M8 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

            <style jsx>{`
                .sl-section {
                    background: #060606;
                    padding: 90px 24px 100px;
                    position: relative;
                }
                .sl-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse 70% 35% at 50% 0%, rgba(245,124,21,0.05) 0%, transparent 65%);
                    pointer-events: none;
                }

                /* ── Eyebrow row ── */
                .sl-label-row {
                    max-width: 1200px;
                    margin: 0 auto 52px;
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }
                .sl-eyebrow {
                    font-family: 'Raleway', sans-serif;
                    font-size: 10.5px;
                    font-weight: 800;
                    letter-spacing: 3.5px;
                    text-transform: uppercase;
                    color: #f57c15;
                    white-space: nowrap;
                }
                .sl-line {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(90deg, rgba(245,124,21,0.35), transparent);
                }

                /* ── Card stack ── */
                .sl-stack {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                /* ── Single card ── */
                .sl-card {
                    display: grid;
                    grid-template-columns: 310px 1fr;
                    background: #0b0b0b;
                    border: 1px solid rgba(255,255,255,0.065);
                    border-radius: 10px;
                    overflow: hidden;
                    transition: border-color 0.3s ease;
                }
                .sl-card:hover {
                    border-color: rgba(245,124,21,0.25);
                }

                /* ── Meta column ── */
                .sl-meta {
                    padding: 34px 28px;
                    border-right: 1px solid rgba(255,255,255,0.05);
                    background: rgba(255,255,255,0.012);
                    display: flex;
                    gap: 14px;
                    align-items: flex-start;
                }
                .sl-index {
                    font-family: 'Oswald', sans-serif;
                    font-size: 52px;
                    font-weight: 700;
                    line-height: 1;
                    color: rgba(245,124,21,0.11);
                    flex-shrink: 0;
                    margin-top: -3px;
                    user-select: none;
                }
                .sl-title {
                    font-family: 'Oswald', sans-serif;
                    font-size: 17px;
                    font-weight: 600;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin: 0 0 9px 0;
                }
                .sl-desc {
                    font-family: 'Raleway', sans-serif;
                    font-size: 12px;
                    color: rgba(255,255,255,0.35);
                    line-height: 1.65;
                    margin: 0;
                }

                /* ── Pills column ── */
                .sl-pills {
                    padding: 26px 24px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    align-content: center;
                }

                /* ── Responsive ── */
                @media (max-width: 820px) {
                    .sl-card { grid-template-columns: 1fr; }
                    .sl-meta {
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.05);
                        padding: 22px 18px;
                    }
                    .sl-pills { padding: 18px; }
                }
            `}</style>
        </section>
    );
};

export default ServicesList;