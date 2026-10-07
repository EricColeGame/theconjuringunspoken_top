export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "The Conjuring Unspoken Wiki",
  shortName: "Conjuring Unspoken",
  logoText: "TCU",
  tagline: "Guides, Investigation Tools & Story Choices",
  description: "Explore The Conjuring Unspoken Wiki with guides, characters, lore, gameplay tips, updates and community resources to help players master the horror adventure experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://theconjuringunspoken.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://theconjuringunspoken.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.netflix.com/games",
  heroVideoId: "uSN_LlaJAXU", // The Conjuring: Unspoken | Official Game Trailer | Netflix
  social: {
    youtube: "https://www.youtube.com/@Netflix",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
