"use client";

import { SITE_CONFIG } from "@/config/constants";
import { IconWhatsApp } from "@/components/Icons";

export default function FloatingWhatsApp() {
  const message = "Hello IQ International, I want to inquire about study abroad services.";
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Direct WhatsApp Chat with IQ International"
    >
      <IconWhatsApp size={22} />
      <span>WhatsApp Us</span>
    </a>
  );
}
