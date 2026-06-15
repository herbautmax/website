import Link from "next/link";
import { content } from "@/content/site";

type BlogMiniHeaderProps = {
  /**
   * Optionnel :
   * - "articles" => bouton retour à la liste des articles
   * - "home" => pas de bouton (monogramme seul)
   */
  variant?: "articles" | "home";
};

export default function BlogMiniHeader({ variant = "home" }: BlogMiniHeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-40 w-full border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10">
        {/* Retour au site principal */}
        <Link
          href="/"
          className="group flex select-none items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-[0.6rem] bg-brand text-base font-extrabold tracking-tightest text-brand-ink"
            aria-hidden="true"
          >
            MH
          </span>
          <span className="text-[1.05rem] font-bold tracking-tight text-mist transition group-hover:text-brand">
            Maxime Herbaut
          </span>
        </Link>

        {/* Affiche le lien retour uniquement si variant = "articles" */}
        {variant === "articles" && (
          <Link
            href="/blog"
            className="rounded text-sm font-semibold text-brand transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            {content.blog.backToArticles}
          </Link>
        )}
      </nav>
    </header>
  );
}
