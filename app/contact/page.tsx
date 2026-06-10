"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const services = [
    "Book Writing",
    "Ghostwriting",
    "Children's Book Writing",
    "Sci-Fi / Fantasy / Fiction Writing",
    "Memoir Writing",
    "Non-Fiction Writing",
    "SEO Content Writing",
    "Script Writing",
    "Horror / Mystery Writing",
    "Book Editing & Proofreading",
    "Ebook Creation",
    "Audiobook Narration",
    "Book Cover Design",
    "Book Formatting",
    "Book Publishing",
    "Book Marketing",
    "Author Website Design",
    "Other / Not Sure Yet",
];

const contactItems = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M20 14.92a1.65 1.65 0 00-1.18-.46 1.65 1.65 0 00-1.18.46l-1.42 1.41a14.13 14.13 0 01-3.5-2.95 14.13 14.13 0 01-2.95-3.5l1.41-1.42A1.65 1.65 0 0011.54 7a1.65 1.65 0 00-.46-1.18L8.7 3.44A1.65 1.65 0 007.52 2.98a1.65 1.65 0 00-1.18.46L5 4.78C3.65 6.13 3.1 8.02 3.74 9.73a23.6 23.6 0 005.4 8.13 23.6 23.6 0 008.13 5.4c1.71.64 3.6.09 4.95-1.26l1.34-1.34A1.65 1.65 0 0024 19.48a1.65 1.65 0 00-.46-1.18L20 14.92z" fill="currentColor" opacity=".8" />
            </svg>
        ),
        label: "Phone",
        value: "(279) 777-0381",
        sub: "Mon – Fri, 9am – 6pm EST",
        href: "tel:2797770381",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" opacity=".8" />
            </svg>
        ),
        label: "Email",
        value: "info@belmontpublishing.com",
        sub: "We reply within 24 hours",
        href: "mailto:info@belmontpublishing.com",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" opacity=".8" />
            </svg>
        ),
        label: "Office",
        value: "901 H St Ste 120",
        sub: "Sacramento, CA 95814",
        href: "https://maps.google.com/?q=901+H+St+Ste+120+Sacramento+CA+95814",
    },
];

