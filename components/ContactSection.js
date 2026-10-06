"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/config/constants";
import { IconMapPin, IconClock, IconPhone, IconWhatsApp, IconSend } from "@/components/Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interestedIn: "Study Abroad Admission",
    country: "UK",
    mode: "In-Person (Mota Varachha)",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    // Indian 10-digit mobile number validation (clean non-digits first)
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (!cleanedPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Build structured inquiry message
    const messageLines = [
      "Hello IQ International, I'd like to enquire.",
      `Name: ${formData.fullName.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      formData.email.trim() ? `Email: ${formData.email.trim()}` : null,
      `Interested in: ${formData.interestedIn}`,
      `Country: ${formData.country}`,
      `Mode: ${formData.mode}`,
      formData.message.trim() ? `Message: ${formData.message.trim()}` : null,
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="section section-offwhite" aria-labelledby="contact-heading">
      <div className="container">
        <div>
          <span className="section-label">Get In Touch</span>
          <h2 id="contact-heading">Book your consultation session in Mota Varachha.</h2>
          <p className="section-lead">
            Fill out the details below to start a direct WhatsApp inquiry, or visit our office at Opera Business Hub.
          </p>
        </div>

        <div className="contact-layout">
          {/* Interactive WhatsApp Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Enquiry Form</h3>
              <p>Your details are formatted into a WhatsApp message directly to our counselling team.</p>
            </div>

            <form onSubmit={handleSubmit} className="enquiry-form" noValidate>
              {/* Row: Name and Phone */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Parth Patel"
                    className={`form-input ${errors.fullName ? "error" : ""}`}
                    required
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    required
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>

              {/* Row: Email and Program */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`form-input ${errors.email ? "error" : ""}`}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="interestedIn" className="form-label">
                    Interested In <span className="required">*</span>
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Study Abroad Admission">Study Abroad Admission</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="IELTS Coaching">IELTS</option>
                    <option value="PTE Coaching">PTE</option>
                    <option value="TOEFL Coaching">TOEFL</option>
                    <option value="GRE Coaching">GRE</option>
                    <option value="GMAT Coaching">GMAT</option>
                    <option value="MBBS Abroad">MBBS Abroad</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row: Country and Mode */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="country" className="form-label">
                    Preferred Country <span className="required">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="UK">United Kingdom (UK)</option>
                    <option value="USA">United States (USA)</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Russia">Russia (MBBS)</option>
                    <option value="Georgia">Georgia (MBBS)</option>
                    <option value="Not sure">Not sure / Need Advice</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Counselling Mode</label>
                  <div className="radio-options">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="mode"
                        value="In-Person (Mota Varachha)"
                        checked={formData.mode === "In-Person (Mota Varachha)"}
                        onChange={handleChange}
                      />
                      <span>In-Person (Surat)</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="mode"
                        value="Online"
                        checked={formData.mode === "Online"}
                        onChange={handleChange}
                      />
                      <span>Online (Phone / Zoom)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message or Questions (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your highest qualification, current IELTS score, or preferred intake month..."
                  className="form-textarea"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-whatsapp"
                disabled={isSubmitting}
                style={{ width: "100%", padding: "0.9rem 1.5rem" }}
              >
                {isSubmitting ? (
                  <span>Opening WhatsApp...</span>
                ) : (
                  <>
                    <IconSend size={18} />
                    <span>Send Inquiry via WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details & Office Coordinates Beside Form */}
          <div className="contact-meta">
            <div className="contact-card">
              {/* Address */}
              <div className="contact-item">
                <IconMapPin size={22} />
                <div>
                  <div className="contact-item-title">Office Address</div>
                  <div className="contact-item-desc">{SITE_CONFIG.address}</div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="contact-item">
                <IconClock size={22} />
                <div>
                  <div className="contact-item-title">Consulting Hours</div>
                  <div className="contact-item-desc">{SITE_CONFIG.officeHours}</div>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="contact-item">
                <IconPhone size={22} />
                <div>
                  <div className="contact-item-title">Telephone</div>
                  <div className="contact-item-desc">
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} style={{ color: "var(--accent)", fontWeight: 700 }}>
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="contact-item">
                <IconWhatsApp size={22} />
                <div>
                  <div className="contact-item-title">WhatsApp Chat</div>
                  <div className="contact-item-desc">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--whatsapp-green)", fontWeight: 700 }}
                    >
                      {SITE_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="map-container">
              <iframe
                title="IQ International Location at Opera Business Hub, Surat"
                src={SITE_CONFIG.googleMapsEmbedUrl}
                className="map-iframe"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
