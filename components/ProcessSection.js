export default function ProcessSection() {
  const steps = [
    {
      number: "STEP 01",
      title: "Counselling",
      description: "Initial walk-in or virtual evaluation of your academic history, goals, and family budget.",
    },
    {
      number: "STEP 02",
      title: "Profile Mapping",
      description: "Carefully shortlisting universities, intakes, and specific degree programs that match your credentials.",
    },
    {
      number: "STEP 03",
      title: "Test Preparation",
      description: "Structured coaching for IELTS, PTE, TOEFL, or GRE with regular simulated mock tests.",
    },
    {
      number: "STEP 04",
      title: "Application & SOP",
      description: "Meticulous dossier submission, university fees handling, and personalized Statement of Purpose drafting.",
    },
    {
      number: "STEP 05",
      title: "Visa & Departure",
      description: "Embassy file submission, financial auditing, mock visa interviews, and pre-flight orientation.",
    },
  ];

  return (
    <section id="process" className="section" aria-labelledby="process-heading">
      <div className="container">
        <div>
          <span className="section-label">Our Process</span>
          <h2 id="process-heading">Five systematic steps to your overseas university.</h2>
          <p className="section-lead">
            We break down the overseas education journey into transparent stages so you and your family always know what comes next.
          </p>
        </div>

        <div className="process-track">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step">
              <span className="step-num">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
