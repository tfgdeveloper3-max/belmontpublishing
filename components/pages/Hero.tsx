"use client";

import Image from "next/image";
import { useState } from "react";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    description: string;
}

const HeroSection: React.FC = () => {
    const [form, setForm] = useState<FormData>({ fullName: "", email: "", phone: "", description: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <section className="hero">
            <div className="hero-bg">
                <Image src="/images/hero.png" alt="Book covers background" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
                <div className="hero-overlay" />
            </div>

            <div className="hero-inner">
                <div className="hero-left">
                    <p className="hero-sub">Book Publishing made simple, streamlined, seamless!</p>

                    <h1 className="hero-h1">
                        Professional Book Publishing Services That Turn Manuscripts into Legacies
                    </h1>

                    <p className="hero-desc">
                        Books have the power to outlive their authors, and preserve ideas for years to come. That's why Belmont approaches every project with a commitment to quality, precision, and long-term impact. Through expert publishing services and global distribution networks, we transform manuscripts into professionally published works ready to be discovered by readers everywhere.
                    </p>

                    <div className="hero-btns">
                        <button className="btn-dark">Get Started</button>
                        <button className="btn-orange">Live Chat</button>
                        <button className="btn-phone">(646) 298 6438</button>
                    </div>

                    <div className="hero-trust">
                        <div className="trust-badge"><span className="trust-star">★</span><span>REVIEWS.io</span></div>
                        <div className="trust-badge"><span className="trust-bark">&#60;bark</span></div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-form">
                        <p className="form-title">UP TO <span>35%</span> DISCOUNT</p>
                        <input className="form-input" type="text" name="fullName" placeholder="Full Name *" value={form.fullName} onChange={handleChange} />
                        <input className="form-input" type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} />
                        <input className="form-input" type="tel" name="phone" placeholder="Phone No. *" value={form.phone} onChange={handleChange} />
                        <textarea className="form-textarea" name="description" placeholder="Enter a brief description about your book" value={form.description} onChange={handleChange} rows={4} />
                        <button className="form-btn" onClick={handleSubmit}>Activate Now</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero { position: relative; min-height: 680px; display: flex; align-items: stretch; font-family: Raleway, Arial, sans-serif; }
                .hero-bg { position: absolute; inset: 0; z-index: 0; }
                .hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.72); z-index: 1; }
                .hero-inner { position: relative; z-index: 2; display: flex; align-items: center; gap: 50px; padding: 70px 50px; max-width: 1400px; margin: 0 auto; width: 100%; }
                .hero-left { flex: 1; min-width: 0; }
                .hero-sub { font-size: 13px; color: rgba(255,255,255,0.75); margin-bottom: 16px; }

                /* ── Bold condensed heading like Lounge Lizard ── */
                .hero-h1 {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(2.5rem, 2.5vw, 5.2rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.2;
                    margin-bottom: 24px;
                    text-transform: uppercase;
                    letter-spacing: -1px;
                    word-break: keep-all;
                    overflow-wrap: normal;
                }

                .hero-desc { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 32px; max-width: 560px; }
                .hero-btns { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 22px; }
                .btn-dark { background: #111; color: #fff; border: 1px solid rgba(255,255,255,0.15); padding: 13px 26px; border-radius: 4px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: Raleway, Arial, sans-serif; transition: background 0.2s; }
                .btn-dark:hover { background: #222; }
                .btn-orange { background: #f57c15; color: #fff; border: none; padding: 13px 26px; border-radius: 4px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: Raleway, Arial, sans-serif; transition: background 0.2s; }
                .btn-orange:hover { background: #d96a0a; }
                .btn-phone { background: #111; color: #fff; border: 1px solid rgba(255,255,255,0.15); padding: 13px 26px; border-radius: 4px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: Raleway, Arial, sans-serif; transition: background 0.2s; }
                .btn-phone:hover { background: #222; }
                .hero-trust { display: flex; gap: 10px; flex-wrap: wrap; }
                .trust-badge { background: #fff; border-radius: 6px; padding: 10px 18px; display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #222; }
                .trust-star { color: #f5a623; font-size: 15px; }
                .trust-bark { font-size: 15px; font-weight: 900; }
                .hero-right { width: 360px; flex-shrink: 0; }
                .hero-form { background: #fff; border-radius: 8px; padding: 30px 26px; display: flex; flex-direction: column; gap: 14px; }
                .form-title { text-align: center; font-size: 16px; font-weight: 800; color: #111; letter-spacing: 0.5px; margin-bottom: 4px; }
                .form-title span { color: #f57c15; }
                .form-input { width: 100%; border: 1px solid #ddd; border-radius: 4px; padding: 12px 14px; font-size: 13px; color: #333; font-family: Raleway, Arial, sans-serif; outline: none; transition: border-color 0.2s; background: #fff; }
                .form-input:focus { border-color: #f57c15; }
                .form-textarea { width: 100%; border: 1px solid #ddd; border-radius: 4px; padding: 12px 14px; font-size: 13px; color: #333; font-family: Raleway, Arial, sans-serif; outline: none; resize: vertical; transition: border-color 0.2s; background: #fff; }
                .form-textarea:focus { border-color: #f57c15; }
                .form-btn { width: 100%; background: #f57c15; color: #fff; border: none; border-radius: 4px; padding: 14px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: Raleway, Arial, sans-serif; transition: background 0.2s; margin-top: 4px; }
                .form-btn:hover { background: #d96a0a; }
                @media (max-width: 820px) {
                    .hero-inner { flex-direction: column; padding: 50px 24px; gap: 36px; }
                    .hero-right { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;