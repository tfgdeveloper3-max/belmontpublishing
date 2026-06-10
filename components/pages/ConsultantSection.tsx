import Link from "next/link"; // ← CHANGE: lucide-react ki jagah next/link import kiya
import Image from "next/image";

interface ServiceCard {
    icon: string;
    title: string;
    description: string;
}

const services: ServiceCard[] = [
    {
        icon: "/images/icons/01.png",
        title: "Ideation & Brainstorming",
        description:
            "Every successful book begins with a strong concept. Our publishing consultants help refine your ideas, develop compelling storylines, strengthen themes, and create engaging character arcs that resonate with your target audience.",
    },
    {
        icon: "/images/icons/02.png",
        title: "Editing, Proofreading & Formatting",
        description:
            "A professionally polished manuscript is essential for publication success. Our editors enhance clarity, consistency, grammar, and flow while our formatting specialists ensure your book meets the technical requirements of major publishing platforms and devices.",
    },
    {
        icon: "/images/icons/03.png",
        title: "Book Cover Design",
        description:
            "Your cover is your book's first impression. Our creative design team develops eye-catching, genre-specific covers that capture attention, communicate your message, and encourage readers to explore what's inside.",
    },
    {
        icon: "/images/icons/04.png",
        title: "Publishing & Global Distribution",
        description:
            "We simplify the publishing process by handling platform setup, e-book conversion, print-ready formatting, metadata optimization, and distribution across major retailers including Amazon Kindle, Apple Books, Kobo, Barnes & Noble, and other international marketplaces.",
    },
    {
        icon: "/images/icons/05.png",
        title: "Marketing & Promotional Campaigns",
        description:
            "Publishing your book is only the beginning. Our marketing specialists create customized promotional strategies including social media marketing, paid advertising, email campaigns, influencer outreach, and reader engagement initiatives designed to maximize visibility and sales.",
    },
    {
        icon: "/images/icons/06.png",
        title: "Video Book Trailers & Author Websites",
        description:
            "Bring your story to life with professionally produced video trailers and custom-built author websites. These powerful branding tools help establish your online presence, engage readers, and create additional opportunities for book discovery and sales.",
    },
    {
        icon: "/images/icons/07.png",
        title: "Sales Tracking & Royalty Management",
        description:
            "Stay informed about your book's performance with transparent reporting and royalty tracking. We help authors understand sales trends, monitor revenue streams, and make informed decisions to maximize long-term profitability.",
    },
    {
        icon: "/images/icons/08.png",
        title: "Book Events & Industry Participation",
        description:
            "Expand your reach beyond online platforms through strategic participation in book fairs, literary festivals, author signings, virtual events, and industry conferences. We help position your book in front of readers, industry professionals, media representatives, and valuable networking opportunities that can elevate your author brand.",
    },
    {
        icon: "/images/icons/09.png",
        title: "Author Branding & Long-Term Growth",
        description:
            "Building a successful author career requires more than publishing a single book. We help authors develop a professional brand, strengthen audience engagement, and create sustainable growth strategies that support future publishing success.",
    },
];

