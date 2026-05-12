import type { CSSProperties } from "react";

import { shopInfo, type SocialPlatform } from "@/data/shopInfo";

const ICON_SRC: Record<SocialPlatform, string> = {
  instagram: "/images/instagram-svgrepo-com%202.svg",
  facebook: "/images/facebook-svgrepo-com%202.svg",
  viber: "/images/floating_contact/viber-svgrepo-com%202.svg",
  messenger: "/images/facebook-svgrepo-com%202.svg",
};

const FLOATING_PLATFORMS: readonly SocialPlatform[] = [
  "instagram",
  "facebook",
  "viber",
];

function maskStyle(src: string): CSSProperties {
  return {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  };
}

export function FloatingContact(): JSX.Element | null {
  const links = FLOATING_PLATFORMS.map((platform) =>
    shopInfo.socials.find((s) => s.platform === platform),
  ).filter(
    (link): link is (typeof shopInfo.socials)[number] => link !== undefined,
  );

  if (links.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Quick contact"
      className="pointer-events-none absolute z-30 flex flex-col gap-[9px]"
      style={{ top: 441, left: 21, width: 51, height: 171 }}
    >
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.href}
          aria-label={`${link.label} — ${link.handle}`}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
          className="pointer-events-auto inline-flex h-[51px] w-[50px] items-center justify-center rounded-full bg-[#D9D9D9]/[0.28] backdrop-blur-sm transition-colors hover:bg-[#D9D9D9]/[0.45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2C0C8]"
        >
          <span
            aria-hidden="true"
            className="block h-[27px] w-[27px] bg-[#C3858F]"
            style={maskStyle(ICON_SRC[link.platform])}
          />
        </a>
      ))}
    </nav>
  );
}
