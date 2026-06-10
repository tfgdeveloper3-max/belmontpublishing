import Image from "next/image";
import Link from "next/link";

const publishingServices: string[] = [
    "Self Book Publishing",
    "Amazon Book Publishing",
    "Global Publishing",
    "E-book Publishing",
    "Cookbook Publishing",
    "Science Fiction Publishing",
    "Poetry Publishing",
    "Children's Book Publishing",
];

const writingServices: string[] = [
    "Ghostwriting",
    "Editing & Proofreading",
    "Editorial Services",
    "Book Cover Designing",
    "Illustrations & Graphics",
    "Book Translation",
];

const marketingServices: string[] = [
    "Book Marketing Services",
    "Author Website Development",
    "Book Video Trailer",
    "Audio Book Services",
    "Audiobook Narration",
];

const FooterSection: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-grid" />
            <div className="footer-glow footer-glow-tl" />
            <div className="footer-glow footer-glow-br" />

            {/* ── Main columns ── */}
            <div className="footer-inner">

                {/* Brand + contact */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <Image
                            src="/images/logos/Logo_2.png"
                            alt="Belmont Publishing"
                            width={180}
                            height={54}
                            style={{
                                width: "180px",
                                height: "auto",
                                display: "block",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    <div className="footer-contact">
                        <div className="contact-item">
                            <span className="contact-icon">✉</span>
                            <span>info@authorsbookpublishing.com</span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <span>(646) 298 6438</span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <span>140 Broadway, 46th floor, New York,<br />NY, 10005</span>
                        </div>
                    </div>
                </div>

                {/* Publishing services */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Publishing Services</h4>
                    <ul>
                        {publishingServices.map((s) => (
                            <li key={s}>
                                <span className="footer-arrow">&#9658;</span>
                                <Link href="#">{s}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Writing services */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Writing Services</h4>
                    <ul>
                        {writingServices.map((s) => (
                            <li key={s}>
                                <span className="footer-arrow">&#9658;</span>
                                <Link href="#">{s}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Marketing */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Marketing &amp; Audio</h4>
                    <ul>
                        {marketingServices.map((s) => (
                            <li key={s}>
                                <span className="footer-arrow">&#9658;</span>
                                <Link href="#">{s}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className="footer-bottom">
                <p className="footer-copy">
                    Copyright © Belmont Publishing<br />
                    All Rights Reserved 2026
                </p>

                <div className="footer-social">
                    <Link href="#" className="social-icon" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </Link>
                    <Link href="#" className="social-icon" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                        </svg>
                    </Link>
                    <Link href="#" className="social-icon" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </Link>
                    <Link href="#" className="social-icon" aria-label="X / Twitter">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                </div>

                <div className="footer-links">
                    <Link href="#">Terms &amp; Conditions</Link>
                    <span className="links-divider" />
                    <Link href="#">Privacy &amp; Policy</Link>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    background: #111;
                    font-family: Raleway, Arial, sans-serif;
                    padding: 56px 60px 0;
                    position: relative;
                    overflow: hidden;
                }

                .footer-grid {
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(245,124,21,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245,124,21,0.03) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none; z-index: 0;
                }
                .footer-glow {
                    position: absolute; border-radius: 50%;
                    pointer-events: none; z-index: 0;
                }
                .footer-glow-tl {
                    top: -80px; left: -60px;
                    width: 380px; height: 380px;
                    background: radial-gradient(circle, rgba(245,124,21,0.10) 0%, transparent 65%);
                }
                .footer-glow-br {
                    bottom: -60px; right: -40px;
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(245,124,21,0.07) 0%, transparent 65%);
                }

                /* ── Columns row ── */
                .footer-inner {
                    position: relative; z-index: 2;
                    display: flex;
                    align-items: flex-start;       /* all cols start at top */
                    gap: 40px;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding-bottom: 48px;
                    border-bottom: 1px solid rgba(245,124,21,0.12);
                    flex-wrap: nowrap;             /* keep on one row on desktop */
                }

                /* Brand column — fixed width, no shrink */
                .footer-brand {
                    flex: 0 0 220px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .footer-logo {
                    line-height: 0;               /* removes phantom whitespace below img */
                }

                .footer-contact {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .contact-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 12.5px;
                    color: rgba(255,255,255,0.58);
                    line-height: 1.65;
                }
                .contact-icon {
                    width: 28px; height: 28px;
                    border-radius: 7px; flex-shrink: 0;
                    background: rgba(245,124,21,0.10);
                    border: 1px solid rgba(245,124,21,0.20);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 12px; color: #f57c15;
                    margin-top: 1px;
                }

                /* Service columns — equal flex */
                .footer-col {
                    flex: 1;
                    min-width: 0;
                }
                .footer-col-title {
                    font-size: 13px;
                    font-weight: 700;
                    color: #fff;
                    margin: 0 0 16px;
                    letter-spacing: 0.3px;
                    position: relative;
                    padding-bottom: 10px;
                }
                .footer-col-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0;
                    width: 28px; height: 2px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 2px;
                }
                .footer-col ul {
                    list-style: none;
                    margin: 0; padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .footer-col li {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .footer-arrow {
                    color: #f57c15;
                    font-size: 8px;
                    flex-shrink: 0;
                }
                .footer-col :global(a) {
                    font-size: 12.5px;
                    color: rgba(255,255,255,0.55);
                    text-decoration: none;
                    transition: color 0.2s;
                    letter-spacing: 0.2px;
                    white-space: nowrap;
                }
                .footer-col :global(a:hover) { color: #f57c15; }

                /* ── Bottom bar ── */
                .footer-bottom {
                    position: relative; z-index: 2;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 20px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 14px;
                }
                .footer-copy {
                    font-size: 12px;
                    color: rgba(255,255,255,0.38);
                    line-height: 1.6;
                    margin: 0;
                }
                .footer-social { display: flex; gap: 8px; }
                .footer-social :global(.social-icon) {
                    width: 36px; height: 36px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(245,124,21,0.18);
                    display: flex; align-items: center; justify-content: center;
                    color: rgba(255,255,255,0.60);
                    text-decoration: none;
                    transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s, border-color 0.2s;
                }
                .footer-social :global(.social-icon:hover) {
                    background: #f57c15;
                    color: #fff;
                    border-color: transparent;
                    box-shadow: 0 4px 18px rgba(245,124,21,0.42);
                    transform: translateY(-3px);
                }
                .footer-links {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }
                .footer-links :global(a) {
                    font-size: 12.5px;
                    color: rgba(255,255,255,0.45);
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-links :global(a:hover) { color: #f57c15; }
                .links-divider {
                    width: 1px; height: 14px;
                    background: rgba(255,255,255,0.14);
                    display: inline-block;
                    flex-shrink: 0;
                }

                /* ── Tablet (≤1024px) ── */
                @media (max-width: 1024px) {
                    .footer { padding: 48px 32px 0; }
                    .footer-inner { gap: 28px; }
                    .footer-brand { flex: 0 0 190px; }
                    .footer-col :global(a) { white-space: normal; }
                }

                /* ── Mobile (≤768px) ── */
                @media (max-width: 768px) {
                    .footer { padding: 44px 20px 0; }

                    .footer-inner {
                        flex-wrap: wrap;       /* stack on mobile */
                        gap: 32px;
                    }

                    /* Full width brand on mobile */
                    .footer-brand {
                        flex: 0 0 100%;
                        width: 100%;
                    }

                    /* 2 columns for service lists */
                    .footer-col {
                        flex: 0 0 calc(50% - 16px);
                        min-width: 0;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 16px;
                    }
                }

                /* ── Small mobile (≤480px) ── */
                @media (max-width: 480px) {
                    /* 1 column for service lists */
                    .footer-col {
                        flex: 0 0 100%;
                    }
                    .footer-bottom {
                        align-items: center;
                        text-align: center;
                    }
                    .footer-copy { text-align: center; width: 100%; }
                }
            `}</style>
        </footer>
    );
};

export default FooterSection;