export interface Bouquet {
  slug: string;
  name: string;
  price_php: number;
  images: string[];
  description: string;
  occasions: string[];
  colors: string[];
}

export const bouquets: Bouquet[] = [
  {
    slug: "crimson-ivory-rose",
    name: "Crimson Ivory Rose",
    price_php: 1850,
    images: ["/images/bouquets/crimson-ivory-rose.jpg"],
    description:
      "Twelve long-stem red and ivory roses wrapped in soft cream paper, finished with a satin ribbon. A timeless choice for anniversaries and quiet apologies alike.",
    occasions: ["anniversary", "valentines", "apology"],
    colors: ["red", "ivory", "white"],
  },
  {
    slug: "sunny-bloom-sunflower",
    name: "Sunny Bloom Sunflower",
    price_php: 1450,
    images: ["/images/bouquets/sunny-bloom-sunflower.jpg"],
    description:
      "A cheerful gather of sunflowers and daisies, accented with eucalyptus. Built to brighten a kitchen counter or a graduation stage.",
    occasions: ["birthday", "graduation"],
    colors: ["yellow", "green", "white"],
  },
  {
    slug: "pink-carnation",
    name: "Pink Carnation",
    price_php: 1250,
    images: ["/images/bouquets/pink-carnation.jpg"],
    description:
      "Soft pink carnations layered with baby's breath. Gentle, sentimental, and easy to carry — the everyday flowers you give for no reason at all.",
    occasions: ["birthday", "anniversary"],
    colors: ["pink", "white"],
  },
  {
    slug: "ivory-blush-tulip",
    name: "Ivory Blush Tulip",
    price_php: 1650,
    images: ["/images/bouquets/ivory-blush-tulip.jpg"],
    description:
      "Fifteen Holland tulips in ivory and blush pink, hand-tied with kraft paper. Spring on a stem, equally at home on a desk or a wedding aisle.",
    occasions: ["wedding", "proposal", "anniversary"],
    colors: ["ivory", "pink", "white"],
  },
  {
    slug: "lavender-dream",
    name: "Lavender Dream",
    price_php: 1550,
    images: ["/images/bouquets/lavender-dream.jpg"],
    description:
      "Fresh lavender, lisianthus, and dusty miller tucked into a linen wrap. A calmer, more grown-up bouquet for thoughtful occasions.",
    occasions: ["birthday", "graduation", "anniversary"],
    colors: ["purple", "lavender", "white"],
  },
];

export const topPickSlugs: string[] = [
  "crimson-ivory-rose",
  "sunny-bloom-sunflower",
  "pink-carnation",
];

export function getBouquetBySlug(slug: string): Bouquet | undefined {
  return bouquets.find((b) => b.slug === slug);
}
