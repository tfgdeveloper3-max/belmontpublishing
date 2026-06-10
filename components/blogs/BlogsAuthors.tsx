"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const authors = [
    { name: "Sarah J.", role: "Publishing Expert", img: "/images/Testimonials/pic-01.jpg" },
    { name: "Michael B.", role: "Marketing Lead", img: "/images/Testimonials/pic-04.jpg" },
    { name: "Emma R.", role: "Senior Editor", img: "/images/Testimonials/pic-05.jpg" },
];

const BlogsAuthors: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".auth-title", { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
            gsap.from(".auth-card", { y: 60, opacity: 0, stagger: 0.15, duration: 0.7, scrollTrigger: { trigger: ".auth-grid", start: "top 85%" } });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="b-auth-section" ref={sectionRef}>
            <div className="b-auth-inner">
                <h2 className="auth-title">Meet Our <span className="hl">Writers</span></h2>
                <div className="auth-grid">
                    {authors.map((author) => (
                        <div key={author.name} className="auth-card">
                            <div className="auth-img-wrap">
                                <Image src={author.img} alt={author.name} width={120} height={120} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                            </div>
                            <h3 className="auth-name">{author.name}</h3>
                            <p className="auth-role">{author.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .b-auth-section { background: #0f0f0f; padding: 100px 50px; text-align: center; overflow: hidden; }
        .b-auth-inner { max-width: 1000px; margin: 0 auto; }
        .auth-title { font-family: 'Oswald', sans-serif; font-size: clamp(2rem, 4vw, 3rem); color: #fff; margin-bottom: 60px; text-transform: uppercase; }
        .hl { color: #f57c15; }
        
        .auth-grid { display: flex; gap: 40px; justify-content: center; flex-wrap: wrap; }
        .auth-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(245,124,21,0.15); border-radius: 16px; padding: 40px 30px; width: 280px; transition: transform 0.3s, box-shadow 0.3s; }
        .auth-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(245,124,21,0.15); }
        
        .auth-img-wrap { width: 100px; height: 100px; margin: 0 auto 20px; border: 2px solid #f57c15; border-radius: 50%; padding: 3px; }
        .auth-name { font-family: 'Oswald', sans-serif; font-size: 20px; color: #fff; margin-bottom: 6px; text-transform: uppercase; }
        .auth-role { font-size: 13px; color: rgba(255,255,255,0.5); }
      `}</style>
        </section>
    );
};

export default BlogsAuthors;