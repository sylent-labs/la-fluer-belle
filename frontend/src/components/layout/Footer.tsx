import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { shopInfo, type SocialPlatform } from "@/data/shopInfo";

interface FooterLink {
  to: string;
  label: string;
}

const FOOTER_LINKS: readonly FooterLink[] = [
  { to: "/about", label: "About" },
  { to: "/bouquets", label: "Bouquets" },
  { to: "/custom", label: "Custom Order" },
  { to: "/faq", label: "Delivery Information" },
  { to: "/faq", label: "FAQ" },
];

const SOCIAL_ICONS: Record<SocialPlatform, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  messenger: MessageCircle,
  viber: Phone,
};

export function Footer() {
  const { name, address, businessReg, copyright, email, socials } = shopInfo;

  return (
    <footer className="bg-mauve text-cream">
      <div className="mx-auto flex max-w-screen-md flex-col items-center gap-10 px-6 py-12 text-center">
        <div
          aria-hidden="true"
          className="flex h-20 w-20 items-center justify-center rounded-full border border-cream/40 bg-cream/10 font-display text-2xl leading-none text-cream"
        >
          LFB
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-cream/90">
            {FOOTER_LINKS.map((link) => (
              <li key={`${link.to}-${link.label}`}>
                <Link
                  to={link.to}
                  className="transition-colors hover:text-cream focus-visible:text-cream focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-col items-center gap-3 font-body text-sm">
          {socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.platform];
            return (
              <li key={social.platform}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-cream/90 transition-colors hover:text-cream focus-visible:text-cream focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.2em]">
                    {social.label}
                  </span>
                  <span className="text-cream">{social.handle}</span>
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 text-cream/90 transition-colors hover:text-cream focus-visible:text-cream focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em]">Email</span>
              <span className="text-cream">{email}</span>
            </a>
          </li>
        </ul>

        <div className="space-y-1 font-body text-xs text-cream/80">
          <p>
            {address.city}, {address.region}, {address.country}
          </p>
          <p>{businessReg}</p>
          <p className="font-display text-sm text-cream">{name}</p>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
