import React from 'react';

export type ChipVariant = 'soft' | 'tint';

const base =
  'inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-semibold border';

const variants: Record<ChipVariant, string> = {
  // Pastille neutre sur surface grise du design (ink-800) — passions
  soft: 'bg-ink-800 text-fog border-white/[0.06]',
  // Pastille tintée émeraude — compétences, badges forts
  tint: 'bg-brand/15 text-brand border-brand/30',
};

type ChipProps = {
  /** Icône lucide (ou autre) posée à gauche ; héritera de text-brand en variante soft */
  icon?: React.ReactNode;
  variant?: ChipVariant;
  className?: string;
  children: React.ReactNode;
};

export default function Chip({
  icon,
  variant = 'soft',
  className = '',
  children,
}: ChipProps) {
  return (
    <span className={`${base} ${variants[variant]} ${className}`.trim()}>
      {icon ? (
        <span className={variant === 'soft' ? 'text-brand' : undefined} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  );
}
