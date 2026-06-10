import Image from "next/image";

const MarketingSection: React.FC = () => {
    return (
        <section className="mkt-section">
            <div className="mkt-inner">
                <div className="mkt-left">
                    <Image
                        src="/images/Marketing.png"
                        alt="Publishing Platforms"
                        width={560}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                <div className="mkt-right">
                    <h2 className="mkt-heading">
                        Affordable Publishing And Marketing Solutions Built For Author Success
                    </h2>

                    <p className="mkt-para">
                        Writing the book is only the beginning. Belmont Publishing helps authors move confidently from manuscript to marketplace with affordable publishing packages that include editing, formatting, cover design, e-book publishing, and global distribution support. Every service is tailored to ensure your book meets industry standards and is positioned for success.
                    </p>

                    <p className="mkt-para">
                        Your published book can reach readers through leading platforms such as Amazon, Barnes & Noble, Kobo, Apple Books, Google Play Books, and other international distribution channels. Combined with our custom book marketing services, promotional campaigns, and visibility strategies, we help authors maximize exposure, connect with their target audience, and build momentum long after publication.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .mkt-section {
                    background: #fff;
                    font-family: Raleway, Arial, sans-serif;
                    padding: 70px 50px;
                }
                .mkt-inner {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    max-width: 1300px;
                    margin: 0 auto;
                }
                .mkt-left {
                    width: 45%;
                    flex-shrink: 0;
                }
                .mkt-right {
                    flex: 1;
                    min-width: 0;
                }
                .mkt-heading {
                    font-family: Raleway, Arial, sans-serif;
                    font-size: clamp(2.5rem, 2.5vw, 5.2rem);
                    font-weight: 900;
                    color: #111;
                    line-height: 1.25;
                    margin-bottom: 22px;
                }
                .mkt-para {
                    font-size: 1rem;
                    color: #444;
                    line-height: 1.85;
                    margin-bottom: 18px;
                }
                @media (max-width: 820px) {
                    .mkt-section { padding: 50px 24px; }
                    .mkt-inner { flex-direction: column; gap: 36px; }
                    .mkt-left { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default MarketingSection;