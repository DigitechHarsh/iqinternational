import { SITE_CONFIG, SITE_IMAGES } from "@/config/constants";
import { IconCheck, IconWhatsApp } from "@/components/Icons";

export default function MbbsAbroadSection() {
  return (
    <section id="mbbs" className="section" aria-labelledby="mbbs-heading">
      <div className="container">
        <div className="mbbs-spotlight">
          {/* Text & Key Pillars */}
          <div>
            <span className="section-label">Medical Admissions Specialty</span>
            <h2 id="mbbs-heading">MBBS in Russia & Georgia with complete local support.</h2>
            <p>
              A high NEET score is required in India, but exorbitant private college donations often force ambitious students to compromise their dream of becoming doctors. IQ International is widely recognized across Surat for securing direct, legitimate MBBS admissions in Russia and Georgia.
            </p>

            <div className="mbbs-features-grid">
              <div className="mbbs-pill">
                <div className="mbbs-pill-title">NMC & WHO Recognized</div>
                <div className="mbbs-pill-desc">
                  Degrees recognized by the National Medical Commission (NMC), WHO, and ECFMG for licensing worldwide.
                </div>
              </div>
              <div className="mbbs-pill">
                <div className="mbbs-pill-title">English Medium Throughout</div>
                <div className="mbbs-pill-desc">
                  The entire 6-year clinical syllabus is instructed in English with native language medical conversational training.
                </div>
              </div>
              <div className="mbbs-pill">
                <div className="mbbs-pill-title">Affordable Fee Schedules</div>
                <div className="mbbs-pill-desc">
                  Total package from ₹18–25 Lakhs including tuition, with fees payable annually directly to the university.
                </div>
              </div>
              <div className="mbbs-pill">
                <div className="mbbs-pill-title">Indian Mess & Campus Hostels</div>
                <div className="mbbs-pill-desc">
                  Guaranteed university dormitory allocation and dedicated Indian dining options on campus.
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <a href="#contact" className="btn btn-primary">
                Enquire for MBBS Intake
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello IQ International, I want to enquire about MBBS admission in Russia / Georgia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <IconWhatsApp size={16} />
                <span>WhatsApp MBBS Desk</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="about-image-card">
            <img
              src={SITE_IMAGES.serviceMbbs}
              alt="Medical doctor textbooks and clinical tools for MBBS aspirants"
              className="about-image"
              loading="lazy"
              width="580"
              height="400"
            />
            <div className="about-badge">
              <span>Direct university representation • No capitation fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
