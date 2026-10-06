import { SITE_CONFIG } from "@/config/constants";
import { IconClock, IconMapPin, IconPhone } from "@/components/Icons";

export default function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="container">
        <div className="info-strip-inner">
          {/* Office Working Hours */}
          <div className="info-item">
            <IconClock size={16} />
            <span>
              <strong>Office Hours:</strong> {SITE_CONFIG.officeHoursShort}
            </span>
          </div>

          {/* Location in Surat */}
          <div className="info-item">
            <IconMapPin size={16} />
            <span>
              <strong>Location:</strong> Opera Business Hub, Mota Varachha, Surat
            </span>
          </div>

          {/* Direct Phone Line */}
          <div className="info-item">
            <IconPhone size={16} />
            <span>
              Direct Inquiries:{" "}
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="info-link">
                {SITE_CONFIG.phone}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
