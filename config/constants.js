/**
 * ============================================================================
 * IQ INTERNATIONAL - SITE CONFIGURATION & CONTENT SETTINGS
 * ============================================================================
 */

export const SITE_CONFIG = {
  // Brand details
  name: "IQ International",
  legalName: "IQ International - Foreign Education & Visa Consultant",
  tagline: "Foreign Education & Visa Consultant",
  locationShort: "Mota Varachha, Surat",

  // CONTACT INFORMATION
  phone: "+91 98251 00000",
  phoneRaw: "+919825100000",
  
  // WhatsApp Number (91 + 10 digits)
  whatsappNumber: "919825100000",
  whatsappDisplay: "+91 98251 00000",

  // Physical Office Address
  address: "417, Opera Business Hub, Lajamni Chowk, near Savji Korat Bridge, Maruti Dham Society, Mota Varachha, Surat, Gujarat 394101",
  addressShort: "417, Opera Business Hub, Mota Varachha, Surat - 394101",

  // Operating Hours
  officeHours: "Monday to Saturday, 9:00 AM – 7:00 PM (Closed Sundays)",
  officeHoursShort: "Mon–Sat 9:00 AM – 7:00 PM",

  // Google Maps Embed Query URL for Opera Business Hub, Surat
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Opera+Business+Hub,+Lajamni+Chowk,+Maruti+Dham+Society,+Mota+Varachha,+Surat,+Gujarat+394101&t=&z=15&ie=UTF8&iwloc=&output=embed",

  // Logo Reference
  logoUrl: "/assets/logo.png",
};

/**
 * HIGH-RESOLUTION IMAGES FOR HERO SLIDER & SECTIONS
 * All hero slides use custom-generated high-resolution images placed in /public/assets/images/.
 */
export const SITE_IMAGES = {
  // 5 Hero Slides (Mapped directly to services)
  heroSlide1: "/assets/images/hero-1-campus.jpg",      // Campus & Study Abroad
  heroSlide2: "/assets/images/hero-2-coaching.jpg",    // IELTS / PTE / GRE Classroom Coaching
  heroSlide3: "/assets/images/hero-3-visa.jpg",        // Visa Filing, SOP & Embassy Consultation
  heroSlide4: "/assets/images/hero-4-mbbs.jpg",        // MBBS Medical University & Clinical Doctors
  heroSlide5: "/assets/images/hero-5-admissions.jpg",  // Academic Admissions & Offer Letters

  // About Section (One-on-one student counselling at desk)
  aboutGuidance: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",

  // Services (Alternating editorial rows)
  serviceTestPrep: "/assets/images/hero-2-coaching.jpg",
  serviceAdmissions: "/assets/images/hero-5-admissions.jpg",
  serviceVisa: "/assets/images/hero-3-visa.jpg",
  serviceMbbs: "/assets/images/hero-4-mbbs.jpg",

  // Destinations (5 distinct country images)
  destUk: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  destUsa: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80",
  destCanada: "https://images.unsplash.com/photo-1517935703635-27190545291e?auto=format&fit=crop&w=800&q=80",
  destAustralia: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
  destNz: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",

  // Contact / Office reception image
  contactOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
};
