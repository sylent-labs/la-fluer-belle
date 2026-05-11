import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
