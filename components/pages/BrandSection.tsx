"use client";

import Image from "next/image";

const brands = [
    { src: "/images/ibook.png", alt: "Apple iBooks" },
    { src: "/images/kebo.png", alt: "Kobo" },
    { src: "/images/scribd.png", alt: "Scribd" },
    { src: "/images/amazon.png", alt: "Amazon" },
];

const BrandSection: React.FC = () => {
    return (
        <section className="brand-section">

            {/* Map background */}
            <div className="brand-map">
                <Image
                    src="/images/Brand-bg.png"
                    alt="World Map"
                    width={1500}
                    height={750}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.12 }}
                    priority
                />
            </div>

            {/* Light overlay */}
            <div className="brand-overlay" />

            {/* Ambient glows */}
            <div className="brand-glow brand-glow-l" />
            <div className="brand-glow brand-glow-r" />

            <div className="brand-inner">

                {/* Text block */}
                <div className="brand-text">
                    <span className="brand-badge">Global Reach</span>
                    <h2 className="brand-heading">
                        Your Book, Distributed<br />
                        <span className="hl">Across The World</span>
                    </h2>
                    <div className="brand-divider" />
                    <p className="brand-desc">
                        From North America to Europe, Asia to Australia — Belmont Publishing ensures your book reaches readers in every corner of the globe through the world's most powerful distribution platforms.
                    </p>
                </div>

                {/* Brand logos */}
                <div className="brand-logos-wrap">
                    <p className="brand-logos-label">Available On</p>
                    <div className="brand-logos">
                        {brands.map((b) => (
                            <div key={b.alt} className="brand-logo-card">
                                <Image
                                    src={b.src}
                                    alt={b.alt}
                                    width={140}
                                    height={60}
                                    style={{
                                        width: "auto",
                                        height: "40px",
                                        objectFit: "contain",
                                        filter: "brightness(0)",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                .brand-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    position: relative;
                    overflow: hidden;
                    padding: 80px 60px;
                }

                /* Map */
                .brand-map {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                }

                /* Overlay */
                .brand-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                }

                /* Glows */
                .brand-glow {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 1;
                }
                .brand-glow-l {
                    top: -100px; left: -80px;
                    width: 460px; height: 460px;
                    background: radial-gradient(circle, rgba(245,124,21,0.12) 0%, transparent 65%);
                }
                .brand-glow-r {
                    bottom: -80px; right: -60px;
                    width: 360px; height: 360px;
                    background: radial-gradient(circle, rgba(245,124,21,0.08) 0%, transparent 65%);
                }

                /* Inner */
                .brand-inner {
                    position: relative;
                    z-index: 2;
                    max-width: 1300px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 56px;
                }

                /* Text */
                .brand-text {
                    text-align: center;
                    max-width: 720px;
                }
                .brand-badge {
                    display: inline-block;
                    background: rgba(245,124,21,0.10);
                    color: #f57c15;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    padding: 6px 16px;
                    border-radius: 20px;
                    border: 1px solid rgba(245,124,21,0.22);
                    margin-bottom: 18px;
                }
                .brand-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(1.9rem, 3.2vw, 3.4rem);
                    font-weight: 900;
                    color: #111;
                    line-height: 1.2;
                    margin-bottom: 14px;
                }
                .hl { color: #f57c15; }

                .brand-divider {
                    width: 52px; height: 4px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 4px;
                    margin: 0 auto 18px;
                }
                .brand-desc {
                    font-size: 1rem;
                    color: #666;
                    line-height: 1.85;
                    max-width: 600px;
                    margin: 0 auto 32px;
                }

                /* Stats */
                .brand-stats {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 32px;
                    flex-wrap: wrap;
                }
                .stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }
                .stat-num {
                    font-size: 28px;
                    font-weight: 800;
                    color: #f57c15;
                    font-family: Raleway, Arial, sans-serif;
                    line-height: 1;
                }
                .stat-label {
                    font-size: 12px;
                    color: #888;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }
                .stat-divider {
                    width: 1px;
                    height: 40px;
                    background: rgba(0,0,0,0.12);
                    flex-shrink: 0;
                }

                /* Logos */
                .brand-logos-wrap {
                    width: 100%;
                    text-align: center;
                }
                .brand-logos-label {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: rgba(0,0,0,0.35);
                    margin-bottom: 20px;
                }
                .brand-logos {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 16px;
                }
                .brand-logo-card {
                    background: rgba(0,0,0,0.04);
                    border: 1px solid rgba(0,0,0,0.10);
                    border-radius: 12px;
                    padding: 18px 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.25s, border-color 0.25s, transform 0.25s;
                    min-width: 140px;
                }
                .brand-logo-card:hover {
                    background: rgba(245,124,21,0.08);
                    border-color: rgba(245,124,21,0.28);
                    transform: translateY(-4px);
                }

                @media (max-width: 820px) {
                    .brand-section { padding: 60px 24px; }
                    .brand-logo-card { padding: 14px 24px; min-width: 110px; }
                    .stat-divider { display: none; }
                }
            `}</style>
        </section>
    );
};

export default BrandSection;