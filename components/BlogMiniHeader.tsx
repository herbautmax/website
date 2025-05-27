import Link from "next/link";
import Image from "next/image";

type BlogMiniHeaderProps = {
  /** 
   * Optionnel : 
   * - "articles" => bouton retour à la liste des articles 
   * - "home" => pas de bouton (logo seul)
   */
  variant?: "articles" | "home";
};

export default function BlogMiniHeader({ variant = "home" }: BlogMiniHeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#23272a]/90 border-b border-[#23272e] backdrop-blur flex items-center justify-between px-4 sm:px-8 py-2 h-14">
      {/* Logo à gauche */}
      <Link href="/" className="flex items-center gap-2 group">
        <Image
          src="/logo.png"
          alt="Logo Maxime Herbaut"
          width={32}
          height={32}
          className="rounded-md"
          priority
        />
        <span className="sr-only">Accueil</span>
      </Link>
      {/* Affiche le lien retour uniquement si variant = "articles" */}
      {variant === "articles" && (
        <Link
          href="/blog"
          className="text-[#10b981] text-sm font-semibold hover:underline transition"
        >
          ← Tous les articles
        </Link>
      )}
    </header>
  );
}
