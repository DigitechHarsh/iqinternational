"use client";

import { useState, useEffect, useRef } from "react";
import { SITE_CONFIG, SITE_IMAGES } from "@/config/constants";
import { IconWhatsApp, IconChevronLeft, IconChevronRight } from "@/components/Icons";

const SLIDES = [
  {
    tag: "STUDY ABROAD CONSULTANCY • SURAT",
    title: "From shortlisting universities to visa approval, one team handles it.",
    subtitle:
      "End-to-end guidance for undergraduate and postgraduate degrees across UK, USA, Canada, Australia and New Zealand.",
    image: SITE_IMAGES.heroSlide1,
    alt: "Students walking across international university campus",
  },
  {
    tag: "TEST PREPARATION & COACHING",
    title: "Prepare for IELTS, TOEFL, PTE, GRE and GMAT in Surat or online.",
    subtitle:
      "Targeted band-score coaching with authentic practice materials, regular computer mock tests, and individualized feedback.",
    image: SITE_IMAGES.heroSlide2,
    alt: "Students in test preparation coaching classroom with laptops and study guides",
  },
  {
    tag: "END-TO-END VISA PROCESSING",
    title: "Zero-compromise visa documentation & 1-on-1 embassy mock interviews.",
    subtitle:
      "Meticulous visa file verification, authentic Statement of Purpose (SOP) drafting, and one-on-one interview preparation.",
    image: SITE_IMAGES.heroSlide3,
    alt: "Visa consultant showing approved visa document and passport to student",
  },
  {
    tag: "MEDICAL EDUCATION ABROAD",
    title: "MBBS abroad with direct admission support for Russia and Georgia.",
    subtitle:
      "NMC and WHO-recognized universities, English-medium instruction, transparent fees, and guaranteed hostel guidance.",
    image: SITE_IMAGES.heroSlide4,
    alt: "Medical students in white coats outside European university hospital",
  },
  {
    tag: "GLOBAL ACADEMIC ADMISSIONS",
    title: "Profile mapping, fast offer letters, and scholarship assistance.",
    subtitle:
      "Match your academic score and budget with prestigious universities worldwide to secure conditional offers and grants.",
    image: SITE_IMAGES.heroSlide5,
    alt: "Smiling students celebrating university admission acceptance letter",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance slides every 5.5 seconds, pause on hover
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const touchStartXRef = useRef(0);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 45) {
      handleNext(); // Swiped left -> next
    } else if (diff < -45) {
      handlePrev(); // Swiped right -> prev
    }
  };

  return (
    <section id="home" className="hero-wrapper" aria-label="Featured highlights">
      {/* Edge-to-edge full width from side to side without outer container wrapping */}
      <div
        className="hero-slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            aria-hidden={index !== currentSlide}
          >
            {/* Background Photography spanning full edge-to-edge */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="hero-slide-bg"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Dark directional contrast overlay for readability */}
            <div className="hero-overlay" />

            {/* Typography Overlay neatly aligned with site container */}
            <div className="hero-content-wrapper">
              <div className="hero-content">
                <span className="hero-tag">{slide.tag}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-white">
                    Book a Free Counselling Session
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello IQ International, I want to book a free counselling session.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <IconWhatsApp size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Small Line Indicators aligned with container */}
        <div className="slider-indicators-wrapper">
          <div className="slider-indicators" role="tablist" aria-label="Slider navigation">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider-line ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={index === currentSlide}
              />
            ))}
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="slider-arrows">
            <button
              type="button"
              className="slider-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <IconChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="slider-arrow-btn"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <IconChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
