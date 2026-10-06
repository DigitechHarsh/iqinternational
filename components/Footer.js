import { SITE_CONFIG } from "@/config/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-col">
            <a href="#home">
              <img
                src={SITE_CONFIG.logoUrl}
                alt="IQ International"
                className="footer-logo"
              />
            </a>
            <p className="footer-desc">
              Foreign education and student visa consultancy in Mota Varachha, Surat. Guiding students through university admissions, IELTS/PTE preparation, and medical degrees abroad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Coaching & Admissions</a></li>
              <li><a href="#destinations" className="footer-link">Destinations</a></li>
              <li><a href="#mbbs" className="footer-link">MBBS Abroad</a></li>
              <li><a href="#process" className="footer-link">Our Process</a></li>
              <li><a href="#contact" className="footer-link">Contact & Location</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">IELTS & PTE Coaching</a></li>
              <li><a href="#services" className="footer-link">GRE & GMAT Training</a></li>
              <li><a href="#services" className="footer-link">Global Academic Admissions</a></li>
              <li><a href="#services" className="footer-link">Student Visa Filing</a></li>
              <li><a href="#services" className="footer-link">SOP & Mock Interviews</a></li>
              <li><a href="#mbbs" className="footer-link">MBBS in Russia & Georgia</a></li>
            </ul>
          </div>

          {/* Office & Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Surat Office</h4>
            <p className="footer-desc" style={{ marginTop: 0 }}>
              417, Opera Business Hub, Lajamni Chowk, near Savji Korat Bridge, Maruti Dham Society, Mota Varachha, Surat, Gujarat 394101
            </p>
            <p className="footer-desc">
              <strong>Hours:</strong> Mon–Sat 9:00 AM – 7:00 PM<br />
              <strong>Phone:</strong>{" "}
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ color: "var(--accent)", fontWeight: 600 }}>
                {SITE_CONFIG.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 {SITE_CONFIG.name} - Foreign Education & Visa Consultant. All rights reserved.
          </div>
          <div>
            Mota Varachha, Surat, Gujarat, India.
          </div>
        </div>
      </div>
    </footer>
  );
}
