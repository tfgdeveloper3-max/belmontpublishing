"use client";

// ── No GSAP on hero — pure CSS keyframe animations
// ── This eliminates ALL ghost/stuck opacity:0 states from GSAP context

const stats = [
    { value: "400+", label: "Global Platforms" },
    { value: "5K+", label: "Books Published" },
    { value: "15+", label: "Years of Expertise" },
    { value: "98%", label: "Client Satisfaction" },
];

const ServicesHero: React.FC = () => {
    return (
        <section className="sh-section">

            {/* Decorative vertical accent lines */}
            <div className="sh-line-v sh-lv-left" />
            <div className="sh-line-v sh-lv-right" />

            {/* Background glow */}
            <div className="sh-glow" />

            <div className="sh-inner">

                {/* Eyebrow badge */}
                <div className="sh-eyebrow-wrap sh-anim-1">
                    <span className="sh-dot" />
                    <span className="sh-eyebrow">Our Expertise</span>
                    <span className="sh-dot" />
                </div>

                {/* Title */}
                <h1 className="sh-title">
                    <span className="sh-tl sh-tl-white sh-anim-2">End-To-End</span>
                    <span className="sh-tl sh-tl-orange sh-anim-3">Publishing</span>
                    <span className="sh-tl sh-tl-white sh-anim-4">Excellence</span>
                </h1>

                {/* Subtitle */}
                <p className="sh-sub sh-anim-5">
                    From raw manuscript to global bestseller.<br />
                    We provide the expertise — you provide the story.
                </p>

                {/* CTAs */}
                <div className="sh-btns sh-anim-6">
                    <button className="sh-btn-primary">
                        Get A Free Quote
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="sh-btn-ghost">
                        Talk To An Expert
                    </button>
                </div>

                {/* Divider */}
                <div className="sh-divider sh-anim-7" />

                {/* Stats */}
                <div className="sh-stats sh-anim-8">
                    {stats.map((s) => (
                        <div key={s.label} className="sh-stat">
                            <span className="sh-stat-val">{s.value}</span>
                            <span className="sh-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`

                /* ══════════════════════════════════════════════
                   KEYFRAMES — pure CSS, no JS state required
                ══════════════════════════════════════════════ */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes scaleInX {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }
                @keyframes lineDown {
                    from { transform: scaleY(0); }
                    to   { transform: scaleY(1); }
                }

                /* Shared animation helper — fill-mode: both keeps end state */
                .sh-anim-1 { animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) 0.10s both; }
                .sh-anim-2 { animation: fadeUp 0.65s cubic-bezier(.22,.68,0,1.2) 0.22s both; }
                .sh-anim-3 { animation: fadeUp 0.65s cubic-bezier(.22,.68,0,1.2) 0.32s both; }
                .sh-anim-4 { animation: fadeUp 0.65s cubic-bezier(.22,.68,0,1.2) 0.42s both; }
                .sh-anim-5 { animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) 0.55s both; }
                .sh-anim-6 { animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) 0.65s both; }
                .sh-anim-7 { animation: scaleInX 0.8s cubic-bezier(.4,0,.2,1) 0.75s both; }
                .sh-anim-8 { animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) 0.82s both; }

                /* ══════════════════════════════════════════════
                   SECTION
                ══════════════════════════════════════════════ */
                .sh-section {
                    background: #050505;
                    min-height: 88vh;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    padding: 120px 24px 80px;
                    position: relative;
                    overflow: hidden;
                }

                /* Decorative vertical lines */
                .sh-line-v {
                    position: absolute;
                    top: 0; bottom: 0;
                    width: 1px;
                    background: linear-gradient(180deg, transparent, rgba(245,124,21,0.18), transparent);
                    transform-origin: top center;
                    animation: lineDown 1.2s cubic-bezier(.4,0,.2,1) 0.1s both;
                }
                .sh-lv-left  { left: 10%; }
                .sh-lv-right { right: 10%; }

                /* Glow orb */
                .sh-glow {
                    position: absolute;
                    top: -100px; left: 50%;
                    transform: translateX(-50%);
                    width: 700px; height: 500px;
                    background: radial-gradient(ellipse, rgba(245,124,21,0.09) 0%, transparent 70%);
                    pointer-events: none;
                    animation: fadeIn 1.5s ease 0.2s both;
                }

                /* ══════════════════════════════════════════════
                   CONTENT
                ══════════════════════════════════════════════ */
                .sh-inner {
                    max-width: 820px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                /* Eyebrow badge */
                .sh-eyebrow-wrap {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(245,124,21,0.07);
                    border: 1px solid rgba(245,124,21,0.2);
                    border-radius: 30px;
                    padding: 7px 18px;
                    margin-bottom: 32px;
                }
                .sh-dot {
                    display: inline-block;
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #f57c15;
                    opacity: 0.7;
                    flex-shrink: 0;
                }
                .sh-eyebrow {
                    font-family: 'Raleway', sans-serif;
                    font-size: 10.5px;
                    font-weight: 800;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: #f57c15;
                }

                /* Title */
                .sh-title {
                    display: flex;
                    flex-direction: column;
                    font-family: 'Oswald', sans-serif;
                    font-size: clamp(3.2rem, 8.5vw, 6.8rem);
                    line-height: 0.93;
                    text-transform: uppercase;
                    letter-spacing: -1px;
                    margin: 0 0 28px 0;
                }
                .sh-tl          { display: block; }
                .sh-tl-white    { color: #ffffff; }
                .sh-tl-orange   { color: #f57c15; font-style: italic; letter-spacing: -2px; }

                /* Subtitle */
                .sh-sub {
                    font-family: 'Raleway', sans-serif;
                    font-size: 15px;
                    color: rgba(255,255,255,0.42);
                    line-height: 1.7;
                    max-width: 440px;
                    margin: 0 auto 40px;
                    font-weight: 400;
                }

                /* ══════════════════════════════════════════════
                   BUTTONS — always one line
                ══════════════════════════════════════════════ */
                .sh-btns {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    margin-bottom: 48px;
                }
                .sh-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    padding: 13px 26px;
                    border-radius: 4px;
                    font-family: 'Raleway', sans-serif;
                    font-size: 11.5px;
                    font-weight: 800;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    white-space: nowrap;
                    flex-shrink: 0;
                    transition: background 0.25s, transform 0.2s, box-shadow 0.25s, color 0.25s;
                    box-shadow: 0 6px 22px rgba(245,124,21,0.3);
                }
                .sh-btn-primary:hover {
                    background: #fff;
                    color: #111;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px rgba(245,124,21,0.2);
                }
                .sh-btn-ghost {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    color: rgba(255,255,255,0.65);
                    border: 1px solid rgba(255,255,255,0.14);
                    padding: 13px 26px;
                    border-radius: 4px;
                    font-family: 'Raleway', sans-serif;
                    font-size: 11.5px;
                    font-weight: 800;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    white-space: nowrap;
                    flex-shrink: 0;
                    transition: border-color 0.25s, color 0.25s, background 0.25s;
                }
                .sh-btn-ghost:hover {
                    border-color: rgba(255,255,255,0.4);
                    color: #fff;
                    background: rgba(255,255,255,0.04);
                }

                /* Divider */
                .sh-divider {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
                    margin-bottom: 40px;
                    transform-origin: left center;
                }

                /* Stats */
                .sh-stats {
                    display: flex;
                    justify-content: center;
                    gap: 48px;
                    flex-wrap: wrap;
                }
                .sh-stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }
                .sh-stat-val {
                    font-family: 'Oswald', sans-serif;
                    font-size: 28px;
                    font-weight: 700;
                    color: #f57c15;
                    line-height: 1;
                }
                .sh-stat-label {
                    font-family: 'Raleway', sans-serif;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                }

                /* Responsive */
                @media (max-width: 640px) {
                    .sh-section { padding: 100px 20px 60px; }
                    .sh-stats { gap: 28px; }
                    .sh-stat-val { font-size: 22px; }
                    .sh-line-v { display: none; }
                }
            `}</style>
        </section>
    );
};

export default ServicesHero;