const faqs = [
    { q: "Is My Manuscript Kept Confidential?", a: "Without question. We treat every manuscript, concept, and conversation with the utmost professionalism and discretion. Your intellectual property remains yours at every stage of the process." },
    { q: "What Happens During the Consultation?", a: "Think of it as a strategic conversation about your book's future. We'll discuss your manuscript, publishing goals, timeline, and vision while answering your questions and outlining the opportunities available to help bring your work to life." },
    { q: "Can You Help Me Reach More Readers After Publication?", a: "Yes. Beyond publication, we offer a range of marketing, branding, and promotional solutions designed to help increase visibility, strengthen your author presence, and connect your book with its intended audience." },
    { q: "How Do I Know Which Publishing Services I Need?", a: "That's precisely what we're here for. During your consultation, we'll take the time to understand your manuscript, objectives, and publishing ambitions before recommending solutions tailored specifically to your project." },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "", service: "", budget: "", message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <Navbar />
            <main className="ct-page">

                {/* ══ HERO ══ */}
                <section className="ct-hero">
                    <div className="ct-hero-bg" />
                    <div className="ct-hero-inner">
                        <div className="ct-hero-label">
                            <span className="ct-eyebrow">Contact us Now</span>
                        </div>
                        <h1 className="ct-hero-title">
                            One Conversation Could Change Your<br />
                            <em className="ct-hero-em">Publishing Future</em>
                        </h1>
                        <p className="ct-hero-sub">
                            Ready to see your ideas on worldwide shelves? You deserve a pathway to readers and you've
                            carried this story long enough. Now let it travel beyond your desk, beyond your screen, and into
                            the hands of readers who are waiting to discover it. Start the conversation today and get:
                        </p>
                        <div className="ct-hero-trust">
                            <span className="ct-trust-item">✓ Detailed Editorial Report & Guidance</span>
                            <span className="ct-trust-item">✓ Dedicated 24-hour Project Handling</span>
                            <span className="ct-trust-item">✓ Marketing & Distribution Support</span>
                        </div>
                    </div>
                    <div className="ct-deco-line ct-dl-1" />
                    <div className="ct-deco-line ct-dl-2" />
                </section>

                {/* ══ MAIN CONTENT ══ */}
                <section className="ct-main">
                    <div className="ct-main-inner">

                        {/* ── Left: Contact Info ── */}
                        <div className="ct-left">
                            <div className="ct-info-block">
                                <h2 className="ct-info-title">Speak With Our<br /><span className="ct-hl">Publishing Strategists</span></h2>
                                <p className="ct-info-sub">
                                    Connect with our team today and discover the professional services. Reach out now and let our
                                    publishing experts help identify the most effective path to publication, visibility, and long-term
                                    success.
                                </p>
                            </div>

                            <div className="ct-contact-items">
                                {contactItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        style={{ textDecoration: "none" }}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                    >
                                        <div className="ct-contact-card">
                                            <div className="ct-cc-icon">{item.icon}</div>
                                            <div className="ct-cc-body">
                                                <span className="ct-cc-label">{item.label}</span>
                                                <span className="ct-cc-value">{item.value}</span>
                                                <span className="ct-cc-sub">{item.sub}</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Office hours */}
                            <div className="ct-hours-card">
                                <h3 className="ct-hours-title">Office Hours</h3>
                                <div className="ct-hours-grid">
                                    <span className="ct-hours-day">Monday – Friday</span>
                                    <span className="ct-hours-time">9:00 AM – 6:00 PM EST</span>
                                    <span className="ct-hours-day">Saturday</span>
                                    <span className="ct-hours-time">10:00 AM – 2:00 PM EST</span>
                                    <span className="ct-hours-day">Sunday</span>
                                    <span className="ct-hours-time">Closed</span>
                                </div>
                                <div className="ct-hours-note">
                                    <span className="ct-hn-dot" />
                                    Emergency consultations available 7 days via email.
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Form ── */}
                        <div className="ct-right">
                            <div className="ct-form-card">
                                {!submitted ? (
                                    <>
                                        <div className="ct-form-head">
                                            <h3 className="ct-form-title">Get Free Consultation with Our Publishing Strategist Now!</h3>
                                            <p className="ct-form-sub">Fill in your details and we will be in touch within 24 hours.</p>
                                        </div>

                                        <div className="ct-form">
                                            <div className="ct-field-row">
                                                <div className="ct-field">
                                                    <label className="ct-label">First Name <span className="ct-req">*</span></label>
                                                    <input
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        placeholder="First Name"
                                                        className="ct-input"
                                                    />
                                                </div>
                                                <div className="ct-field">
                                                    <label className="ct-label">Last Name <span className="ct-req">*</span></label>
                                                    <input
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        placeholder="Last Name"
                                                        className="ct-input"
                                                    />
                                                </div>
                                            </div>

                                            <div className="ct-field-row">
                                                <div className="ct-field">
                                                    <label className="ct-label">Email Address <span className="ct-req">*</span></label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="email@example.com"
                                                        className="ct-input"
                                                    />
                                                </div>
                                                <div className="ct-field">
                                                    <label className="ct-label">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+1 (000) 000-0000"
                                                        className="ct-input"
                                                    />
                                                </div>
                                            </div>

                                            <div className="ct-field">
                                                <label className="ct-label">Service Interested In <span className="ct-req">*</span></label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="ct-select"
                                                >
                                                    <option value="">Select a service...</option>
                                                    {services.map(s => (
                                                        <option key={s} value={s}>{s}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="ct-field">
                                                <label className="ct-label">Estimated Budget</label>
                                                <select
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    className="ct-select"
                                                >
                                                    <option value="">Select a range...</option>
                                                    <option>Under $1,000</option>
                                                    <option>$1,000 – $3,000</option>
                                                    <option>$3,000 – $7,500</option>
                                                    <option>$7,500 – $15,000</option>
                                                    <option>$15,000+</option>
                                                    <option>Not sure yet</option>
                                                </select>
                                            </div>

                                            <div className="ct-field">
                                                <label className="ct-label">Tell Us About Your Project <span className="ct-req">*</span></label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Describe your book idea, current stage, goals, and anything else that would help us understand your project..."
                                                    className="ct-textarea"
                                                    rows={5}
                                                />
                                            </div>

                                            <button className="ct-submit-btn" onClick={handleSubmit}>
                                                Send My Request
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>

                                            <p className="ct-form-note">
                                                By submitting this form you agree to our Privacy Policy.
                                                Your information is never shared with third parties.
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="ct-success">
                                        <div className="ct-success-icon">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="16" r="15" stroke="#f57c15" strokeWidth="2" />
                                                <path d="M9 16l5 5 9-9" stroke="#f57c15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <h3 className="ct-success-title">Message Sent!</h3>
                                        <p className="ct-success-sub">
                                            Thank you for reaching out. One of our publishing specialists
                                            will contact you within 24 hours to schedule your free consultation.
                                        </p>
                                        <button className="ct-success-btn" onClick={() => setSubmitted(false)}>
                                            Send Another Message
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </section>

                {/* ══ FAQ STRIP ══ */}
                <section className="ct-faq">
                    <div className="ct-faq-inner">
                        <div className="ct-faq-head">
                            <span className="ct-eyebrow">Before We Begin</span>
                            <h2 className="ct-faq-title">Few Questions You May <span className="ct-hl">Want to Know</span></h2>
                        </div>
                        <div className="ct-faq-grid">
                            {faqs.map((item, i) => (
                                <div key={i} className="ct-faq-card">
                                    <span className="ct-faq-num">0{i + 1}</span>
                                    <h3 className="ct-faq-q">{item.q}</h3>
                                    <p className="ct-faq-a">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══ BOTTOM CTA STRIP ══ */}
                <section className="ct-bottom">
                    <div className="ct-bottom-inner">
                        <div className="ct-bottom-text">
                            <h2 className="ct-bottom-title">Can We Ask You Something?</h2>
                            <p className="ct-bottom-sub">If not now, when? Not knowing where to start? Call us today, and get your answer!</p>
                        </div>
                        <a href="tel:2797770381" style={{ textDecoration: "none" }}>
                            <button className="ct-call-btn">
                                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                                    <path d="M20 14.92a1.65 1.65 0 00-1.18-.46 1.65 1.65 0 00-1.18.46l-1.42 1.41a14.13 14.13 0 01-3.5-2.95 14.13 14.13 0 01-2.95-3.5l1.41-1.42A1.65 1.65 0 0011.54 7a1.65 1.65 0 00-.46-1.18L8.7 3.44A1.65 1.65 0 007.52 2.98a1.65 1.65 0 00-1.18.46L5 4.78C3.65 6.13 3.1 8.02 3.74 9.73a23.6 23.6 0 005.4 8.13 23.6 23.6 0 008.13 5.4c1.71.64 3.6.09 4.95-1.26l1.34-1.34A1.65 1.65 0 0024 19.48a1.65 1.65 0 00-.46-1.18L20 14.92z" fill="currentColor" />
                                </svg>
                                (279) 777-0381
                            </button>
                        </a>
                    </div>
                </section>

                <style jsx>{`
                .ct-page { font-family:'Raleway',sans-serif; color:#111; background:#fff; }
                .ct-eyebrow { display:inline-block; font-size:10.5px; font-weight:800; letter-spacing:3px; text-transform:uppercase; color:#f57c15; margin-bottom:14px; }
                .ct-hl { color:#f57c15; }

                .ct-hero { background:#060606; padding:90px 24px 80px; position:relative; overflow:hidden; text-align:center; }
                .ct-hero-bg { position:absolute; inset:0; background:radial-gradient(ellipse 70% 60% at 50% 40%, rgba(245,124,21,0.07) 0%, transparent 65%); pointer-events:none; }
                .ct-hero-inner { max-width:700px; margin:0 auto; position:relative; z-index:2; }
                .ct-hero-title { font-family:Raleway, Arial, sans-serif; font-size:clamp(2.5rem,4vw,5rem); color:#fff; line-height:0.95; text-transform:uppercase; letter-spacing:-1.5px; margin:0 0 24px 0; }
                .ct-hero-em { color:#f57c15; }
                .ct-hero-sub { font-size:1rem; color:rgba(255,255,255,0.42); line-height:1.7; max-width:500px; margin:0 auto 32px; }
                .ct-hero-trust { display:flex; justify-content:center; flex-wrap:wrap; gap:20px; }
                .ct-trust-item { font-size:11.5px; font-weight:700; color:rgba(255,255,255,0.45); letter-spacing:0.3px; }
                .ct-deco-line { position:absolute; top:0; bottom:0; width:1px; background:linear-gradient(180deg,transparent,rgba(245,124,21,0.15),transparent); }
                .ct-dl-1 { left:8%; }
                .ct-dl-2 { right:8%; }

                .ct-main { background:#f9f8f7; padding:80px 24px 90px; }
                .ct-main-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:420px 1fr; gap:60px; align-items:start; }

                .ct-info-block { margin-bottom:36px; }
                .ct-info-title { font-family:Raleway,sans-serif; font-size:clamp(1.8rem,3vw,2.4rem); color:#111; text-transform:uppercase; line-height:1.1; margin:0 0 16px 0; letter-spacing:-0.3px; }
                .ct-info-sub { font-size:1rem; color:#666; line-height:1.75; margin:0; }

                .ct-contact-items { display:flex; flex-direction:column; gap:10px; margin-bottom:24px; }
                .ct-contact-card { display:flex; align-items:center; gap:18px; background:#fff; border:1px solid rgba(0,0,0,0.07); border-radius:8px; padding:18px 20px; transition:border-color 0.25s,box-shadow 0.25s,transform 0.25s; cursor:pointer; }
                .ct-contact-card:hover { border-color:rgba(245,124,21,0.3); box-shadow:0 6px 20px rgba(245,124,21,0.07); transform:translateX(4px); }
                .ct-cc-icon { width:44px; height:44px; border-radius:8px; background:rgba(245,124,21,0.08); display:flex; align-items:center; justify-content:center; color:#f57c15; flex-shrink:0; }
                .ct-cc-body { display:flex; flex-direction:column; gap:2px; }
                .ct-cc-label { font-size:10px; font-weight:800; letter-spacing:2px; text-transform:uppercase; color:rgba(245,124,21,0.7); }
                .ct-cc-value { font-size:13.5px; font-weight:700; color:#111; }
                .ct-cc-sub { font-size:1rem; color:#999; }

                .ct-hours-card { background:#fff; border:1px solid rgba(0,0,0,0.07); border-radius:8px; padding:24px 20px; }
                .ct-hours-title { font-family:Raleway,sans-serif; font-size:1rem; font-weight:600; color:#111; text-transform:uppercase; margin:0 0 16px 0; letter-spacing:0.5px; }
                .ct-hours-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px 0; margin-bottom:16px; }
                .ct-hours-day { font-size:12.5px; font-weight:700; color:#444; padding:4px 0; }
                .ct-hours-time { font-size:12.5px; color:#666; padding:4px 0; }
                .ct-hours-note { display:flex; align-items:center; gap:8px; font-size:11.5px; color:#999; padding-top:12px; border-top:1px solid rgba(0,0,0,0.05); }
                .ct-hn-dot { width:6px; height:6px; border-radius:50%; background:#22c55e; flex-shrink:0; box-shadow:0 0 6px rgba(34,197,94,0.4); }

                .ct-form-card { background:#fff; border:1px solid rgba(0,0,0,0.07); border-radius:12px; padding:44px 40px; box-shadow:0 4px 24px rgba(0,0,0,0.05); position:relative; overflow:hidden; }
                .ct-form-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,#f57c15,rgba(245,124,21,0.4)); }
                .ct-form-head { margin-bottom:32px; }
                .ct-form-title { font-family:Raleway,sans-serif; font-size:22px; font-weight:600; color:#111; text-transform:uppercase; margin:0 0 8px 0; letter-spacing:0.3px; }
                .ct-form-sub { font-size:1rem; color:#888; margin:0; }

                .ct-field-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; }
                .ct-field { display:flex; flex-direction:column; gap:6px; margin-bottom:16px; }
                .ct-field:last-of-type { margin-bottom:24px; }
                .ct-field-row .ct-field { margin-bottom:0; }
                .ct-label { font-size:11.5px; font-weight:700; color:#444; letter-spacing:0.3px; text-transform:uppercase; }
                .ct-req { color:#f57c15; }
                .ct-input { background:#fafafa; border:1.5px solid rgba(0,0,0,0.1); border-radius:4px; padding:12px 14px; font-family:'Raleway',sans-serif; font-size:1rem; color:#111; outline:none; transition:border-color 0.2s,box-shadow 0.2s; }
                .ct-input:focus { border-color:#f57c15; box-shadow:0 0 0 3px rgba(245,124,21,0.08); }
                .ct-input::placeholder { color:#bbb; }
                .ct-select { background:#fafafa; border:1.5px solid rgba(0,0,0,0.1); border-radius:4px; padding:12px 14px; font-family:'Raleway',sans-serif; font-size:1rem; color:#111; outline:none; cursor:pointer; transition:border-color 0.2s,box-shadow 0.2s; appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 14px center; padding-right:36px; }
                .ct-select:focus { border-color:#f57c15; box-shadow:0 0 0 3px rgba(245,124,21,0.08); }
                .ct-textarea { background:#fafafa; border:1.5px solid rgba(0,0,0,0.1); border-radius:4px; padding:12px 14px; font-family:'Raleway',sans-serif; font-size:1rem; color:#111; outline:none; resize:vertical; min-height:120px; transition:border-color 0.2s,box-shadow 0.2s; }
                .ct-textarea:focus { border-color:#f57c15; box-shadow:0 0 0 3px rgba(245,124,21,0.08); }
                .ct-textarea::placeholder { color:#bbb; }
                .ct-submit-btn { width:100%; display:flex; align-items:center; justify-content:center; gap:10px; background:#f57c15; color:#fff; border:none; padding:15px 28px; border-radius:4px; font-family:'Raleway',sans-serif; font-size:1rem; font-weight:800; letter-spacing:1.2px; text-transform:uppercase; cursor:pointer; transition:background 0.25s,transform 0.2s,box-shadow 0.25s; box-shadow:0 5px 18px rgba(245,124,21,0.28); margin-bottom:16px; }
                .ct-submit-btn:hover { background:#d96c0d; transform:translateY(-2px); box-shadow:0 8px 24px rgba(245,124,21,0.35); }
                .ct-form-note { font-size:11px; color:#bbb; text-align:center; margin:0; line-height:1.6; }

                .ct-success { display:flex; flex-direction:column; align-items:center; text-align:center; padding:40px 20px; gap:16px; }
                .ct-success-icon { width:72px; height:72px; border-radius:50%; background:rgba(245,124,21,0.08); display:flex; align-items:center; justify-content:center; }
                .ct-success-title { font-size:26px; font-weight:600; color:#111; text-transform:uppercase; margin:0; }
                .ct-success-sub { font-size:13.5px; color:#666; line-height:1.7; margin:0; max-width:380px; }
                .ct-success-btn { background:transparent; border:1.5px solid rgba(0,0,0,0.15); padding:10px 22px; border-radius:4px; font-family:'Raleway',sans-serif; font-size:12px; font-weight:700; color:#555; cursor:pointer; transition:border-color 0.2s,color 0.2s; margin-top:8px; }
                .ct-success-btn:hover { border-color:#f57c15; color:#f57c15; }

                .ct-faq { background:#fff; padding:80px 24px; border-top:1px solid rgba(0,0,0,0.05); }
                .ct-faq-inner { max-width:1200px; margin:0 auto; }
                .ct-faq-head { margin-bottom:44px; }
                .ct-faq-title { font-family:Raleway,sans-serif; font-size:clamp(1.9rem,3vw,2.6rem); color:#111; text-transform:uppercase; line-height:1.1; margin:0; letter-spacing:-0.3px; }
                .ct-faq-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:3px; }
                .ct-faq-card { background:#f9f8f7; border:1px solid rgba(0,0,0,0.05); border-radius:8px; padding:28px 24px; transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s; }
                .ct-faq-card:hover { border-color:rgba(245,124,21,0.2); box-shadow:0 8px 24px rgba(245,124,21,0.06); transform:translateY(-2px); }
                .ct-faq-num { display:block; font-family:Raleway,sans-serif; font-size:32px; font-weight:700; color:rgba(245,124,21,0.12); line-height:1; margin-bottom:-4px; user-select:none; }
                .ct-faq-q { font-family:Raleway,sans-serif; font-size:15px; font-weight:600; color:#111; text-transform:uppercase; margin:0 0 10px 0; line-height:1.3; }
                .ct-faq-a { font-size:1rem; color:#777; line-height:1.65; margin:0; }

                .ct-bottom { background:#060606; padding:50px 24px; }
                .ct-bottom-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; }
                .ct-bottom-title { font-family:Raleway,sans-serif; font-size:22px; font-weight:600; color:#fff; text-transform:uppercase; margin:0 0 6px 0; letter-spacing:0.3px; }
                .ct-bottom-sub { font-size:13px; color:rgba(255,255,255,0.38); margin:0; }
                .ct-call-btn { display:inline-flex; align-items:center; gap:10px; background:#f57c15; color:#fff; border:none; padding:14px 32px; border-radius:4px; font-family:'Raleway',sans-serif; font-size:14px; font-weight:800; letter-spacing:1px; cursor:pointer; transition:background 0.25s,transform 0.2s; box-shadow:0 5px 18px rgba(245,124,21,0.3); white-space:nowrap; }
                .ct-call-btn:hover { background:#d96c0d; transform:translateY(-2px); }

                @media (max-width:1024px) {
                    .ct-main-inner { grid-template-columns:1fr; }
                    .ct-faq-grid { grid-template-columns:repeat(2,1fr); }
                }
                @media (max-width:640px) {
                    .ct-form-card { padding:28px 20px; }
                    .ct-field-row { grid-template-columns:1fr; }
                    .ct-faq-grid { grid-template-columns:1fr; }
                    .ct-bottom-inner { flex-direction:column; text-align:center; }
                    .ct-deco-line { display:none; }
                }
                `}</style>
            </main >
            <FooterSection />
        </>
    );
}