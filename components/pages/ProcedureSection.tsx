"use client";

import Image from "next/image";

interface ProcedureCard {
    icon: string;
    title: string;
    description: string;
}

const cards: ProcedureCard[] = [
    {
        icon: "/images/icons/Formatting.png",
        title: "Thorough Consultation",
        description:
            "Every successful publishing journey starts with understanding your vision. Our specialists take the time to learn about your manuscript, publishing goals, target audience, and long-term objectives to create a customized publishing roadmap tailored specifically to your needs.",
    },
    {
        icon: "/images/icons/Book-Publishing-2.png",
        title: "Editorial Assessment",
        description:
            "Before moving forward, our editorial team carefully evaluates your manuscript to identify strengths, opportunities for improvement, and the services required to maximize its quality and market readiness.",
    },
    {
        icon: "/images/icons/Editing.png",
        title: "Book Cover Development",
        description:
            "Readers often make purchasing decisions within seconds. Our professional designers create visually compelling covers that capture your book's essence, attract your target audience, and stand out across digital and physical marketplace.",
    },
    {
        icon: "/images/icons/Global-Distribution.png",
        title: "Professional Formatting",
        description:
            "Every publishing platform has unique technical requirements. We professionally format your manuscript for e-book and print publication, ensuring compatibility, readability, and compliance with industry standards across major publishing channels.",
    },
    {
        icon: "/images/icons/Book-Promotions-2.png",
        title: "Editing & Proofreading",
        description:
            "A polished manuscript creates a stronger reader experience. Our editors review your content for grammar, punctuation, consistency, clarity, flow, and overall quality, ensuring your book is publication-ready and professionally refined.",
    },
    {
        icon: "/images/icons/Book-Promotions-2.png",
        title: "Book Publishing",
        description:
            "Once your manuscript is finalized, we handle the publishing process on your behalf. From platform setup and metadata optimization to publication management, we ensure your book is positioned for maximum visibility and accessibility.",
    },
    {
        icon: "/images/icons/Book-Promotions-2.png",
        title: "Global Distribution",
        description:
            "Your audience extends far beyond a single marketplace. We distribute your book through major global retailers, online bookstores, libraries, and digital platforms, helping you reach readers in more than 100 countries worldwide.",
    },
    {
        icon: "/images/icons/Book-Promotions-2.png",
        title: "Strategic Book Promotion",
        description:
            "Publishing is only the beginning. Our marketing specialists implement targeted promotional strategies designed to increase visibility, strengthen your author brand, generate reader engagement, and support long-term sales growth.",
    },
    {
        icon: "/images/icons/Book-Promotions-2.png",
        title: "E-Book Publishing",
        description:
            "Whether you're publishing your first book or expanding your author portfolio, Belmont Publishing offers professional, affordable publishing solutions designed to help your story reach its fullest potential.",
    },
];

