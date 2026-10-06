import { SITE_IMAGES } from "@/config/constants";

const DESTINATIONS = [
  {
    country: "United Kingdom",
    badge: "1-Year Masters",
    note: "Shorter 1-year postgraduate degrees, 2-year Graduate Route work visa, and renowned Russell Group universities.",
    image: SITE_IMAGES.destUk,
    alt: "London United Kingdom landmark with red buses and classic architecture",
  },
  {
    country: "United States",
    badge: "STEM 3-Yr OPT",
    note: "World-leading research ecosystems, generous graduate assistantships, and 36-month STEM work authorization.",
    image: SITE_IMAGES.destUsa,
    alt: "United States university campus collegiate building",
  },
  {
    country: "Canada",
    badge: "Co-op & PGWP",
    note: "Industry-integrated co-op terms, Post-Graduation Work Permits (PGWP), and transparent transition routes.",
    image: SITE_IMAGES.destCanada,
    alt: "Canada scenic cityscape and modern university setting",
  },
  {
    country: "Australia",
    badge: "Post-Study Rights",
    note: "Prestigious Group of Eight universities, high minimum wages, and extended regional post-study work permits.",
    image: SITE_IMAGES.destAustralia,
    alt: "Sydney Australia harbour and iconic landmark",
  },
  {
    country: "New Zealand",
    badge: "Safe & Innovative",
    note: "Globally recognized 8 state universities, hands-on applied curricula, and exceptional quality of life.",
    image: SITE_IMAGES.destNz,
    alt: "New Zealand majestic landscape and modern university surroundings",
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="section section-offwhite" aria-labelledby="destinations-heading">
      <div className="container">
        <div>
          <span className="section-label">Global Study Hubs</span>
          <h2 id="destinations-heading">Top destinations chosen by Gujarati students.</h2>
          <p className="section-lead">
            Whether your priority is post-study employment, faster master’s completion, or long-term career growth, we map you to the right country.
          </p>
        </div>

        {/* Staggered Horizontal Strip */}
        <div className="destinations-staggered">
          {DESTINATIONS.map((dest, idx) => (
            <div key={idx} className="destination-card">
              <div className="destination-img-wrap">
                <img
                  src={dest.image}
                  alt={dest.alt}
                  className="destination-img"
                  loading="lazy"
                  width="400"
                  height="160"
                />
              </div>
              <div className="destination-info">
                <h3 className="destination-country">{dest.country}</h3>
                <p className="destination-note">{dest.note}</p>
                <span className="destination-tag">{dest.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