const ConsultantsSection: React.FC = () => {
    return (
        <section className="consult-section">
            {/* Ambient background blobs */}
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />

            <div className="consult-inner">
                <div className="consult-head">
                    <span className="consult-badge">Our Services</span>
                    <h2 className="consult-heading">
                        Our Complete  {" "}
                        <span className="heading-highlight">Publishing Ecosystem</span>{" "}
                        Built For Creative Visionaries
                    </h2>
                    <div className="heading-divider" />
                    <p className="consult-subtext">
                        The difference between a finished manuscript and a successful book lies in what happens next. Belmont’s crew provides the publishing, distribution, and promotional expertise needed to position your work for maximum visibility. The result? A seamless path from manuscript to market, designed to help authors compete, connect, and grow! Have a sneak peek at our main services below.

                    </p>
                </div>

                <div className="cards-grid">
                    {services.map((service) => (
                        <div key={service.title} className="service-card">
                            <div className="card-icon-wrap">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={64}
                                    height={64}
                                    style={{ width: "34px", height: "34px", objectFit: "contain" }}
                                />
                            </div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-desc">{service.description}</p>
                            <div className="card-bottom-bar" />
                        </div>
                    ))}
                </div>

                <div className="consult-btns">
                    <Link href="/contact" className="btn-orange">Get Started</Link>
                    <a href="tel:2797770381" className="btn-dark">(279) 777-0381</a>
                </div>
            </div>

            <style jsx>{`
                .consult-section {
                    background: #fff;
                    font-family: Raleway, Arial, sans-serif;
                    padding: 72px 60px;
                    position: relative;
                    overflow: hidden;
                }

                /* Ambient blobs */
                .blob {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                }
                .blob-1 {
                    top: -100px;
                    left: -100px;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(
                        circle,
                        rgba(245, 124, 21, 0.10) 0%,
                        transparent 70%
                    );
                }
                .blob-2 {
                    bottom: -80px;
                    right: -80px;
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(
                        circle,
                        rgba(245, 124, 21, 0.09) 0%,
                        transparent 70%
                    );
                }
                .blob-3 {
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 520px;
                    height: 280px;
                    border-radius: 50%;
                    background: radial-gradient(
                        ellipse,
                        rgba(245, 124, 21, 0.05) 0%,
                        transparent 65%
                    );
                }

                .consult-inner {
                    position: relative;
                    z-index: 1;
                }

                /* Header */
                .consult-head {
                    text-align: center;
                    max-width: 820px;
                    margin: 0 auto 52px;
                }
                .consult-badge {
                    display: inline-block;
                    background: rgba(245, 124, 21, 0.10);
                    color: #f57c15;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    padding: 6px 16px;
                    border-radius: 20px;
                    margin-bottom: 16px;
                    border: 1px solid rgba(245, 124, 21, 0.22);
                }
                .consult-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(2.5rem, 2.5vw, 5.2rem);
                    font-weight: 900;
                    color: #111;
                    line-height: 1.2;
                    margin-bottom: 16px;
                }
                .heading-highlight {
                    color: #f57c15;
                }
                .heading-divider {
                    width: 52px;
                    height: 4px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 4px;
                    margin: 0 auto 18px;
                }
                .consult-subtext {
                    font-size: 1rem;
                    color: #777;
                    line-height: 1.9;
                }

                /* Cards grid */
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 22px;
                    max-width: 1200px;
                    margin: 0 auto 52px;
                }

                /* Card */
                .service-card {
                    background: #fff;
                    border: 1.5px solid #f0f0f0;
                    border-radius: 18px;
                    padding: 32px 24px 28px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.28s ease, box-shadow 0.28s ease,
                        border-color 0.28s ease;
                }
                .service-card:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 12px 40px rgba(245, 124, 21, 0.14),
                        0 4px 16px rgba(0, 0, 0, 0.06);
                    border-color: rgba(245, 124, 21, 0.30);
                }

                /* Orange bottom bar that slides up on hover */
                .card-bottom-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #f57c15, #ffb347);
                    border-radius: 0 0 18px 18px;
                    opacity: 0;
                    transition: opacity 0.28s ease;
                }
                .service-card:hover .card-bottom-bar {
                    opacity: 1;
                }

                /* Icon */
                .card-icon-wrap {
                    width: 68px;
                    height: 68px;
                    border-radius: 16px;
                    background: linear-gradient(
                        135deg,
                        rgba(245, 124, 21, 0.12) 0%,
                        rgba(245, 124, 21, 0.05) 100%
                    );
                    border: 1.5px solid rgba(245, 124, 21, 0.20);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 16px rgba(245, 124, 21, 0.12);
                    transition: box-shadow 0.28s ease, transform 0.28s ease;
                }
                .service-card:hover .card-icon-wrap {
                    box-shadow: 0 6px 24px rgba(245, 124, 21, 0.28);
                    transform: scale(1.07);
                }

                .card-title {
                    font-size: 17px;
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 10px;
                    line-height: 1.3;
                }
                .card-desc {
                    font-size: 1rem;
                    color: #888;
                    line-height: 1.8;
                }

                /* Buttons */
                .consult-btns {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    flex-wrap: wrap;
                }

                /* ── Global CSS for Link & a tags ── */
                :global(.btn-dark) {
                    background: #111;
                    color: #fff !important;
                    border: none;
                    padding: 14px 38px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: Raleway, Arial, sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    letter-spacing: 0.3px;
                    text-decoration: none !important;
                    display: inline-block;
                }
                :global(.btn-dark):hover {
                    background: #333;
                    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
                }
                :global(.btn-orange) {
                    background: #f57c15;
                    color: #fff !important;
                    border: none;
                    padding: 14px 38px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    font-family: Raleway, Arial, sans-serif;
                    transition: background 0.2s, box-shadow 0.2s;
                    letter-spacing: 0.3px;
                    box-shadow: 0 4px 20px rgba(245, 124, 21, 0.38);
                    text-decoration: none !important;
                    display: inline-block;
                }
                :global(.btn-orange):hover {
                    background: #d96a0a;
                    box-shadow: 0 6px 28px rgba(245, 124, 21, 0.52);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 580px) {
                    .consult-section {
                        padding: 50px 20px;
                    }
                    .cards-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default ConsultantsSection;