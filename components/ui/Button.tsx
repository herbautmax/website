import React from 'react';

export type ButtonVariant = 'primary' | 'outline';
export type ButtonSize = 'md' | 'sm';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-brand-ink hover:bg-brand-hover',
  outline: 'border border-white/15 text-mist hover:border-brand/60 hover:text-brand',
};

const sizes: Record<ButtonSize, string> = {
  md: 'px-7 py-3.5 text-base',
  sm: 'px-4 py-1.5 text-sm',
};

/**
 * Helper de classes — à utiliser quand on doit poser le style sur un autre
 * élément (ex. next/link <Link>).
 */
export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  extra = ''
): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

/**
 * CTA rendu en <a> (liens internes par ancre, mailto, externes…).
 * Pour next/link, préférer buttonClasses() sur le composant <Link>.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
