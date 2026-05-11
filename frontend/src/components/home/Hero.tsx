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
      <div className="relative mx-auto flex max-w-screen-sm flex-col items-center px-4 pb-10 pt-20">
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
            src="/images/Rectangle%201.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-4 z-0 w-[82%] -translate-x-1/2"
          />

          <img
            src="/images/p2.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 bottom-2 z-10 w-20"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/p5.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 bottom-6 z-10 w-20"
            loading="lazy"
            decoding="async"
          />

          <img
            src={hero.imageSrc}
            alt={hero.imageAlt}
            className="relative z-20 mx-auto block w-[96%] max-w-[420px] object-contain drop-shadow-lg"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="relative z-30 mt-2 flex flex-col items-center gap-3">
          <Link
            to={hero.primaryCta.href}
            aria-label={hero.primaryCta.label}
            className={`block w-[220px] transition-transform hover:-translate-y-[1px] ${FOCUS_RING}`}
          >
            <img
              src="/images/Shop%20Button%20(1).svg"
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
              src="/images/Custom%20Order%20Button.svg"
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
