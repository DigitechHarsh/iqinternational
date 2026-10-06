import { SITE_IMAGES } from "@/config/constants";
import { IconCheck } from "@/components/Icons";

const SERVICES = [
  {
    step: "SERVICE 01 • LANGUAGE & ENTRANCE COACHING",
    title: "Test Preparation & Coaching: IELTS, TOEFL, PTE, GRE and GMAT",
    description:
      "A high standardized test score opens doors to top-tier international universities and scholarship opportunities. We deliver structured coaching modules designed to improve core language proficiency and exam-taking techniques.",
    features: [
      "IELTS Academic & General training with dedicated speaking and writing practice",
      "PTE Academic computer-delivered mock tests with fast AI score benchmarking",
      "TOEFL, GRE & GMAT quantitative and verbal reasoning guidance",
      "Flexible batch timings: in-person sessions in Mota Varachha or live online batches",
    ],
    image: SITE_IMAGES.serviceTestPrep,
    alt: "Student with headphones and laptop taking an online practice test",
    reverse: false,
  },
  {
    step: "SERVICE 02 • UNIVERSITY SELECTION & ENROLLMENT",
    title: "Global Academic Admissions: Bachelors, Masters & MBA Programs",
    description:
      "Choosing where to invest your next two to four years requires realistic profile evaluation. We align your GPA, English scores, career objectives, and financial parameters with vetted institutions across primary study destinations.",
    features: [
      "In-depth profile assessment for Bachelor's, Master's, PG Diplomas, and MBA courses",
      "Assistance with university shortlisting across the UK, USA, Canada, Australia & New Zealand",
      "Scholarship identification and grant application filing",
      "Direct follow-up with international university admissions offices",
    ],
    image: SITE_IMAGES.serviceAdmissions,
    alt: "Students reviewing international university brochures and course catalogs",
    reverse: true,
  },
  {
    step: "SERVICE 03 • DOCUMENTATION & MOCK INTERVIEWS",
    title: "End-to-End Visa Processing & SOP Guidance",
    description:
      "A single oversight in financial records or a generic Statement of Purpose can jeopardize an otherwise solid profile. Our dedicated visa team ensures your visa file meets the exacting compliance requirements of each embassy.",
    features: [
      "Authentic Statement of Purpose (SOP) guidance reflecting your genuine intent",
      "Comprehensive financial paperwork review (ITR, bank solvency, education loan records)",
      "One-on-one mock visa interviews with feedback for high-stress embassy appointments",
      "Biometrics appointment scheduling and pre-departure briefings",
    ],
    image: SITE_IMAGES.serviceVisa,
    alt: "Passport, travel documents, pen and checklist on desk for visa processing",
    reverse: false,
  },
  {
    step: "SERVICE 04 • MEDICAL PROGRAMMES",
    title: "MBBS Abroad: Direct Admissions in Russia & Georgia",
    description:
      "For medical aspirants in Surat and Gujarat seeking affordable, high-standard international medical degrees, IQ International provides verified pathways to premier government and private medical universities.",
    features: [
      "NMC (National Medical Commission) and WHO compliant 6-year MBBS curriculums",
      "100% English medium instruction with clinical training in multi-specialty hospitals",
      "Transparent fee structures payable semester-wise directly to the university",
      "Guaranteed hostel accommodation and Indian food facilities guidance",
    ],
    image: SITE_IMAGES.serviceMbbs,
    alt: "Stethoscope on medical textbook and clinical diagnostic equipment",
    reverse: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section section-offwhite" aria-labelledby="services-heading">
      <div className="container">
        <div>
          <span className="section-label">Core Capabilities</span>
          <h2 id="services-heading">Everything under one roof, from first test to final visa stamp.</h2>
          <p className="section-lead">
            We operate as an integrated advisory service. Students never have to shuffle between an independent coaching tutor, an external SOP writer, and a disjointed visa agent.
          </p>
        </div>

        {/* Editorial Layout: Alternating Image / Text Rows */}
        <div className="services-editorial">
          {SERVICES.map((srv, index) => (
            <div key={index} className={`service-row ${srv.reverse ? "reverse" : ""}`}>
              {/* Image Media Block */}
              <div className="service-media">
                <img
                  src={srv.image}
                  alt={srv.alt}
                  className="service-image"
                  loading="lazy"
                  width="540"
                  height="340"
                />
              </div>

              {/* Text Content Block */}
              <div className="service-content">
                <span className="service-step-tag">{srv.step}</span>
                <h3 className="service-title">{srv.title}</h3>
                <p>{srv.description}</p>

                <ul className="service-features-list">
                  {srv.features.map((item, fIdx) => (
                    <li key={fIdx} className="service-feature-item">
                      <IconCheck size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why IQ International Block */}
        <div className="why-iq-box">
          <h3>Why Choose IQ International in Mota Varachha?</h3>
          <p>
            Most students face friction when their IELTS teacher doesn’t know their target university requirements, or their visa agent is unfamiliar with their academic coursework. At IQ International, our coaching faculty and immigration case officers collaborate on every file.
          </p>
          <div className="why-iq-points">
            <div>
              <div className="why-point-title">One Unified Team</div>
              <div className="why-point-desc">
                Your test score targets, course preferences, and visa documentation strategy are synchronized from day one.
              </div>
            </div>
            <div>
              <div className="why-point-title">Zero Hidden Fees</div>
              <div className="why-point-desc">
                Clear documentation of university tuition and embassy charges. No inflated surprises or forced university tie-ins.
              </div>
            </div>
            <div>
              <div className="why-point-title">Locally Accountable</div>
              <div className="why-point-desc">
                Walk into our office at Opera Business Hub whenever you or your parents want an in-person file status update.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
