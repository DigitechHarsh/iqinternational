// Lightweight inline SVG line icons
export function IconPhone({ className = "", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

export function IconClock({ className = "", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

export function IconMapPin({ className = "", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export function IconCheck({ className = "", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export function IconChevronLeft({ className = "", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

export function IconChevronRight({ className = "", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

export function IconMenu({ className = "", size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

export function IconClose({ className = "", size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

/* Official authentic WhatsApp Icon */
export function IconWhatsApp({ className = "", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.808.484 3.504 1.328 4.977L2 22l5.163-1.312a9.97 9.97 0 0 0 4.868 1.258h.004c5.533 0 10.027-4.494 10.027-10.031C22.062 6.494 17.568 2 12.031 2zm0 18.336a8.27 8.27 0 0 1-4.223-1.155l-.303-.18-3.064.778.818-2.986-.197-.313a8.28 8.28 0 0 1-1.325-4.45c0-4.57 3.718-8.288 8.294-8.288 4.57 0 8.288 3.718 8.288 8.288 0 4.571-3.718 8.289-8.291 8.289zm4.542-6.208c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.561.125-.166.249-.643.81-.789.976-.145.166-.291.187-.54.062-.249-.125-1.05-.387-2-1.234-.739-.66-1.238-1.475-1.383-1.724-.145-.249-.015-.384.109-.508.112-.111.249-.291.374-.436.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.436-.062-.125-.561-1.35-.769-1.849-.203-.485-.408-.419-.561-.427-.145-.007-.311-.008-.478-.008s-.436.062-.664.311c-.228.249-.872.852-.872 2.077 0 1.226.893 2.41 1.018 2.576.125.166 1.756 2.682 4.254 3.76.594.257 1.058.41 1.42.525.597.19 1.14.163 1.569.099.479-.071 1.472-.602 1.68-1.184.208-.582.208-1.08.145-1.184-.062-.104-.228-.166-.477-.291z" />
    </svg>
  );
}

export function IconSend({ className = "", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}
