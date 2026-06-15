import React from 'react';
import { sectionTitleClasses, eyebrowClasses } from '../sectionStyles';

type SectionHeadingProps = {
  /** Petit label en Space Grotesk au-dessus du titre */
  eyebrow?: string;
  /** Titre de section */
  title: string;
  /** id posé sur le titre, pour aria-labelledby */
  id?: string;
  /** Alignement du bloc */
  align?: 'left' | 'center';
  /** Contenu optionnel sous le titre (intro courte) */
  children?: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  id,
  align = 'left',
  children,
  className = '',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`.trim()}>
      {eyebrow ? <span className={eyebrowClasses}>{eyebrow}</span> : null}
      <h2 id={id} className={sectionTitleClasses}>
        {title}
      </h2>
      {children ? <div className="text-base text-muted max-w-prose">{children}</div> : null}
    </div>
  );
}
