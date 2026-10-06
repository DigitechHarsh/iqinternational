"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/constants";
import { IconWhatsApp, IconMenu, IconClose } from "@/components/Icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [logoLoaded, setLogoLoaded] = useState(true);

  // Monitor scroll for shadow & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ["home", "about", "services", "destinations", "mbbs", "process", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Destinations", href: "#destinations", id: "destinations" },
    { label: "MBBS Abroad", href: "#mbbs", id: "mbbs" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e, href, id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Brand Logo with responsive sizing and text fallback */}
        <a href="#home" className="logo-wrapper" aria-label="IQ International Home">
          {logoLoaded ? (
            <img
              src={SITE_CONFIG.logoUrl}
              alt="IQ International - Foreign Education & Visa Consultant"
              className="logo-image"
              onError={() => setLogoLoaded(false)}
            />
          ) : (
            <div className="logo-fallback-text">
              IQ INTERNATIONAL
              <span className="logo-tagline">Education & Visa Consultant</span>
            </div>
          )}
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, link.href, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Action: WhatsApp & Mobile Hamburger */}
        <div className="header-actions">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello IQ International, I would like to inquire about study abroad counselling.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm header-whatsapp-btn"
            aria-label="Chat on WhatsApp"
          >
            <IconWhatsApp size={16} />
            <span className="header-whatsapp-text">Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, link.href, link.id)}
          >
            {link.label}
          </a>
        ))}
        <div style={{ marginTop: "1rem" }}>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello IQ International, I would like to inquire about study abroad counselling.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: "100%" }}
          >
            <IconWhatsApp size={18} />
            <span>WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
