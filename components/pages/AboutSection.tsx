import Link from "next/link";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="dot-bg" />
        <div className="book-wrap">
          <Image
            src="/images/home-img-1.png"
            alt="Book Publishing"
            width={500}
            height={600}
            style={{ width: "100%", height: "auto", position: "relative", zIndex: 1 }}
          />
        </div>
      </div>

      <div className="hero-right">
        <p className="hero-tagline">
          Your Trusted Partner in Professional Book Publishing
        </p>

        <h2 className="hero-heading">
          Belmont Publishing - Where Authors, Stories, And Opportunities Come Together
        </h2>

        <p className="hero-para">
          Publishing has become increasingly automated, but great books still require human insight, creative judgment, and strategic thinking. This is why Belmont is built around people, not processes. We take the time to understand your goals, your audience, and your vision before recommending a path forward. Every editorial decision, design choice, and publishing strategy is carefully aligned with the story you're trying to tell and the impact you're hoping to make.
        </p>

        <p className="hero-para">
          For us, publication is not the finish line, it's the beginning of a book's journey. A professionally published book should do more than exist; it should be positioned to reach readers, open doors, strengthen credibility, and create meaningful opportunities for its author. Through thoughtful publishing, strategic distribution, and ongoing support, we help ensure your work is prepared not only for release, but for long-term visibility and growth.
        </p>

        <p className="hero-para">
          Authors come to us with different goals. Some dream of seeing their name on a book cover for the first time. Others want to expand their influence, share their expertise, or leave a lasting legacy for future generations. Whatever motivates you to write, Belmont Publishing is committed to helping you move forward with confidence. Because when your story is ready for the world, you deserve a publishing partner like us that believes in its potential as much as you do.
        </p>

        <Link href="/contact" className="hero-btn">
          Start Your Next Best Seller
          <span className="hero-btn-icon">→</span>
        </Link>

      </div>

      <style jsx>{`
        .hero-section {
          display: flex;
          align-items: center;
          gap: 60px;
          padding: 60px 60px 60px 40px;
          background: #f5f5f0;
          width: 100%;
          margin: 0 auto;
          font-family: Raleway, Arial, sans-serif;
        }
        .hero-left {
          width: 48%;
          flex-shrink: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 580px;
        }
        .dot-bg {
          position: absolute;
          inset: 0;
          background-size: 22px 22px;
          border-radius: 50%;
          width: 85%;
          height: 85%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 60%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 60%, transparent 100%);
          z-index: 0;
        }
        .book-wrap {
          position: relative;
          z-index: 1;
          width: 75%;
        }
        .hero-right {
          flex: 1;
        }
        .hero-tagline {
          font-size: 13px;
          font-weight: 600;
          color: #555;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .hero-heading {
          font-size: calc(20px + (40 - 20) * (100vw - 320px) / (1920 - 320));
          font-family: Raleway, Arial, sans-serif;
          font-weight: 600;
          color: #f57c15;
          margin-bottom: 15px;
          line-height: 40px;
          text-transform: capitalize;
        }
        .hero-para {
          font-size: 1rem;
          color: #444;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        /* ── Global selectors for Link component ── */
        :global(.hero-btn) {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: #f57c15;
          color: #fff !important; /* Link ki default purple color override karne ke liye */
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 6px;
          padding: 16px 28px;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.2s;
          font-family: Raleway, Arial, sans-serif;
          text-decoration: none !important; /* Link ka underline hatane ke liye */
        }
        :global(.hero-btn):hover {
          background: #d96a0a;
        }
        :global(.hero-btn-icon) {
          background: #fff;
          color: #f57c15;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 900;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            padding: 40px 24px;
            gap: 40px;
          }
          .hero-left {
            width: 100%;
            min-height: 380px;
          }
          .book-wrap {
            width: 60%;
          }
          .hero-heading {
            line-height: 1.3;
            font-family: Raleway, Arial, sans-serif;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;