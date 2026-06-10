"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface BookCover {
    src: string;
    alt: string;
}

const books: BookCover[] = [
    { src: "/images/Portfolio/01.jpg", alt: "The Story Of Yasu" },
    { src: "/images/Portfolio/02.jpg", alt: "A Collections Of Poems Reflections" },
    { src: "/images/Portfolio/03.jpg", alt: "Can God Trust You" },
    { src: "/images/Portfolio/04.jpg", alt: "Awesome Answer to Prayers" },
    { src: "/images/Portfolio/05.jpg", alt: "Quete Puedo Decir Memori" },
    { src: "/images/Portfolio/06.jpg", alt: "Biopsy Decoded" },
    { src: "/images/Portfolio/07.jpg", alt: "Green Pastures" },
    { src: "/images/Portfolio/08.jpg", alt: "Falling in Love" },
    { src: "/images/Portfolio/09.jpg", alt: "Playing His Game" },
    { src: "/images/Portfolio/10.jpg", alt: "The Manifestos" },
    { src: "/images/Portfolio/11.jpg", alt: "Inspired" },
    { src: "/images/Portfolio/12.jpg", alt: "Tactics And Strategy" },
];

const track = [...books, ...books, ...books];

const PortfolioSection: React.FC = () => {
    const [selected, setSelected] = useState<BookCover | null>(null);
    const [visible, setVisible] = useState(false);

    const openModal = (book: BookCover) => {
        setSelected(book);
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    };

    const closeModal = () => {
        setVisible(false);
        setTimeout(() => setSelected(null), 280);
    };

    useEffect(() => {
        if (!selected) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);

    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [selected]);

    return (
        <section className="port-section">

            <div className="port-blob port-blob-l" />
            <div className="port-blob port-blob-r" />

            {/* Header */}
            <div className="port-header">
                <span className="port-badge">Our Portfolio</span>
                <h2 className="port-heading">A Showcase Of Published<br />Success Stories</h2>
                <div className="port-divider" />
                <p className="port-sub">
                    Over 1,000 books published across genres — each one a unique story brought to life.
                </p>
            </div>

            {/* Marquee */}
            <div className="port-mask">
                <div className="port-track">
                    {track.map((book, i) => (
                        <div
                            key={`${book.alt}-${i}`}
                            className="port-item"
                            onClick={() => openModal(book)}
                            title={book.alt}
                        >
                            <div className="port-img-wrap">
                                <Image
                                    src={book.src}
                                    alt={book.alt}
                                    width={432}
                                    height={648}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                />
                                <div className="port-overlay">
                                    <span className="port-view">View</span>
                                </div>
                            </div>
                            <p className="port-label">{book.alt}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
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
                            width={432}
                            height={648}
                            priority
                            style={{ width: "100%", height: "auto", display: "block" }}
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
                    background: #f5f5f0;
                    font-family: Raleway, Arial, sans-serif;
                    padding: 80px 0 90px;
                    position: relative;
                    overflow: hidden;
                }

                .port-blob {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }
                .port-blob-l {
                    top: -80px; left: -80px;
                    width: 380px; height: 380px;
                    background: radial-gradient(circle, rgba(245,124,21,0.10) 0%, transparent 70%);
                }
                .port-blob-r {
                    bottom: -60px; right: -60px;
                    width: 320px; height: 320px;
                    background: radial-gradient(circle, rgba(245,124,21,0.08) 0%, transparent 70%);
                }

                /* Header */
                .port-header {
                    text-align: center;
                    margin-bottom: 52px;
                    padding: 0 20px;
                    position: relative;
                    z-index: 1;
                }
                .port-badge {
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
                    margin-bottom: 16px;
                }
                .port-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(1.9rem, 3.2vw, 3.2rem);
                    font-weight: 900;
                    color: #111;
                    line-height: 1.2;
                    margin-bottom: 14px;
                }
                .port-divider {
                    width: 52px; height: 4px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 4px;
                    margin: 0 auto 16px;
                }
                .port-sub {
                    font-size: 1rem;
                    color: #666;
                    line-height: 1.7;
                    max-width: 480px;
                    margin: 0 auto;
                }

                /* Mask */
                .port-mask {
                    overflow: hidden;
                    width: 100%;
                    padding: 24px 0 36px;
                    mask-image: linear-gradient(
                        90deg, transparent 0%, black 5%, black 95%, transparent 100%
                    );
                    -webkit-mask-image: linear-gradient(
                        90deg, transparent 0%, black 5%, black 95%, transparent 100%
                    );
                }

                .port-track {
                    display: flex;
                    gap: 18px;
                    width: max-content;
                    animation: port-marquee 50s linear infinite;
                    align-items: flex-end;
                }
                .port-track:hover {
                    animation-play-state: paused;
                }

                /* Item — no overflow so lift is visible */
                .port-item {
                    width: 216px;
                    flex-shrink: 0;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);
                    transform-origin: center bottom;
                }
                .port-item:hover {
                    transform: translateY(-14px) scale(1.04);
                }

                /* Image wrapper — exact 432:648 ratio */
                .port-img-wrap {
                    width: 216px;
                    height: 324px;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 6px 24px rgba(0,0,0,0.13);
                    transition: box-shadow 0.55s cubic-bezier(0.23, 1, 0.32, 1);
                    flex-shrink: 0;
                }
                .port-item:hover .port-img-wrap {
                    box-shadow: 0 20px 50px rgba(0,0,0,0.22),
                                0 0 0 2px rgba(245,124,21,0.35);
                }

                /* Hover overlay */
                .port-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(245,124,21,0.72);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .port-item:hover .port-overlay {
                    opacity: 1;
                }
                .port-view {
                    color: #fff;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    border: 2px solid rgba(255,255,255,0.8);
                    padding: 8px 22px;
                    border-radius: 6px;
                }

                /* Book title */
                .port-label {
                    font-size: 12px;
                    font-weight: 600;
                    color: #555;
                    text-align: center;
                    line-height: 1.4;
                    width: 216px;
                    opacity: 0;
                    transform: translateY(4px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                    margin: 0;
                }
                .port-item:hover .port-label {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Modal backdrop */
                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0);
                    backdrop-filter: blur(0px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                    transition: background 0.28s ease, backdrop-filter 0.28s ease;
                }
                .modal-backdrop.is-open {
                    background: rgba(0,0,0,0.75);
                    backdrop-filter: blur(8px);
                }

                /* Modal box */
                .modal-box {
                    position: relative;
                    width: 100%;
                    max-width: 380px;
                    opacity: 0;
                    transform: scale(0.88) translateY(20px);
                    transition: opacity 0.32s ease, transform 0.32s ease;
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow: 0 28px 80px rgba(0,0,0,0.55),
                                0 0 0 1px rgba(245,124,21,0.28);
                }
                .modal-box.is-open {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }

                .modal-close {
                    position: absolute;
                    top: 10px; right: 10px;
                    width: 34px; height: 34px;
                    border-radius: 50%;
                    background: rgba(0,0,0,0.65);
                    color: #fff;
                    border: 1px solid rgba(255,255,255,0.25);
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
                    background: rgba(0,0,0,0.85);
                    color: #fff;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 12px 16px;
                    margin: 0;
                    letter-spacing: 0.3px;
                }

                @media (max-width: 640px) {
                    .port-item { width: 162px; }
                    .port-img-wrap { width: 162px; height: 243px; }
                    .port-label { width: 162px; }
                    .modal-box { max-width: 300px; }
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;