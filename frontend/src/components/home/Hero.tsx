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
        <img
          src="/images/support_bg/Ellipse%201.svg"
          alt=""
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 274, width: 412, height: 467 }}
        />
        <div
          className="absolute inset-x-0 bg-white"
          style={{ top: 488, bottom: 0 }}
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

      <div className="relative z-10 mx-auto flex w-full max-w-screen-sm flex-col items-center px-[21px] pb-[159px] pt-[38px]">
        <img
          src={hero.logoSrc}
          alt={hero.logoAlt}
          width={56}
          height={56}
          className="relative z-30 h-14 w-14 rounded-full opacity-[0.89] shadow-sm"
          loading="eager"
          decoding="async"
        />

        <h1
          id="hero-heading"
          className="relative z-30 -mt-[8px] text-center font-display text-[44px] font-extrabold text-white"
          style={{
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
            textShadow: "0px 4px 12.3px rgba(255, 71, 71, 0.13)",
          }}
        >
          {hero.brand}
        </h1>
        <span
          aria-hidden="true"
          className="relative z-10 -mt-1 select-none text-center font-display text-[44px] font-extrabold text-transparent"
          style={{
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.55)",
          }}
        >
          {hero.brand}
        </span>

        <div className="relative -mx-3 -mt-12 w-[calc(100%+1.5rem)] sm:-mt-16">
          <img
            src={hero.imageSrc}
            alt={hero.imageAlt}
            width={475}
            height={511}
            className="relative z-20 mx-auto block aspect-[395/425] w-full max-w-[475px] object-contain drop-shadow-lg"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="relative z-30 -mt-16 flex flex-col items-center gap-4 sm:-mt-20">
          <Link
            to={hero.primaryCta.href}
            aria-label={hero.primaryCta.label}
            className={`block w-[180px] transition-transform hover:-translate-y-[1px] ${FOCUS_RING}`}
          >
            <img
              src="/images/cta/Shop%20Button.svg"
              alt=""
              aria-hidden="true"
              width={180}
              height={40}
              className="block h-auto w-full"
            />
          </Link>
          <Link
            to={hero.secondaryCta.href}
            aria-label={hero.secondaryCta.label}
            className={`block w-[180px] transition-transform hover:-translate-y-[1px] ${FOCUS_RING}`}
          >
            <img
              src="/images/cta/Custom%20Order%20Button.svg"
              alt=""
              aria-hidden="true"
              width={180}
              height={42}
              className="block h-auto w-full"
            />
          </Link>
        </div>
      </div>

      <FloatingContact />
    </section>
  );
}
