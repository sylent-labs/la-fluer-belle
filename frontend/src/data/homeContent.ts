export interface HeroContent {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
}

export interface FeatureCardContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export interface BrandSectionContent {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface TaglineContent {
  headline: string;
  subtitle: string;
}

export interface AboutTeaserContent {
  eyebrow: string;
  headline: string;
  bio: string;
  locationLabel: string;
  photos: { src: string; alt: string }[];
}

export type OrderStepIcon = "browse" | "inquiry" | "payment" | "receive";

export interface OrderStep {
  icon: OrderStepIcon;
  title: string;
  description: string;
}

export const hero: HeroContent = {
  eyebrow: "La Fleur Belle",
  headline: "Beautiful Flowers for every Occasion",
  body: "Hand-arranged bouquets from a small home studio in Quezon City. Crafted to order, delivered the same day around Metro Manila.",
  primaryCta: { label: "Shop Bouquets", href: "/bouquets" },
  secondaryCta: { label: "Custom Order", href: "/custom" },
  imageSrc: "/images/hero-bouquet.jpg",
  imageAlt: "A hand-tied bouquet of pink and ivory roses",
};

export const flowersTellStories: BrandSectionContent = {
  headline: "Where Flowers Tell Stories",
  body: "Each arrangement is built around the moment it's meant for — a first date, a long marriage, a graduation, a goodbye. Tell us the story and we'll choose the stems.",
  ctaLabel: "Explore Bouquets",
  ctaHref: "/bouquets",
};

export const featureCards: FeatureCardContent[] = [
  {
    title: "La Fleur Belle Gift Box",
    imageSrc: "/images/gift-box.jpg",
    imageAlt: "Floral arrangement in a kraft gift box tied with ribbon",
  },
  {
    title: "Desiccated Blooms",
    imageSrc: "/images/desiccated-blooms.jpg",
    imageAlt: "Dried flower arrangement in warm earth tones",
  },
];

export const tagline: TaglineContent = {
  headline: "Your perfect bouquet awaits.",
  subtitle: "Let's make it yours.",
};

export const aboutTeaser: AboutTeaserContent = {
  eyebrow: "ABOUT",
  headline: "A small studio with a soft spot for flowers.",
  bio: "La Fleur Belle is a home-based florist run out of Quezon City. Every bouquet is built by hand, one order at a time — no warehouse, no shortcuts. We work with seasonal stems from local growers whenever we can.",
  locationLabel: "Quezon City, Philippines",
  photos: [
    {
      src: "/images/about/studio-1.jpg",
      alt: "Florist trimming stems at a wooden workbench",
    },
    {
      src: "/images/about/studio-2.jpg",
      alt: "Close-up of a half-finished bouquet on brown paper",
    },
  ],
};

export const photoStrip: { src: string; alt: string }[] = [
  { src: "/images/strip/strip-1.jpg", alt: "Pink roses in soft morning light" },
  { src: "/images/strip/strip-2.jpg", alt: "Yellow sunflowers wrapped in kraft paper" },
  { src: "/images/strip/strip-3.jpg", alt: "White tulips arranged on a marble surface" },
];

export const orderSteps: OrderStep[] = [
  {
    icon: "browse",
    title: "Browse",
    description:
      "Scroll the catalog or use Custom Order to describe something one-of-a-kind.",
  },
  {
    icon: "inquiry",
    title: "Send Inquiry",
    description:
      "Fill out the form with the occasion, budget, colors, and delivery date.",
  },
  {
    icon: "payment",
    title: "Confirm & Pay",
    description:
      "We reply with a quote and payment details over Messenger, Viber, or SMS.",
  },
  {
    icon: "receive",
    title: "Receive",
    description:
      "Same-day delivery around Metro Manila, hand-carried to the recipient.",
  },
];
