import { Link } from "react-router-dom";

import { hero } from "@/data/homeContent";

import { FloatingContact } from "./FloatingContact";

const FOCUS_RING =
  "rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2C0C8]";

export function Hero(): JSX.Element {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative -mt-14 overflow-hidden bg-[#F2C0C8]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-t-full bg-white"
          style={{ top: 340, bottom: 0, width: 467 }}
        />
        <img
          src="/images/support_bg/Rectangle%201.svg"
          alt=""
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 53, width: 224, height: 324 }}
        />
        <img
          src="/images/support_bg/Rectangle%202.svg"
          alt=""
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 59, width: 212, height: 235 }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-screen-sm flex-col items-center px-4 pb-8 pt-20">
        <img
          src={hero.logoSrc}
          alt={hero.logoAlt}
          width={56}
          height={56}
          className="relative z-30 h-14 w-14 rounded-full shadow-sm"
          loading="eager"
          decoding="async"
        />

        <h1
          id="hero-heading"
          className="relative z-30 mt-3 text-center font-display text-[44px] font-medium leading-[0.95] tracking-tight text-white drop-shadow-sm sm:text-[56px]"
        >
          {hero.brand}
        </h1>
        <span
          aria-hidden="true"
          className="relative z-10 -mt-2 select-none text-center font-display text-[44px] font-medium leading-[0.95] tracking-tight text-transparent sm:text-[56px]"
          style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.55)" }}
        >
          {hero.brand}
        </span>

        <div className="relative -mt-6 w-full">
          <img
            src={hero.imageSrc}
            alt={hero.imageAlt}
            className="relative z-20 mx-auto block w-full max-w-[300px] object-contain drop-shadow-lg"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="relative z-30 mt-6 flex flex-col items-center gap-3">
          <Link
            to={hero.primaryCta.href}
            aria-label={hero.primaryCta.label}
            className={`block w-[220px] transition-transform hover:-translate-y-[1px] ${FOCUS_RING}`}
          >
            <img
              src="/images/cta/Shop%20Button.svg"
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
            />
          </Link>
          <Link
            to={hero.secondaryCta.href}
            aria-label={hero.secondaryCta.label}
            className={`block w-[220px] transition-transform hover:-translate-y-[1px] ${FOCUS_RING}`}
          >
            <img
              src="/images/cta/Custom%20Order%20Button.svg"
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
            />
          </Link>
        </div>
      </div>

      <FloatingContact />
    </section>
  );
}
