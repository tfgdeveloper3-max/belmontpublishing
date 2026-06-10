"use client";

import { useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { registerGSAP } from "@/lib/gsapSetup";
import { gsap } from "gsap";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/pages/Hero";
import LogosBar from "@/components/Logobar";
import AboutSection from "@/components/pages/AboutSection";
import BookReachSection from "@/components/pages/BookReachSection";
import BrandSection from "@/components/pages/BrandSection";
import ConsultantsSection from "@/components/pages/ConsultantSection";
import GiveStorySection from "@/components/pages/GiveStorySection";
import CTASection from "@/components/pages/Ctasection";
import DiscountBannerSection from "@/components/pages/DiscountBannerSection";
import PortfolioSection from "@/components/pages/PortfolioSection";
import ProcedureSection from "@/components/pages/ProcedureSection";
import MarketingSection from "@/components/pages/Marketingsection";
import TestimonialsSection2 from "@/components/pages/TestimonialSection";
import ContactFormSection from "@/components/pages/ContactFormSection";
import FAQSection from "@/components/pages/FaqSection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  useSmoothScroll();

  useEffect(() => {
    registerGSAP();
    gsap.fromTo(".page-content", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 });
  }, []);

  return (
    <>
      <div className="page-content">
        <Navbar />
        <section id="hero"><HeroSection /></section>
        <section id="about">
          <LogosBar />
          <AboutSection />
        </section>
        <section id="services">
          <BookReachSection />
          <ConsultantsSection />
          <GiveStorySection />
          <BrandSection />
          <CTASection />
        </section>
        <section id="portfolio">
          <DiscountBannerSection />
          <PortfolioSection />
        </section>
        <section id="process">
          <ProcedureSection />
          <MarketingSection />
        </section>
        <section id="blogs">
          <TestimonialsSection2 />
          <ContactFormSection />
          <FAQSection />
        </section>
        <FooterSection />
      </div>
    </>
  );
}