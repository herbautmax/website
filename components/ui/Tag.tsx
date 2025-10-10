export default function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-xl border border-[#10b981]/30 bg-[#10b981]/15 px-3 py-1 text-[#10b981] font-semibold text-sm ${className}`}>
      {children}
    </span>
  );
}
