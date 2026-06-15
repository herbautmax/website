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
    <header className="fixed top-0 left-0 z-40 flex h-14 w-full items-center justify-between border-b border-white/10 bg-ink-800/90 px-4 py-2 backdrop-blur sm:px-8">
      {/* Logo à gauche */}
      <Link
        href="/"
        className="group flex items-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800"
        aria-label="Revenir à l’accueil"
      >
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
          className="rounded text-sm font-semibold text-brand transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800"
          aria-current="page"
        >
          ← Tous les articles
        </Link>
      )}
    </header>
  );
}
