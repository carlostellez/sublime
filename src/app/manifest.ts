import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | Lanyards corporativos`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: site.themeColor.light,
    theme_color: "#164854",
    lang: site.language,
    icons: [{ src: site.logo, sizes: "504x495", type: "image/png", purpose: "any" }],
  };
}
