import { Link } from "react-router-dom";

import { SectionDivider } from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/homeContent";

export function Hero(): JSX.Element {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cream"
    >
      <div className="mx-auto flex max-w-screen-sm flex-col px-4 pb-12 pt-6 md:pt-10">
        <div className="relative w-full">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-6 h-32 w-32 rounded-full bg-rose-soft/40 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 top-24 h-24 w-24 rounded-full bg-rose-soft/25 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-2 h-2 w-2 rounded-full bg-rose-deep/40"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-40 h-1.5 w-1.5 rounded-full bg-rose-deep/30"
          />

          <div className="relative ml-auto aspect-[391/425] w-[92%] overflow-hidden rounded-[2rem] bg-rose-soft/30 shadow-sm">
            <img
              src={hero.imageSrc}
              alt={hero.imageAlt}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="mt-8 w-full text-center">
          <h1
            id="hero-heading"
            className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl"
          >
            {hero.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-prose font-body text-base leading-relaxed text-ink/70">
            {hero.body}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3">
            <Button asChild size="lg" className="w-full max-w-xs">
              <Link to={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full max-w-xs"
            >
              <Link to={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>

        <SectionDivider className="mt-10" />
      </div>
    </section>
  );
}
