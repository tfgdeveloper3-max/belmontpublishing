"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

// ── Services mega-menu data ───────────────────────────────────────────────────
const servicesMenu = [
    {
        label: "Writing Services",
        links: [
            "Book Writing",
            "Ghostwriting",
            "Children's Book Writing",
            "Sci-Fi Writing",
            "Memoir Writing",
            "Fiction Writing",
            "SEO Content Writing",
            "Mystery Writing",
            "Historical Writing",
            "Fantasy Writing",
            "Non-Fiction Writing",
            "Script Writing",
            "Horror Writing",
        ],
    },
    {
        label: "Editing & Publishing",
        links: [
            "Book Proofreading",
            "Book Editing",
            "Ebook Creation",
            "Audiobook Narration",
            "Book Formatting",
            "Children's Book Editing",
            "Book Publishing",
        ],
    },
    {
        label: "Design, Printing & Marketing",
        links: [
            "Book Cover Design",
            "Author Website Design",
            "Book Printing",
            "Book Marketing",
        ],
    },
];

// Slugify function to convert names like "Book Writing" to "book-writing"
const slugify = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const Navbar: React.FC = () => {
    const [servicesOpen, setServicesOpen] = useState<boolean>(false);
    const [activeService, setActiveService] = useState<string>(servicesMenu[0].label);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
    const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const activeLinks = servicesMenu.find((s) => s.label === activeService)?.links ?? [];

    /* ── Dropdown: delayed close so gap between trigger & menu doesn't close it ── */
    const handleMouseEnter = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setServicesOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
    };

    return (
        <nav className="navbar">
            <div className="nav-glow-line" />

            <div className="nav-inner">
                <Link href="/" className="nav-logo">
                    <Image
                        src="/images/logos/Logo_2.png"
                        alt="Belmont Publishing"
                        width={570}
                        height={350}
                        style={{ height: "78px", width: "auto" }}
                    />
                </Link>

                <ul className="nav-links">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/#about">ABOUT</Link></li>
                    <li><Link href="/#portfolio">PORTFOLIO</Link></li>
                    <li><Link href="/#Blogs">BLOGS</Link></li>
                    <li><Link href="/#services">SERVICES</Link></li>

                    {/* ── Services mega dropdown ── */}
                    {/* <li
                        className="nav-dropdown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link href="/#services" className="nav-services-trigger">
                            SERVICES <ChevronDown size={12} className={`caret-icon ${servicesOpen ? "rotate-180" : ""}`} />
                        </Link>

                        <div
                            className={`dropdown-mega-menu${servicesOpen ? " open" : ""}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="mega-left">
                                {servicesMenu.map((srv) => (
                                    <button
                                        key={srv.label}
                                        className={`mega-cat-btn ${activeService === srv.label ? "active" : ""}`}
                                        onMouseEnter={() => setActiveService(srv.label)}
                                    >
                                        {srv.label}
                                        <ChevronRight size={13} className="opacity-50 shrink-0" />
                                    </button>
                                ))}
                            </div>

                            <div className="mega-right">
                                <p className="mega-heading">{activeService}</p>
                                <ul className="mega-links-grid">
                                    {activeLinks.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href={`/InnerServices/${slugify(link)}`}
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li> */}

                    <li className="nav-cta-li">
                        <Link href="/contact" className="nav-cta-link">CONTACT US</Link>
                    </li>
                </ul>

                <button
                    className="hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>
            </div>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.ul
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <li><Link href="/" onClick={() => setMobileOpen(false)}>HOME</Link></li>
                        <li><Link href="/#about" onClick={() => setMobileOpen(false)}>ABOUT</Link></li>
                        <li><Link href="/#portfolio" onClick={() => setMobileOpen(false)}>PORTFOLIO</Link></li>
                        <li><Link href="/#Blogs" onClick={() => setMobileOpen(false)}>BLOGS</Link></li>
                        <li><Link href="/#services" onClick={() => setMobileOpen(false)}>SERVICES</Link></li>

                        {/* Mobile Services Accordion */}
                        {/* <li>
                            <div className="mobile-service-toggle">
                                <Link href="/#services" onClick={() => setMobileOpen(false)}>
                                    SERVICES
                                </Link>
                                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                                    <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                                </button>
                            </div>

                            <AnimatePresence>
                                {mobileServicesOpen && (
                                    <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mobile-sub-menu"
                                    >
                                        {servicesMenu.map((srv) => (
                                            <li key={srv.label}>
                                                <button
                                                    className="mobile-cat-btn"
                                                    onClick={() => setMobileSubOpen(mobileSubOpen === srv.label ? null : srv.label)}
                                                >
                                                    {srv.label}
                                                    <ChevronDown size={12} className={`transition-transform ${mobileSubOpen === srv.label ? "rotate-180" : ""}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {mobileSubOpen === srv.label && (
                                                        <motion.ul
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="mobile-inner-links"
                                                        >
                                                            {srv.links.map((link) => (
                                                                <li key={link}>
                                                                    <Link
                                                                        href={`/InnerServices/${slugify(link)}`}
                                                                        onClick={() => setMobileOpen(false)}
                                                                    >
                                                                        {link}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li> */}

                        <li><Link href="/contact" onClick={() => setMobileOpen(false)}>CONTACT US</Link></li>
                    </motion.ul>
                )}
            </AnimatePresence>

            <style jsx>{`
                .navbar {
                    background: rgba(20, 20, 20, 0.92);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    width: 100%;
                    height: 100px;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(245, 124, 21, 0.15);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4),
                                0 1px 0 rgba(245, 124, 21, 0.08);
                    font-family: Raleway, Arial, sans-serif;
                    overflow: visible;
                }

                .nav-glow-line {
                    position: absolute;
                    bottom: -1px; left: 50%;
                    transform: translateX(-50%);
                    width: 420px; height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(245, 124, 21, 0.55), transparent);
                    pointer-events: none;
                    z-index: 1;
                }
.nav-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 16px 40px;  /* ← 0 40px se 16px 40px kar do */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
}

                .nav-logo {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    flex-shrink: 0;
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    list-style: none;
                    margin: 0;
                    padding: 0 20px 0 0;
                }
                .nav-links li { position: relative; }

                .nav-links :global(a) {
                    color: rgba(255, 255, 255, 0.75) !important;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    letter-spacing: 0.7px;
                    padding: 8px 12px;
                    border-radius: 6px;
                    transition: color 0.2s, background 0.2s;
                    font-family: Raleway, Arial, sans-serif;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .nav-links :global(a:hover) {
                    color: #f57c15 !important;
                    background: rgba(245, 124, 21, 0.08);
                }

                /* Services trigger */
                :global(.nav-services-trigger) {
                    color: rgba(255, 255, 255, 0.75) !important;
                    font-size: 12px !important;
                    font-weight: 700 !important;
                    letter-spacing: 0.7px !important;
                    padding: 8px 12px !important;
                    border-radius: 6px !important;
                    display: flex !important;
                    align-items: center !important;
                    gap: 5px !important;
                    white-space: nowrap !important;
                    text-decoration: none !important;
                    transition: color 0.2s, background 0.2s !important;
                    font-family: Raleway, Arial, sans-serif !important;
                }
                :global(.nav-services-trigger:hover) {
                    color: #f57c15 !important;
                    background: rgba(245, 124, 21, 0.08) !important;
                }

                .caret-icon {
                    transition: transform 0.3s ease;
                }

                .nav-dropdown { position: relative; cursor: pointer; }

                /* CTA */
                .nav-cta-li :global(.nav-cta-link) {
                    background: #f57c15 !important;
                    color: #fff !important;
                    border-radius: 6px !important;
                    padding: 9px 20px !important;
                    box-shadow: 0 4px 16px rgba(245, 124, 21, 0.35);
                    transition: background 0.2s, box-shadow 0.2s !important;
                    letter-spacing: 0.7px !important;
                }
                .nav-cta-li :global(.nav-cta-link:hover) {
                    color: #d96a0a !important;
                    background: #fff !important;
                    box-shadow: 0 6px 24px rgba(245, 124, 21, 0.52) !important;
                }

                /* ── Mega Dropdown menu ── */
                .dropdown-mega-menu {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0; /* Aligned to right so it doesn't overflow screen */
                    transform: translateY(-6px);
                    background: rgba(18, 18, 18, 0.97);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(245, 124, 21, 0.18);
                    border-radius: 10px;
                    width: 640px;
                    display: flex;
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55), 0 0 24px rgba(245, 124, 21, 0.06);
                    z-index: 999;
                    margin: 0;
                    pointer-events: none;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
                    overflow: hidden;
                }
                .dropdown-mega-menu.open {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: all;
                    transform: translateY(0);
                }

                /* Bridge gap so mouse moving from trigger to menu doesn't close it */
                .dropdown-mega-menu::before {
                    content: '';
                    position: absolute;
                    top: -10px;
                    left: 0; right: 0;
                    height: 10px;
                }

                .mega-left {
                    width: 240px;
                    flex-shrink: 0;
                    padding: 12px 0;
                    border-right: 1px solid rgba(245, 124, 21, 0.12);
                    display: flex;
                    flex-direction: column;
                }

                .mega-cat-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 16px;
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 12px;
                    font-weight: 600;
                    font-family: Raleway, Arial, sans-serif;
                    cursor: pointer;
                    transition: background 0.15s, color 0.15s;
                    text-align: left;
                }
                .mega-cat-btn:hover, .mega-cat-btn.active {
                    background: rgba(245, 124, 21, 0.12);
                    color: #f57c15;
                }

                .mega-right {
                    flex: 1;
                    padding: 16px;
                }

                .mega-heading {
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    color: #f57c15;
                    text-transform: uppercase;
                    margin: 0 0 12px 0;
                    font-family: Raleway, Arial, sans-serif;
                }

                .mega-links-grid {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2px 12px;
                }
                .mega-links-grid li :global(a) {
                    display: block !important;
                    padding: 6px 8px !important;
                    font-size: 12px !important;
                    font-weight: 500 !important;
                    color: rgba(255, 255, 255, 0.65) !important;
                    border-radius: 4px !important;
                    background: transparent !important;
                    transition: background 0.15s, color 0.15s !important;
                    white-space: nowrap;
                }
                .mega-links-grid li :global(a:hover) {
                    background: rgba(245, 124, 21, 0.1) !important;
                    color: #f57c15 !important;
                }

                /* Hamburger */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 6px;
                    cursor: pointer;
                    padding: 8px;
                    transition: border-color 0.2s;
                }
                .hamburger:hover { border-color: rgba(245, 124, 21, 0.4); }
                .bar {
                    display: block;
                    width: 20px; height: 2px;
                    background: rgba(255, 255, 255, 0.75);
                    border-radius: 2px;
                    transition: background 0.2s;
                }
                .hamburger:hover .bar { background: #f57c15; }

                /* Mobile menu */
                .mobile-menu {
                    list-style: none;
                    margin: 0;
                    padding: 8px 0;
                    background: rgba(14, 14, 14, 0.97);
                    backdrop-filter: blur(16px);
                    border-top: 1px solid rgba(245, 124, 21, 0.12);
                    overflow: hidden;
                }
                .mobile-menu li :global(a) {
                    display: block;
                    padding: 12px 24px;
                    color: rgba(255, 255, 255, 0.75) !important;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    letter-spacing: 0.7px;
                    transition: color 0.2s, background 0.2s;
                    border-left: 2px solid transparent;
                }
                .mobile-menu li :global(a:hover) {
                    color: #f57c15 !important;
                    background: rgba(245, 124, 21, 0.07);
                    border-left-color: #f57c15;
                }

                /* Mobile Services Toggle */
                .mobile-service-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 24px 0 0;
                    border-left: 2px solid transparent;
                }
                .mobile-service-toggle:hover {
                    border-left-color: #f57c15;
                    background: rgba(245, 124, 21, 0.07);
                }
                .mobile-service-toggle :global(a) {
                    flex: 1;
                }
                .mobile-service-toggle button {
                    background: none;
                    border: none;
                    color: rgba(255, 255, 255, 0.4);
                    cursor: pointer;
                    padding: 12px 8px;
                    transition: color 0.2s;
                }
                .mobile-service-toggle button:hover {
                    color: #f57c15;
                }

                /* Mobile Sub Menu (Categories) */
                .mobile-sub-menu {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    background: rgba(0, 0, 0, 0.2);
                }
                .mobile-cat-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 24px;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 12px;
                    font-weight: 700;
                    font-family: Raleway, Arial, sans-serif;
                    cursor: pointer;
                    text-align: left;
                    transition: color 0.2s;
                }
                .mobile-cat-btn:hover {
                    color: #f57c15;
                }

                /* Mobile Inner Links (Sub-categories links) */
                .mobile-inner-links {
                    list-style: none;
                    margin: 0;
                    padding: 4px 0;
                    background: rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                }
                .mobile-inner-links li :global(a) {
                    padding-left: 36px !important;
                    font-size: 11px !important;
                    color: rgba(255, 255, 255, 0.45) !important;
                    font-weight: 600 !important;
                }
                .mobile-inner-links li :global(a:hover) {
                    color: #f57c15 !important;
                }

                @media (max-width: 768px) {
                    .nav-links { display: none; }
                    .hamburger { display: flex; }
                    .nav-inner { padding: 0 20px; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;