const ProcedureSection: React.FC = () => {
    return (
        <>
            <style jsx global>{`
                @keyframes proc-slide {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes proc-blink {
                    0%, 100% { opacity: 1; }
                    50%      { opacity: 0.2; }
                }

                .proc-track {
                    display: flex;
                    gap: 24px;
                    width: max-content;
                    animation: proc-slide 22s linear infinite;
                }
                .proc-track:hover {
                    animation-play-state: paused;
                }

                .proc-section {
                    background: #161616;
                    font-family: Raleway, Arial, sans-serif;
                    padding: 64px 0 52px;
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                }
                .proc-grid {
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(245, 124, 21, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245, 124, 21, 0.04) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                    z-index: 0;
                }
                .proc-glow-c {
                    position: absolute;
                    top: -80px; left: 50%;
                    transform: translateX(-50%);
                    width: 520px; height: 320px;
                    border-radius: 50%;
                    background: radial-gradient(
                        ellipse, rgba(245, 124, 21, 0.14) 0%, transparent 70%
                    );
                    pointer-events: none;
                    z-index: 0;
                }
                .proc-head {
                    text-align: center;
                    position: relative; z-index: 2;
                    padding: 0 20px;
                    margin-bottom: 8px;
                }
                .proc-badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(245, 124, 21, 0.10);
                    border: 1px solid rgba(245, 124, 21, 0.22);
                    color: #f57c15; font-size: 11px; font-weight: 700;
                    letter-spacing: 1px; text-transform: uppercase;
                    padding: 5px 14px; border-radius: 20px; margin-bottom: 14px;
                }
                .proc-badge-dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #f57c15; flex-shrink: 0;
                    animation: proc-blink 1.5s ease-in-out infinite;
                }
                .proc-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(2.5rem, 2.5vw, 5.2rem);
                    font-weight: 900; color: #fff; line-height: 1.35;
                }
                .proc-hl { color: #f57c15; }

                .proc-track-wrap {
                    position: relative; z-index: 2;
                    overflow: hidden;
                    padding: 40px 0 50px;
                    mask-image: linear-gradient(
                        90deg, transparent 0%, black 10%, black 90%, transparent 100%
                    );
                    -webkit-mask-image: linear-gradient(
                        90deg, transparent 0%, black 10%, black 90%, transparent 100%
                    );
                }
                .proc-card {
                    flex-shrink: 0;
                    width: 300px;
                    background: rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border: 1px solid rgba(245, 124, 21, 0.18);
                    border-radius: 28px;
                    padding: 38px 26px 32px;
                    display: flex; flex-direction: column; align-items: center;
                    text-align: center;
                    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
                    position: relative; overflow: hidden;
                    cursor: default;
                }
                .proc-card::before {
                    content: '';
                    position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: linear-gradient(90deg, transparent, #f57c15, transparent);
                    opacity: 0; transition: opacity 0.3s;
                }
                .proc-card:hover {
                    transform: translateY(-8px) scale(1.03);
                    box-shadow: 0 16px 48px rgba(245, 124, 21, 0.18),
                                0 0 0 1px rgba(245, 124, 21, 0.28);
                    border-color: rgba(245, 124, 21, 0.38);
                }
                .proc-card:hover::before { opacity: 1; }
                .proc-icon-wrap {
                    width: 70px; height: 70px; border-radius: 18px;
                    background: rgba(245, 124, 21, 0.10);
                    border: 1px solid rgba(245, 124, 21, 0.24);
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 20px;
                    box-shadow: 0 0 24px rgba(245, 124, 21, 0.16);
                    transition: box-shadow 0.3s, transform 0.3s;
                }
                .proc-card:hover .proc-icon-wrap {
                    box-shadow: 0 0 36px rgba(245, 124, 21, 0.34);
                    transform: scale(1.08);
                }
                .proc-card-title {
                    font-size: 17px; font-weight: 700;
                    color: #fff; margin-bottom: 12px; line-height: 1.3;
                }
                .proc-card-desc {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.50);
                    line-height: 1.8;
                }
            `}</style>

            <section className="proc-section">
                <div className="proc-grid" />
                <div className="proc-glow-c" />

                <div className="proc-head">
                    <div className="proc-badge">
                        <span className="proc-badge-dot" />
                        How We Work
                    </div>
                    <h2 className="proc-heading">
                        Our Simplified Publishing Process Designed Around Your{" "}
                        <span className="proc-hl">Success</span>
                    </h2>
                </div>

                <div className="proc-track-wrap">
                    <div className="proc-track">
                        {cards.map((card) => (
                            <div className="proc-card" key={`a-${card.title}`}>
                                <div className="proc-icon-wrap">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width={36}
                                        height={36}
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            objectFit: "contain",
                                            filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(600%) hue-rotate(360deg)",
                                        }}
                                    />
                                </div>
                                <h3 className="proc-card-title">{card.title}</h3>
                                <p className="proc-card-desc">{card.description}</p>
                            </div>
                        ))}
                        {/* Duplicate for seamless infinite loop */}
                        {cards.map((card) => (
                            <div className="proc-card" key={`b-${card.title}`}>
                                <div className="proc-icon-wrap">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width={36}
                                        height={36}
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            objectFit: "contain",
                                            filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(600%) hue-rotate(360deg)",
                                        }}
                                    />
                                </div>
                                <h3 className="proc-card-title">{card.title}</h3>
                                <p className="proc-card-desc">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProcedureSection;