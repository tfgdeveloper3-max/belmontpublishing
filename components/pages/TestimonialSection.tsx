"use client";

import Image from "next/image";
import { useEffect } from "react";

interface Testimonial {
    id: number;
    name: string;
    avatar: string;
    review: string;
}

const testimonials: Testimonial[] = [
    { id: 1, name: "Rene B. Brown", avatar: "/images/Testimonials/pic-01.jpg", review: "Belmont Publishing is a place that brings author personas to life. My friend suggested me of them when I was struggling to find professional editors for my book and their editors are really great and passionate about their work." },
    { id: 2, name: "James D. Perez", avatar: "/images/Testimonials/pic-02.jpg", review: "Tired of the search for the simplest publishing methods? Belmont Publishing aims to help you stand out in the publishing journey and know that your book makes it global! Thanks for serving me with a global network, ABP." },
    { id: 3, name: "Vicki R. Baker", avatar: "/images/Testimonials/pic-03.jpg", review: "I'm glad that I was able to collaborate with Belmont Publishing as they have the best ghostwriting team in the USA. They served me with drafts chapter-wise every 15 days and my book was completed in literally no time." },
    { id: 4, name: "Michael T. Hayes", avatar: "/images/Testimonials/pic-04.jpg", review: "The team at Belmont Publishing exceeded my expectations at every turn. From editing to final distribution, they handled everything professionally. My book is now available on all major platforms." },
    { id: 5, name: "Sarah L. Morgan", avatar: "/images/Testimonials/pic-05.jpg", review: "Working with Belmont Publishing was an incredible experience. They understood my vision perfectly and helped bring it to life. The cover design and formatting were absolutely stunning." },
    { id: 6, name: "David K. Wilson", avatar: "/images/Testimonials/pic-06.jpg", review: "I had struggled with self-publishing for years before finding Belmont Publishing. Their expert team made the entire process seamless and my book reached readers worldwide within weeks." },
];

const TestimonialsSection2: React.FC = () => {
    useEffect(() => {
        if (!document.querySelector("#swiper-css")) {
            const link = document.createElement("link");
            link.id = "swiper-css";
            link.rel = "stylesheet";
            link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
            document.head.appendChild(link);
        }
        const initSwiper = (): void => {
            new (window as any).Swiper(".testimonials2-swiper", {
                slidesPerView: 3, centeredSlides: true, spaceBetween: 24,
                loop: true, speed: 700,
                autoplay: { delay: 2800, disableOnInteraction: false },
                breakpoints: { 0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
            });
        };
        if (!(window as any).Swiper) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
            script.onload = initSwiper;
            document.body.appendChild(script);
        } else { initSwiper(); }
    }, []);

    return (
        <>
            <style jsx global>{`
                .testimonials2-swiper { width: 100%; overflow: visible !important; padding: 30px 0 40px !important; }
                .testimonials2-swiper .swiper-slide-active .test2-card { transform: scale(1.08); box-shadow: 0 16px 44px rgba(0,0,0,0.14); z-index: 2; }
                .testimonials2-swiper .swiper-slide:not(.swiper-slide-active) .test2-card { transform: scale(0.95); }
            `}</style>

            <section className="test2-section">
                <h2 className="test2-heading">Testimonials</h2>
                <div className="swiper testimonials2-swiper">
                    <div className="swiper-wrapper">
                        {testimonials.map((t) => (
                            <div className="swiper-slide" key={t.id}>
                                <div className="test2-card">
                                    <div className="test2-top">
                                        <div className="test2-avatar">
                                            <Image src={t.avatar} alt={t.name} width={52} height={52} style={{ width: "52px", height: "52px", objectFit: "cover", borderRadius: "50%", display: "block" }} />
                                        </div>
                                        <div className="test2-meta">
                                            <div className="test2-name">{t.name}</div>
                                            <div className="test2-stars">★★★★★</div>
                                        </div>
                                    </div>
                                    <p className="test2-review">{t.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .test2-section { background: #f5f5f5; font-family: Raleway, Arial, sans-serif; padding: 60px 0 40px; overflow: hidden; width: 100%; }
                .test2-heading { text-align: center; font-size: clamp(22px, 2.2vw, 32px); font-weight: 700; color: #111; margin-bottom: 10px; padding: 0 20px; }
                .test2-card { background: #fff; border-radius: 10px; padding: 28px 24px; border: 1px solid #ebebeb; transition: transform 0.4s ease, box-shadow 0.4s ease; min-height: 220px; display: flex; flex-direction: column; }
                .test2-top { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
                .test2-meta { display: flex; flex-direction: column; gap: 4px; }
                .test2-name { font-size: 15px; font-weight: 700; color: #111; }
                .test2-stars { color: #f5a623; font-size: 15px; letter-spacing: 2px; }
                .test2-review { font-size: 13.5px; color: #555; line-height: 1.75; flex: 1; }
            `}</style>
        </>
    );
};

export default TestimonialsSection2;