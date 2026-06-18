export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="Syrix Logo" className={`rounded-[6px] ${className}`} />
      <span className="text-xl font-bold tracking-tight text-white font-sans">Syrix</span>
    </div>
  );
}