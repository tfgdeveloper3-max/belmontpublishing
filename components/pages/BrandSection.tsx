import Image from "next/image";

const BrandSection: React.FC = () => {
    return (
        <section className="brand-section">
            <div className="brand-inner">
                <Image
                    src="/images/Brand-section.webp"
                    alt="Global Distribution Network"
                    width={1400}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                    priority
                />
            </div>

            <style jsx>{`
                .brand-section {
                    background: #fff;
                    font-family: "Nunito Sans", sans-serif;
                    padding: 60px 40px;
                }
                .brand-inner {
                    max-width: 1300px;
                    margin: 0 auto;
                }
            `}</style>
        </section>
    );
};

export default BrandSection;