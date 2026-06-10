"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Post { image: string; category: string; title: string; date: string; }

const posts: Post[] = [
    { image: "/images/blog-1.webp", category: "Publishing", title: "ISBN Decoded: Why Your Book Needs The Right Number", date: "Oct 24, 2024" },
    { image: "/images/blog-2.webp", category: "Marketing", title: "Pre-Order Strategies To Guarantee A Launch Day Rush", date: "Oct 18, 2024" },
    { image: "/images/blog-3.webp", category: "Writing Tips", title: "Overcoming Writer's Block: Techniques From Bestsellers", date: "Oct 12, 2024" },
    { image: "/images/blog-4.webp", category: "Design", title: "Judging A Book By Its Cover: Design Trends For 2025", date: "Sep 30, 2024" },
    { image: "/images/blog-5.webp", category: "Publishing", title: "Traditional vs Self-Publishing: The Ultimate Breakdown", date: "Sep 22, 2024" },
    { image: "/images/blog-6.webp", category: "Marketing", title: "Building An Author Platform From Scratch: A 30-Day Plan", date: "Sep 15, 2024" },
];

const BlogsGrid: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".grid-title", { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
            gsap.from(".post-card", { y: 80, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".posts-grid", start: "top 85%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="grid-section" ref={sectionRef}>
            <div className="grid-inner">
                <div className="grid-header">
                    <h2 className="grid-title">Latest <span className="hl">Articles</span></h2>
                </div>

                <div className="posts-grid">
                    {posts.map((post, index) => (
                        <div key={index} className="post-card">
                            <div className="card-image">
                                <Image src={post.image} alt={post.title} width={400} height={250} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                <div className="card-overlay">
                                    <button className="read-overlay-btn">Read More</button>
                                </div>
                            </div>
                            <div className="card-content">
                                <span className="post-cat">{post.category}</span>
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-date">{post.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .grid-section { background: #f5f5f0; padding: 100px 50px; }
        .grid-inner { max-width: 1300px; margin: 0 auto; }
        .grid-header { margin-bottom: 60px; }
        .grid-title { font-family: 'Oswald', sans-serif; font-size: clamp(2rem, 4vw, 3.5rem); color: #111; }
        .hl { color: #f57c15; }

        .posts-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        
        .post-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer; }
        .post-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.08); }
        
        .card-image { position: relative; aspect-ratio: 16/10; overflow: hidden; }
        .card-image img { transition: transform 0.5s ease; }
        .post-card:hover .card-image img { transform: scale(1.08); }
        
        .card-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
        .post-card:hover .card-overlay { opacity: 1; }
        
        .read-overlay-btn { background: #fff; color: #111; border: none; padding: 10px 24px; border-radius: 4px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: 'Raleway', sans-serif; transform: translateY(10px); transition: transform 0.3s ease, background 0.2s; }
        .post-card:hover .read-overlay-btn { transform: translateY(0); }
        .read-overlay-btn:hover { background: #f57c15; color: #fff; }
        
        .card-content { padding: 24px; }
        .post-cat { font-size: 11px; font-weight: 700; color: #f57c15; text-transform: uppercase; letter-spacing: 1px; }
        .post-title { font-family: 'Oswald', sans-serif; font-size: 18px; color: #111; margin: 8px 0 12px; line-height: 1.3; text-transform: uppercase; }
        .post-date { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }

        @media (max-width: 900px) { .posts-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
        @media (max-width: 600px) { .posts-grid { grid-template-columns: 1fr; } .grid-section { padding: 60px 20px; } }
      `}</style>
        </section>
    );
};

export default BlogsGrid;