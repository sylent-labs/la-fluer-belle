import { Link } from "react-router-dom";

import { BurgerMenu } from "./BurgerMenu";

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-rose-soft/20 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex h-14 max-w-screen-md items-center justify-between px-4">
        <Link
          to="/"
          aria-label="La Fleur Belle home"
          className="font-display text-lg leading-none text-rose-deep transition-colors hover:text-rose-deep/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          La Fleur Belle
        </Link>
        <BurgerMenu />
      </div>
    </header>
  );
}
