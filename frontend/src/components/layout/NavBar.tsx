import { Link } from "react-router-dom";

import { hero } from "@/data/homeContent";

import { BurgerMenu } from "./BurgerMenu";

export function NavBar(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto flex h-14 max-w-screen-md items-center px-4">
        <Link
          to="/"
          aria-label={`La Fleur Belle home — ${hero.tagline}`}
          className="flex flex-1 items-center justify-center rounded-md py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          <img
            src="/images/header%20title%20mini.svg"
            alt={hero.tagline}
            className="h-3 w-auto"
          />
        </Link>
        <div className="ml-2 shrink-0">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}
