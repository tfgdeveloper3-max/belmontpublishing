"use client";

import Image from "next/image";
import { useState } from "react";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    description: string;
}

const ContactFormSection: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        description: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <section className="contact-section">
            <div className="contact-bg">
                <Image
                    src="/images/contact-image.png"
                    alt="Contact Background"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "left center" }}
                />
                <div className="contact-overlay" />
            </div>

            <div className="contact-inner">
                <div className="contact-left" />

                <div className="contact-right">
                    <h2 className="contact-heading">
                        Tell Us About Your Book. We'll Tell You
                        {" "}
                        <span className="contact-highlight">What's Possible!</span>
                    </h2>
                    <p className="contact-sub">
                        Fill out the form below and receive a free consultation with a publishing specialist who can help you navigate the next steps with confidence, clarity, and expert guidance.
                    </p>

                    <div className="contact-form">
                        <input
                            className="form-input"
                            type="text"
                            name="fullName"
                            placeholder="Full Name *"
                            value={form.fullName}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="tel"
                            name="phone"
                            placeholder="Phone No. *"
                            value={form.phone}
                            onChange={handleChange}
                        />
                        <textarea
                            className="form-textarea"
                            name="description"
                            placeholder="Enter a brief description about your book"
                            value={form.description}
                            onChange={handleChange}
                            rows={4}
                        />
                        <button className="form-btn" onClick={handleSubmit}>
                            Submit Now
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-section {
                    position: relative;
                    min-height: 480px;
                    display: flex;
                    align-items: center;
                    font-family: "Nunito Sans", sans-serif;
                    overflow: hidden;
                }
                .contact-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .contact-overlay {
                    position: absolute;
                    inset: 0;
                 
                    z-index: 1;
                }
                .contact-inner {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 60px 50px;
                    gap: 40px;
                }
                .contact-left {
                    flex: 1;
                }
                .contact-right {
                    width: 480px;
                    flex-shrink: 0;
                }
                .contact-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(2.5rem, 2.5vw, 5.2rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.3;
                    margin-bottom: 10px;
                }
                .contact-highlight {
                    color: #f57c15;
                }
                .contact-sub {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.7;
                    margin-bottom: 22px;
                }
                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .form-input {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.92);
                    border: none;
                    border-radius: 4px;
                    padding: 13px 16px;
                    font-size: 13.5px;
                    color: #333;
                    font-family: "Nunito Sans", sans-serif;
                    outline: none;
                    transition: background 0.2s;
                }
                .form-input:focus {
                    background: #fff;
                }
                .form-textarea {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.92);
                    border: none;
                    border-radius: 4px;
                    padding: 13px 16px;
                    font-size: 13.5px;
                    color: #333;
                    font-family: "Nunito Sans", sans-serif;
                    outline: none;
                    resize: vertical;
                    transition: background 0.2s;
                }
                .form-textarea:focus {
                    background: #fff;
                }
                .form-btn {
                    width: 100%;
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    padding: 14px;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: "Nunito Sans", sans-serif;
                    transition: background 0.2s;
                    margin-top: 4px;
                }
                .form-btn:hover {
                    background: #d96a0a;
                }
                @media (max-width: 820px) {
                    .contact-inner {
                        flex-direction: column;
                        padding: 50px 24px;
                    }
                    .contact-left {
                        display: none;
                    }
                    .contact-right {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactFormSection;