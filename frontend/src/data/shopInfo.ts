export type SocialPlatform = "instagram" | "facebook" | "viber" | "messenger";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  handle: string;
  href: string;
}

export interface ShopAddress {
  line1: string;
  city: string;
  region: string;
  country: string;
}

export interface ShopInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: ShopAddress;
  serviceArea: string;
  businessReg: string;
  copyright: string;
  socials: SocialLink[];
}

export const shopInfo: ShopInfo = {
  name: "La Fleur Belle",
  tagline: "Beautiful flowers for every occasion.",
  email: "hello@lafleurbelle.ph",
  phone: "+63 917 000 0000",
  address: {
    line1: "Home studio (address shared on confirmation)",
    city: "Quezon City",
    region: "Metro Manila",
    country: "Philippines",
  },
  serviceArea: "Same-day delivery around Metro Manila.",
  businessReg: "DTI Reg. No. 0000000 — Sole Proprietorship",
  copyright: "© 2026 La Fleur Belle. All rights reserved.",
  socials: [
    {
      platform: "instagram",
      label: "INSTAGRAM",
      handle: "@lafleurbelle.ph",
      href: "https://instagram.com/lafleurbelle.ph",
    },
    {
      platform: "facebook",
      label: "FACEBOOK",
      handle: "La Fleur Belle",
      href: "https://facebook.com/lafleurbelle.ph",
    },
  ],
};
