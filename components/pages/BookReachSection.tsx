"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BookReachSection: React.FC = () => {
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
        <section className="reach-section" ref={sectionRef}>
            <div className="reach-grid" />
            <div className="reach-glow reach-glow-tr" />
            <div className="reach-glow reach-glow-bl" />

            <div className="reach-inner">

                {/* ── LEFT: content ── */}
                <div className={`reach-left${visible ? " slide-in-left" : ""}`}>
                    <div className="reach-badge">
                        <span className="badge-dot" />
                        Global Distribution
                    </div>

                    <h2 className="reach-heading">
                        Break Free From Platform Dependency and Expand Your Book's
                        <span className="hl"> Global</span> Reach
                    </h2>

                    <div className="reach-divider" />

                    <p className="reach-para">
                        Publishing your e-book is only the first step. The real challenge begins when your book enters a crowded marketplace where algorithms decide visibility and competition never stops.
                        At Belmont Publishing, we ensure your book is distributed strategically across multiple digital ecosystems, including Amazon Kindle, Apple Books, Kobo, and international syndication networks like IngramSpark.
                    </p>
                    <p className="reach-para">
                        Instead of relying on one platform to carry your success, we build a distribution network around your book, creating multiple entry points for readers, increasing conversion opportunities, and expanding your global footprint.
                        We distribute your e-book across global reading ecosystems to maximize visibility, engagement, and long-term sales potential.
                    </p>

                    <div className="reach-chips">
                        {["Amazon Kindle", "Apple Books", "Kobo", "IngramSpark", "Barnes & Noble"].map((p) => (
                            <div key={p} className="chip">
                                <span className="chip-dot" />
                                {p}
                            </div>
                        ))}
                    </div>

                    <div className="reach-btns">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-orange">Live Chat</button>
                    </div>
                </div>

                {/* ── RIGHT: image + orbit ── */}
                <div className={`reach-right${visible ? " fade-in" : ""}`}>
                    {/* Outer rotating dashed ring */}
                    <div className="ring-rotate ring-outer">
                        <span className="orbit-dot od-1" />
                        <span className="orbit-dot od-2" />
                        <span className="orbit-dot od-3" />
                    </div>

                    {/* Second rotating ring — opposite direction */}
                    <div className="ring-rotate ring-mid">
                        <span className="orbit-dot od-4" />
                        <span className="orbit-dot od-5" />
                    </div>

                    {/* Static glowing rings */}
                    <div className="ring-solid ring-solid-1" />
                    <div className="ring-solid ring-solid-2" />

                    {/* Animated dots background */}
                    <div className="dots-bg" />

                    {/* Platform badges */}
                    <div className="platform-badge badge-kindle">Kindle</div>
                    <div className="platform-badge badge-apple">Apple Books</div>
                    <div className="platform-badge badge-kobo">Kobo</div>
                    <div className="platform-badge badge-ingram">IngramSpark</div>

                    {/* Book image */}
                    <div className="book-wrap">
                        <Image
                            src="/images/book-2.png"
                            alt="Beyond Snake Book"
                            width={620}
                            height={560}
                            style={{
                                width: "100%",
                                height: "auto",
                                position: "relative",
                                zIndex: 1,
                                display: "block",
                            }}
                        />
                    </div>
                </div>

            </div>

            <style jsx>{`
                .reach-section {
                    background: #1a1a1a;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 80px 60px;
                    position: relative;
                    overflow: hidden;
                }

                .reach-grid {
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(245, 124, 21, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245, 124, 21, 0.04) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                    z-index: 0;
                }

                .reach-glow {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }
                .reach-glow-tr {
                    top: -100px; right: -60px;
                    width: 540px; height: 540px;
                    background: radial-gradient(circle, rgba(245, 124, 21, 0.15) 0%, transparent 65%);
                }
                .reach-glow-bl {
                    bottom: -80px; left: -60px;
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(245, 124, 21, 0.08) 0%, transparent 65%);
                }

                /* Layout */
                .reach-inner {
                    position: relative; z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                /* ── RIGHT ── */
                .reach-right {
                    flex: 0 0 52%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 620px;
                    opacity: 0;
                    transform: translateX(80px);
                    transition: opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s;
                }
                .reach-right.fade-in {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Outer rotating ring */
                .ring-rotate {
                    position: absolute;
                    top: 50%; left: 50%;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(245, 124, 21, 0.22);
                }
                .ring-outer {
                    width: 500px; height: 500px;
                    margin-top: -250px; margin-left: -250px;
                    animation: spin 18s linear infinite;
                }
                .ring-mid {
                    width: 390px; height: 390px;
                    margin-top: -195px; margin-left: -195px;
                    animation: spin-reverse 14s linear infinite;
                    border-style: dotted;
                    border-color: rgba(245, 124, 21, 0.15);
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(-360deg); }
                }

                /* Orbit dots */
                .orbit-dot {
                    position: absolute;
                    border-radius: 50%;
                    background: #f57c15;
                    top: 50%; left: 50%;
                }
                .od-1 {
                    width: 10px; height: 10px;
                    box-shadow: 0 0 12px rgba(245, 124, 21, 0.9);
                    transform: translate(-50%, -50%) rotate(0deg) translateX(250px);
                }
                .od-2 {
                    width: 10px; height: 10px;
                    box-shadow: 0 0 12px rgba(245, 124, 21, 0.9);
                    transform: translate(-50%, -50%) rotate(120deg) translateX(250px);
                }
                .od-3 {
                    width: 10px; height: 10px;
                    box-shadow: 0 0 12px rgba(245, 124, 21, 0.9);
                    transform: translate(-50%, -50%) rotate(240deg) translateX(250px);
                }
                .od-4 {
                    width: 7px; height: 7px;
                    background: rgba(245, 124, 21, 0.7);
                    box-shadow: 0 0 8px rgba(245, 124, 21, 0.6);
                    transform: translate(-50%, -50%) rotate(60deg) translateX(195px);
                }
                .od-5 {
                    width: 7px; height: 7px;
                    background: rgba(245, 124, 21, 0.7);
                    box-shadow: 0 0 8px rgba(245, 124, 21, 0.6);
                    transform: translate(-50%, -50%) rotate(200deg) translateX(195px);
                }

                /* Static inner rings */
                .ring-solid {
                    position: absolute;
                    top: 50%; left: 50%;
                    border-radius: 50%;
                    border: 1px solid rgba(245, 124, 21, 0.18);
                }
                .ring-solid-1 {
                    width: 310px; height: 310px;
                    margin-top: -155px; margin-left: -155px;
                    box-shadow: 0 0 80px rgba(245, 124, 21, 0.12),
                                inset 0 0 80px rgba(245, 124, 21, 0.05);
                }
                .ring-solid-2 {
                    width: 200px; height: 200px;
                    margin-top: -100px; margin-left: -100px;
                    border-color: rgba(245, 124, 21, 0.10);
                }

                /* Animated dots */
                .dots-bg {
                    position: absolute;
                    width: 88%; height: 88%;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    background-image: radial-gradient(
                        circle, rgba(245, 124, 21, 0.35) 1.5px, transparent 1.5px
                    );
                    background-size: 22px 22px;
                    border-radius: 50%;
                    mask-image: radial-gradient(
                        ellipse 80% 80% at 50% 50%, black 50%, transparent 100%
                    );
                    -webkit-mask-image: radial-gradient(
                        ellipse 80% 80% at 50% 50%, black 50%, transparent 100%
                    );
                    animation: pulse-dots 3s ease-in-out infinite;
                }
                @keyframes pulse-dots {
                    0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
                    50%       { opacity: 1;    transform: translate(-50%, -50%) scale(1.06); }
                }

                /* Platform badges */
                .platform-badge {
                    position: absolute;
                    background: rgba(26, 26, 26, 0.92);
                    border: 1px solid rgba(245, 124, 21, 0.30);
                    border-radius: 8px;
                    padding: 7px 14px;
                    font-size: 12px;
                    font-weight: 700;
                    color: #f57c15;
                    letter-spacing: 0.4px;
                    white-space: nowrap;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45),
                                0 0 12px rgba(245, 124, 21, 0.10);
                    z-index: 3;
                    backdrop-filter: blur(8px);
                }
                .badge-kindle {
                    top: 4%; left: 50%;
                    animation: badge-float-center 3s ease-in-out infinite;
                    animation-delay: 0s;
                }
                .badge-apple {
                    top: 40%; right: -1%;
                    animation: badge-float 3s ease-in-out infinite;
                    animation-delay: 0.5s;
                }
                .badge-kobo {
                    bottom: 4%; left: 50%;
                    animation: badge-float-center 3s ease-in-out infinite;
                    animation-delay: 1s;
                }
                .badge-ingram {
                    top: 40%; left: -1%;
                    animation: badge-float 3s ease-in-out infinite;
                    animation-delay: 1.5s;
                }

                @keyframes badge-float {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-8px); }
                }
                @keyframes badge-float-center {
                    0%, 100% { transform: translateX(-50%) translateY(0px); }
                    50%       { transform: translateX(-50%) translateY(-8px); }
                }

                /* Book */
                .book-wrap {
                    position: relative; z-index: 2;
                    width: 78%;
                    animation: float-book 3.5s ease-in-out infinite;
                    filter: drop-shadow(0 20px 56px rgba(0, 0, 0, 0.70))
                            drop-shadow(0 0 40px rgba(245, 124, 21, 0.15));
                }
                @keyframes float-book {
                    0%, 100% { transform: translateY(0px)  rotate(-1deg); }
                    50%       { transform: translateY(-16px) rotate(1deg); }
                }

                /* ── LEFT ── */
                .reach-left {
                    flex: 1; min-width: 0;
                    opacity: 0;
                    transform: translateX(-80px);
                    transition: opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s;
                }
                .reach-left.slide-in-left {
                    opacity: 1;
                    transform: translateX(0);
                }

                .reach-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(245, 124, 21, 0.10);
                    border: 1px solid rgba(245, 124, 21, 0.22);
                    color: #f57c15;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    padding: 5px 14px;
                    border-radius: 20px;
                    margin-bottom: 18px;
                }
                .badge-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #f57c15;
                    flex-shrink: 0;
                    animation: blink 1.5s ease-in-out infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.2; }
                }

                .reach-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(1.6rem, 2.2vw, 3rem);
                    font-weight: 700;
                    color: #fff;
                    line-height: 1.25;
                    margin-bottom: 18px;
                }
                .hl { color: #f57c15; }

                .reach-divider {
                    width: 48px; height: 3px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 3px;
                    margin-bottom: 20px;
                }

                .reach-para {
                    font-size: 0.95rem;
                    color: rgba(255, 255, 255, 0.52);
                    line-height: 1.88;
                    margin-bottom: 16px;
                }

                .reach-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin: 20px 0 28px;
                }
                .chip {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(245, 124, 21, 0.08);
                    border: 1px solid rgba(245, 124, 21, 0.18);
                    color: rgba(255, 255, 255, 0.72);
                    font-size: 12px;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 20px;
                    transition: background 0.2s, border-color 0.2s;
                }
                .chip:hover {
                    background: rgba(245, 124, 21, 0.15);
                    border-color: rgba(245, 124, 21, 0.35);
                }
                .chip-dot {
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #f57c15;
                    flex-shrink: 0;
                }

                .reach-btns {
                    display: flex; align-items: center;
                    gap: 14px; flex-wrap: wrap;
                }
                .btn-dark {
                    background: rgba(255, 255, 255, 0.08);
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    padding: 13px 32px; border-radius: 6px;
                    font-size: 14px; font-weight: 700; cursor: pointer;
                    font-family: Raleway, Arial, sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    backdrop-filter: blur(8px);
                }
                .btn-dark:hover { background: rgba(255, 255, 255, 0.14); }
                .btn-orange {
                    background: #f57c15; color: #fff; border: none;
                    padding: 13px 32px; border-radius: 6px;
                    font-size: 14px; font-weight: 700; cursor: pointer;
                    font-family: Raleway, Arial, sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    box-shadow: 0 4px 22px rgba(245, 124, 21, 0.40);
                }
                .btn-orange:hover {
                    background: #d96a0a;
                    box-shadow: 0 6px 30px rgba(245, 124, 21, 0.58);
                }

                @media (max-width: 900px) {
                    .reach-right { flex: 0 0 48%; min-height: 520px; }
                    .ring-outer { width: 420px; height: 420px; margin-top: -210px; margin-left: -210px; }
                    .ring-mid   { width: 320px; height: 320px; margin-top: -160px; margin-left: -160px; }
                }

                @media (max-width: 820px) {
                    .reach-section { padding: 50px 24px; }
                    .reach-inner { flex-direction: column; gap: 40px; }
                    .reach-right { width: 100%; flex: unset; min-height: 480px; }
                    .platform-badge { display: none; }
                }
            `}</style>
        </section>
    );
};

export default BookReachSection;