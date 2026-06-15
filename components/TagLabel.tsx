import {
  Brain,
  Code,
  Hammer,
  Boxes,
  Palette,
  Rocket,
  Smartphone,
  Globe,
  Share2,
  Cloud,
  Briefcase,
  Sparkles,
} from "lucide-react";
import React from "react";

const TAG_ICONS: Record<string, React.ReactNode> = {
  ia:         <Brain className="w-3.5 h-3.5" />,
  code:       <Code className="w-3.5 h-3.5" />,
  tech:       <Hammer className="w-3.5 h-3.5" />,
  product:    <Boxes className="w-3.5 h-3.5" />,       // anciennement Package2, Boxes est plus "produit"
  design:     <Palette className="w-3.5 h-3.5" />,
  startup:    <Rocket className="w-3.5 h-3.5" />,
  mobile:     <Smartphone className="w-3.5 h-3.5" />,
  web:        <Globe className="w-3.5 h-3.5" />,
  api:        <Share2 className="w-3.5 h-3.5" />,
  cloud:      <Cloud className="w-3.5 h-3.5" />,
  carrière:   <Briefcase className="w-3.5 h-3.5" />,
  inspiration:<Sparkles className="w-3.5 h-3.5" />,
};

type TagLabelProps = {
  tag: string;
};

export default function TagLabel({ tag }: TagLabelProps) {
  const icon = TAG_ICONS[tag] ?? null;
  return (
    <span className="inline-flex items-center gap-1 rounded-lg border border-brand/20 bg-brand-soft px-2.5 py-1 text-xs font-semibold capitalize text-fog">
      {icon ? <span className="text-brand" aria-hidden="true">{icon}</span> : null}
      {tag}
    </span>
  );
}
