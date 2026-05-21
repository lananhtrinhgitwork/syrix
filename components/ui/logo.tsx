export default function Logo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 15C32 8 45 8 52 15L65 28C72 35 72 45 65 52L52 65C45 72 32 72 25 65L12 52C5 45 5 35 12 28L25 15Z" fill="url(#syrix-glow)" opacity="0.8"/>
      <path d="M32 25C36 21 44 21 48 25L55 32C59 36 59 44 55 48L48 55C44 59 36 59 32 55L25 48C21 44 21 36 25 32L32 25Z" fill="#06b6d4"/>
      <path d="M35 35H45V45H35V35Z" fill="#ffffff"/>
      <text x="85" y="52" fill="#ffffff" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="34" letterSpacing="1">SYRIX</text>
      <text x="215" y="52" fill="#06b6d4" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="34">.AI</text>
      <defs>
        <linearGradient id="syrix-glow" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6"/>
          <stop offset="1" stopColor="#06b6d4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}