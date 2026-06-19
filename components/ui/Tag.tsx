export default function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-xl border border-brand/30 bg-brand/15 px-3 py-1 text-sm font-semibold text-brand ${className}`}>
      {children}
    </span>
  );
}
