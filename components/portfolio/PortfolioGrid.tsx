"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Book { src: string; alt: string; genre: string; }

const books: Book[] = [
    { src: "/images/Portfolio/1.webp", alt: "Beyond The Snake", genre: "Thriller" },
    { src: "/images/Portfolio/2.webp", alt: "Escape From The Black Hole", genre: "Sci-Fi" },
    { src: "/images/Portfolio/3.webp", alt: "The Tavern Files", genre: "Mystery" },
    { src: "/images/Portfolio/4.webp", alt: "The Theory Of Becoming", genre: "Non-Fiction" },
    { src: "/images/Portfolio/5.webp", alt: "Tailormade By God", genre: "Religious" },
    { src: "/images/Portfolio/6.webp", alt: "The Bristol Bombers", genre: "History" },
    { src: "/images/Portfolio/7.webp", alt: "Inner Harmony", genre: "Wellness" },
    { src: "/images/Portfolio/8.webp", alt: "Fall From Grace Rise To Faith", genre: "Inspirational" },
    { src: "/images/Portfolio/9.webp", alt: "Coaching For Life", genre: "Self-Help" },
    { src: "/images/Portfolio/10.webp", alt: "Gravity", genre: "Fiction" },
    { src: "/images/Portfolio/11.webp", alt: "Ted The Grocer", genre: "Children" },
    { src: "/images/Portfolio/12.webp", alt: "Milford Mouse Private Ear", genre: "Children" },
];

const PortfolioGrid: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".grid-heading", { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
            gsap.from(".book-card", { y: 80, opacity: 0, scale: 0.95, stagger: 0.08, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".books-grid", start: "top 85%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="p-grid-section" ref={sectionRef}>
            <div className="p-grid-inner">
                <div className="grid-header">
                    <h2 className="grid-heading">Published <span className="hl">Works</span></h2>
                    <p className="grid-subtext">Explore our diverse catalog of authors who trusted Belmont Publishing to bring their stories to the world.</p>
                </div>

                <div className="books-grid">
                    {books.map((book) => (
                        <div key={book.alt} className="book-card">
                            <div className="card-image">
                                <Image src={book.src} alt={book.alt} width={300} height={450} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                <div className="card-overlay">
                                    <span className="book-genre">{book.genre}</span>
                                    <h3 className="book-title">{book.alt}</h3>
                                    <button className="view-btn">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .p-grid-section { background: #fff; padding: 100px 50px; width: 100%; }
        .p-grid-inner { max-width: 1400px; margin: 0 auto; }
        .grid-header { text-align: center; margin-bottom: 60px; }
        .grid-heading { font-family: 'Oswald', sans-serif; font-size: clamp(2rem, 4vw, 3.5rem); color: #111; margin-bottom: 16px; }
        .hl { color: #f57c15; }
        .grid-subtext { color: #666; font-size: 15px; max-width: 600px; margin: 0 auto; line-height: 1.7; }

        .books-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
        
        .book-card { position: relative; border-radius: 12px; overflow: hidden; cursor: pointer; aspect-ratio: 2/3; box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .book-card:hover { transform: translateY(-12px); box-shadow: 0 20px 50px rgba(245,124,21,0.2), 0 8px 20px rgba(0,0,0,0.1); }
        
        .card-image { width: 100%; height: 100%; position: relative; }
        
        .card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 24px; opacity: 0; transition: opacity 0.4s ease; }
        .book-card:hover .card-overlay { opacity: 1; }
        
        .book-genre { background: #f57c15; color: #fff; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; width: fit-content; margin-bottom: 10px; transform: translateY(10px); transition: transform 0.3s ease; }
        .book-card:hover .book-genre { transform: translateY(0); }
        
        .book-title { font-family: 'Oswald', sans-serif; color: #fff; font-size: 18px; font-weight: 600; margin-bottom: 12px; transform: translateY(10px); transition: transform 0.3s ease 0.05s; }
        .book-card:hover .book-title { transform: translateY(0); }
        
        .view-btn { background: transparent; border: 1px solid rgba(255,255,255,0.4); color: #fff; padding: 8px 16px; border-radius: 4px; font-size: 12px; font-weight: 700; cursor: pointer; transition: all 0.2s; transform: translateY(10px); transition-property: background, transform; transition-delay: 0.1s; }
        .book-card:hover .view-btn { transform: translateY(0); }
        .view-btn:hover { background: #fff; color: #111; }

        @media (max-width: 1100px) { .books-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px) { .books-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .p-grid-section { padding: 60px 20px; } }
        @media (max-width: 480px) { .books-grid { grid-template-columns: 1fr; max-width: 350px; margin: 0 auto; } }
      `}</style>
        </section>
    );
};

export default PortfolioGrid;