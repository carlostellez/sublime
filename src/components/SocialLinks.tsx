import { visibleSocials } from "@/config/site";
import { SocialIcon, brandHover } from "./SocialIcons";

export default function SocialLinks({ className = "" }: { className?: string }) {
  if (visibleSocials.length === 0) return null;
  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`} aria-label="Redes sociales de Sublime Lab">
      {visibleSocials.map((s) => (
        <li key={s.id}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={`Sublime Lab en ${s.label}`}
            title={s.label}
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface transition hover:-translate-y-0.5 ${brandHover[s.id]} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
          >
            <SocialIcon id={s.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}
