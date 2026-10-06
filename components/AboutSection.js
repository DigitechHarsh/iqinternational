import { SITE_CONFIG, SITE_IMAGES } from "@/config/constants";
import { IconCheck } from "@/components/Icons";

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Authentic, plain-spoken editorial copy */}
          <div className="about-text">
            <div>
              <span className="section-label">About IQ International</span>
              <h2 id="about-heading">
                Direct, transparent study abroad guidance right here in Mota Varachha.
              </h2>
            </div>

            <p>
              Navigating global university admissions shouldn’t feel like a guessing game. Based at Opera Business Hub in Mota Varachha, Surat, <strong>IQ International</strong> provides honest, step-by-step guidance for students across Gujarat aiming for higher education in the UK, USA, Canada, Australia, New Zealand, and medical universities in Europe.
            </p>

            <p>
              Unlike agents who simply pass files along to third-party brokers, our in-house counsellors review your academic background, test scores, and budget before recommending suitable institutions. From preparing for language proficiency exams to drafting genuine Statements of Purpose (SOP) and managing student visa documentation, everything is handled under one roof.
            </p>

            {/* Core Track Record Highlights */}
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">In-house file processing without third-party outsourcing</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">1-on-1</span>
                <span className="highlight-label">Personalized visa interview coaching & documentation checks</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Key destination countries + direct MBBS admission pathways</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">Local</span>
                <span className="highlight-label">Accessible walk-in office at Opera Business Hub, Lajamni Chowk</span>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <a href="#services" className="btn btn-secondary">
                Explore Our Services
              </a>
            </div>
          </div>

          {/* About Image Card */}
          <div className="about-image-card">
            {/* Unsplash image: Counsellor guiding student at desk */}
            <img
              src={SITE_IMAGES.aboutGuidance}
              alt="Experienced education counsellor guiding an aspiring student at desk"
              className="about-image"
              loading="lazy"
              width="600"
              height="420"
            />
            <div className="about-badge">
              <span>Face-to-face counselling in Mota Varachha</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
