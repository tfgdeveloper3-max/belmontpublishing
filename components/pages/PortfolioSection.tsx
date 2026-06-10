"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface BookCover {
    src: string;
    alt: string;
}

const books: BookCover[] = [
    { src: "/images/Portfolio/1.webp", alt: "Beyond The Snake" },
    { src: "/images/Portfolio/2.webp", alt: "Escape From The Black Hole" },
    { src: "/images/Portfolio/3.webp", alt: "The Tavern Files" },
    { src: "/images/Portfolio/4.webp", alt: "The Theory Of Becoming" },
    { src: "/images/Portfolio/5.webp", alt: "Tailormade By God" },
    { src: "/images/Portfolio/6.webp", alt: "The Bristol Bombers" },
    { src: "/images/Portfolio/7.webp", alt: "Inner Harmony" },
    { src: "/images/Portfolio/8.webp", alt: "Fall From Grace Rise To Faith" },
    { src: "/images/Portfolio/9.webp", alt: "Coaching For Life" },
    { src: "/images/Portfolio/10.webp", alt: "Gravity" },
    { src: "/images/Portfolio/11.webp", alt: "Ted The Grocer" },
    { src: "/images/Portfolio/12.webp", alt: "Milford Mouse Private Ear" },
];

// Triple for seamless loop
const track = [...books, ...books, ...books];

const PortfolioSection: React.FC = () => {
    const [selected, setSelected] = useState<BookCover | null>(null);
    const [visible, setVisible] = useState(false);

    /* Open modal */
    const openModal = (book: BookCover) => {
        setSelected(book);
        // tiny delay so CSS transition fires properly
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    };

    /* Close modal */
    const closeModal = () => {
        setVisible(false);
        // wait for fade-out then unmount
        setTimeout(() => setSelected(null), 280);
    };

    /* Close on Escape key */
    useEffect(() => {
        if (!selected) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);

    /* Lock body scroll when modal is open */
    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [selected]);

    return (
        <section className="port-section">
            <h2 className="port-heading">A Showcase Of Published Success Stories</h2>

            {/* ── Marquee track ── */}
            <div className="port-mask">
                <div className="port-track">
                    {track.map((book, i) => (
                        <div
                            key={`${book.alt}-${i}`}
                            className="port-item"
                            onClick={() => openModal(book)}
                            title={book.alt}
                        >
                            <Image
                                src={book.src}
                                alt={book.alt}
                                width={200}
                                height={280}
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Modal ── */}
            {selected && (
                <div
                    className={`modal-backdrop${visible ? " is-open" : ""}`}
                    onClick={closeModal}
                >
                    <div
                        className={`modal-box${visible ? " is-open" : ""}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={closeModal} aria-label="Close">✕</button>
                        <Image
                            src={selected.src}
                            alt={selected.alt}
                            width={400}
                            height={560}
                            priority
                            style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
                        />
                        <p className="modal-title">{selected.alt}</p>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes port-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
            `}</style>

            <style jsx>{`
                .port-section {
                    background: #fff;
                    font-family: Raleway, Arial, sans-serif;
                    padding: 70px 0;
                    position: relative;
                    overflow: hidden;
                }

                .port-heading {
                    text-align: center;
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(2.5rem, 2.5vw, 5.2rem);
                    font-weight: 900;
                    color: #111;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 40px;
                    padding: 0 20px;
                }

                /* Fade edges */
                .port-mask {
                    overflow: hidden;
                    width: 100%;
                    mask-image: linear-gradient(
                        90deg, transparent 0%, black 6%, black 94%, transparent 100%
                    );
                    -webkit-mask-image: linear-gradient(
                        90deg, transparent 0%, black 6%, black 94%, transparent 100%
                    );
                }

                .port-track {
                    display: flex;
                    gap: 12px;
                    width: max-content;
                    animation: port-marquee 40s linear infinite;
                    padding: 16px 0 20px;
                }

                /* Pause on hover */
                .port-track:hover {
                    animation-play-state: paused;
                }

                .port-item {
                    width: 200px;
                    flex-shrink: 0;
                    aspect-ratio: 2 / 3;
                    border-radius: 8px;
                    overflow: hidden;
                    cursor: pointer;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
                    transition: transform 0.22s ease, box-shadow 0.22s ease;
                    transform-origin: center bottom;
                }

                .port-item:hover {
                    transform: translateY(-8px) scale(1.05);
                    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
                }

                /* ── Modal backdrop ── */
                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0);
                    backdrop-filter: blur(0px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                    transition: background 0.28s ease, backdrop-filter 0.28s ease;
                }
                .modal-backdrop.is-open {
                    background: rgba(0, 0, 0, 0.72);
                    backdrop-filter: blur(6px);
                }

                /* ── Modal box ── */
                .modal-box {
                    position: relative;
                    width: 100%;
                    max-width: 340px;
                    opacity: 0;
                    transform: scale(0.88) translateY(16px);
                    transition: opacity 0.28s ease, transform 0.28s ease;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55),
                                0 0 0 1px rgba(245, 124, 21, 0.25);
                }
                .modal-box.is-open {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }

                .modal-close {
                    position: absolute;
                    top: 10px; right: 10px;
                    width: 32px; height: 32px;
                    border-radius: 50%;
                    background: rgba(0, 0, 0, 0.65);
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    font-size: 13px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                    transition: background 0.2s;
                    font-family: Raleway, Arial, sans-serif;
                }
                .modal-close:hover {
                    background: #f57c15;
                    border-color: transparent;
                }

                .modal-title {
                    background: rgba(0, 0, 0, 0.82);
                    color: #fff;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 10px 16px;
                    margin: 0;
                    letter-spacing: 0.3px;
                }

                @media (max-width: 640px) {
                    .port-item { width: 130px; }
                    .modal-box { max-width: 280px; }
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;