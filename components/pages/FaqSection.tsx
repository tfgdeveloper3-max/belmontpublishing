"use client";

import { useState } from "react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "What book publishing services does Belmont Publishing offer?",
        answer:
            "Belmont Publishing provides comprehensive book publishing services designed to help authors transform their manuscripts into professionally published books. Our services include manuscript editing, book formatting, cover design, ghostwriting, self-publishing assistance, ISBN registration, e-book conversion, global distribution, and book marketing solutions tailored to each author's goals.",
    },
    {
        id: 2,
        question: "Can Belmont Publishing help me publish a book if I'm a first-time author?",
        answer:
            "Absolutely. Many of our clients are first-time authors seeking professional guidance through the publishing process. Belmont Publishing provides personalized support from manuscript development to publication, helping new authors confidently navigate every stage of their publishing journey.",
    },
    {
        id: 3,
        question: "What is the difference between manuscript editing and proofreading?",
        answer:
            "Manuscript editing focuses on improving structure, clarity, flow, consistency, and overall readability, while proofreading is the final review that corrects spelling, grammar, punctuation, and formatting errors before publication. Belmont Publishing offers both services to ensure your book is publication-ready.",
    },
    {
        id: 4,
        question: "Do I need a completed manuscript before contacting Belmont Publishing?",
        answer:
            "Not at all. Whether you have a completed manuscript, an unfinished draft, or simply an idea for a book, our publishing specialists can help determine the best path forward. Many successful projects begin with nothing more than a concept and a vision.",
    },
    {
        id: 5,
        question: "How does self-publishing work with Belmont Publishing?",
        answer:
            "Our self-publishing services simplify the publishing process by handling editing, design, formatting, ISBN registration, distribution setup, and publication management. This allows authors to maintain ownership of their work while benefiting from professional publishing expertise.",
    },
    {
        id: 6,
        question: "Will my book be available on Amazon and other major platforms?",
        answer:
            "Yes. Belmont Publishing helps authors distribute their books through major online retailers and distribution channels, including Amazon Kindle, paperback platforms, digital bookstores, and expanded distribution networks, depending on the selected publishing package.",
    },
    {
        id: 7,
        question: "How long does the book publishing process take?",
        answer:
            "Publishing timelines vary based on manuscript length, editing requirements, design needs, and publishing goals. During your consultation, Belmont Publishing will provide a customized project timeline based on your specific book and publishing objectives.",
    },
    {
        id: 8,
        question: "How much do professional book publishing services cost?",
        answer:
            "Publishing costs vary depending on the scope of services required, including editing, design, formatting, ghostwriting, marketing, and distribution. Belmont Publishing provides customized recommendations and transparent pricing based on the unique needs of each project.",
    },
];

const FAQSection: React.FC = () => {
    const [openId, setOpenId] = useState<number>(1);

    const toggle = (id: number): void => {
        setOpenId(openId === id ? 0 : id);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-heading">FAQs</h2>

            <div className="faq-list">
                {faqs.map((faq) => (
                    <div key={faq.id} className="faq-item">
                        <button
                            className={`faq-question${openId === faq.id ? " open" : ""}`}
                            onClick={() => toggle(faq.id)}
                        >
                            <span>{faq.question}</span>
                            <span className="faq-icon">{openId === faq.id ? "▲" : "▶"}</span>
                        </button>
                        {openId === faq.id && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .faq-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 70px 60px;
                }
                .faq-heading {
                    text-align: center;
                    font-size: clamp(22px, 2.2vw, 32px);
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 36px;
                }
                .faq-list {
                    max-width: 860px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .faq-item {
                    border-radius: 6px;
                    overflow: hidden;
                }
                .faq-question {
                    width: 100%;
                    background: #f57c15;
                    color: #fff;
                    border: none;
                    padding: 16px 20px;
                    font-size: 14.5px;
                    font-weight: 600;
                    font-family: "Nunito Sans", sans-serif;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    text-align: left;
                    transition: background 0.2s;
                }
                .faq-question:hover {
                    background: #d96a0a;
                }
                .faq-icon {
                    font-size: 11px;
                    flex-shrink: 0;
                }
                .faq-answer {
                    background: #fff;
                    border: 1px solid #f0f0f0;
                    border-top: none;
                    padding: 20px 22px;
                }
                .faq-answer p {
                    font-size: 14px;
                    color: #444;
                    line-height: 1.8;
                    margin: 0;
                }
                @media (max-width: 768px) {
                    .faq-section { padding: 50px 20px; }
                }
            `}</style>
        </section>
    );
};

export default FAQSection;