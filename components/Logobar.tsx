import Image from "next/image";

interface Logo {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const logos: Logo[] = [
    { src: "/images/logos/Amazon.png", alt: "Amazon", width: 110, height: 34 },
    { src: "/images/logos/AppleBooks.png", alt: "AppleBooks", width: 100, height: 34 },
    { src: "/images/logos/Ingram.png", alt: "Ingram", width: 110, height: 34 },
    { src: "/images/logos/Barnes.png", alt: "Barnes & Noble", width: 160, height: 34 },
    { src: "/images/logos/Kobo.png", alt: "Kobo", width: 160, height: 34 },
];

const LogosBar: React.FC = () => {
    const duplicated = [...logos, ...logos, ...logos];

    return (
        <div className="logos-bar">
            <div className="logos-track">
                {duplicated.map((logo, index) => (
                    <div className="logo-item" key={`${logo.alt}-${index}`}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            style={{
                                width: "auto",
                                height: "32px",
                                objectFit: "contain",
                                opacity: 0.8,
                            }}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                .logos-bar {
                    background: #1a1a1a;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    overflow: hidden;
                    padding: 20px 0;
                    width: 100%;
                    font-family: "Nunito Sans", sans-serif;
                }

                .logos-track {
                    display: flex;
                    align-items: center;
                    gap: 80px;
                    width: max-content;
                    animation: slide 18s linear infinite;
                }

                .logos-track:hover {
                    animation-play-state: paused;
                }

                .logo-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: opacity 0.2s;
                }

                .logo-item:hover {
                    opacity: 1 !important;
                }

                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }
            `}</style>
        </div>
    );
};

export default LogosBar;