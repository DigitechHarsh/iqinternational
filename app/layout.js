import "./globals.css";

export const metadata = {
  title: "IQ International | Foreign Education & Visa Consultant | Mota Varachha, Surat",
  description:
    "IQ International is Surat's trusted study abroad & visa consultancy. Expert coaching for IELTS, PTE, TOEFL, GRE, GMAT, global university admissions for UK, USA, Canada, Australia, NZ, and direct MBBS abroad guidance for Russia & Georgia.",
  keywords: [
    "study abroad Surat",
    "visa consultant Mota Varachha",
    "foreign education consultant Surat",
    "IELTS coaching Surat",
    "PTE classes Mota Varachha",
    "student visa consultant Gujarat",
    "MBBS abroad Russia Georgia",
    "IQ International Surat"
  ],
  authors: [{ name: "IQ International" }],
  openGraph: {
    title: "IQ International - Foreign Education & Visa Consultant, Surat",
    description:
      "One team for coaching, academic admissions, and student visas. Located at Opera Business Hub, Mota Varachha, Surat.",
    url: "https://iqinternational.in",
    siteName: "IQ International",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  // LocalBusiness structured schema for Local SEO in Surat
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IQ International - Foreign Education & Visa Consultant",
    "description": "Comprehensive foreign education admissions, test coaching (IELTS, PTE, GRE), student visa processing, and MBBS abroad consultancy.",
    "url": "https://iqinternational.in",
    "logo": "https://iqinternational.in/assets/logo.png",
    "telephone": "+919825100000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "417, Opera Business Hub, Lajamni Chowk, near Savji Korat Bridge, Maruti Dham Society",
      "addressLocality": "Mota Varachha, Surat",
      "addressRegion": "Gujarat",
      "postalCode": "394101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.24255,
      "longitude": 72.87258
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        {/* Fallback Google Font Carlito (metrics-compatible with Calibri) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
