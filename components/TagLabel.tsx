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
  ia:         <Brain className="w-4 h-4 mr-1" />,
  code:       <Code className="w-4 h-4 mr-1" />,
  tech:       <Hammer className="w-4 h-4 mr-1" />,
  product:    <Boxes className="w-4 h-4 mr-1" />,       // anciennement Package2, Boxes est plus "produit"
  design:     <Palette className="w-4 h-4 mr-1" />,
  startup:    <Rocket className="w-4 h-4 mr-1" />,
  mobile:     <Smartphone className="w-4 h-4 mr-1" />,
  web:        <Globe className="w-4 h-4 mr-1" />,
  api:        <Share2 className="w-4 h-4 mr-1" />,
  cloud:      <Cloud className="w-4 h-4 mr-1" />,
  carrière:   <Briefcase className="w-4 h-4 mr-1" />,
  inspiration:<Sparkles className="w-4 h-4 mr-1" />,
};

type TagLabelProps = {
  tag: string;
};

export default function TagLabel({ tag }: TagLabelProps) {
  return (
    <span className="inline-flex items-center bg-[#134e4a] text-[#f0fdf4] rounded-lg px-2.5 py-1 text-xs font-semibold capitalize">
      {TAG_ICONS[tag] ?? null}
      {tag}
    </span>
  );
}
