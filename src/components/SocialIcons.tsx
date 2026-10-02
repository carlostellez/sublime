import { useId } from "react";
import type { SocialId } from "@/config/site";

const paths: Record<SocialId, React.ReactNode> = {
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
  ),
  facebook: (
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
  ),
  tiktok: (
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
  ),
  youtube: (
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  ),
};

/** Colores oficiales de cada marca (versión clara / versión para fondo oscuro). */
export const brandText: Record<SocialId, string> = {
  linkedin: "text-[#0A66C2] dark:text-[#70B5F9]",
  instagram: "",
  facebook: "text-[#1877F2] dark:text-[#4599FF]",
  tiktok: "text-[#010101] dark:text-white",
  youtube: "text-[#FF0000] dark:text-[#FF3D3D]",
};

export const brandHover: Record<SocialId, string> = {
  linkedin: "hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 dark:hover:border-[#70B5F9] dark:hover:bg-[#70B5F9]/10",
  instagram: "hover:border-[#E1306C] hover:bg-[#E1306C]/10",
  facebook: "hover:border-[#1877F2] hover:bg-[#1877F2]/10 dark:hover:border-[#4599FF] dark:hover:bg-[#4599FF]/10",
  tiktok: "hover:border-[#FE2C55] hover:bg-[#25F4EE]/10",
  youtube: "hover:border-[#FF0000] hover:bg-[#FF0000]/10 dark:hover:border-[#FF3D3D] dark:hover:bg-[#FF3D3D]/10",
};

export function SocialIcon({ id, className = "h-5 w-5" }: { id: SocialId; className?: string }) {
  const gid = useId();

  if (id === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <linearGradient id={gid} gradientUnits="userSpaceOnUse" x1="2" y1="23" x2="22" y2="1">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset="0.28" stopColor="#FA7E1E" />
            <stop offset="0.55" stopColor="#D62976" />
            <stop offset="0.78" stopColor="#962FBF" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <g fill={`url(#${gid})`}>{paths.instagram}</g>
      </svg>
    );
  }

  if (id === "tiktok") {
    // Logo oficial: capas cian y roja desplazadas + capa principal (negra en claro, blanca en oscuro)
    return (
      <svg viewBox="0 0 24 24" className={`${className} ${brandText.tiktok}`} aria-hidden="true">
        <g fill="#25F4EE" transform="translate(-0.9 -0.7)">{paths.tiktok}</g>
        <g fill="#FE2C55" transform="translate(0.9 0.7)">{paths.tiktok}</g>
        <g fill="currentColor">{paths.tiktok}</g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} ${brandText[id]}`} aria-hidden="true">
      {paths[id]}
    </svg>
  );
}
