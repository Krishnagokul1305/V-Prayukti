import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function AppLayout() {
  const path = useLocation().pathname;
  const isMatching = /^\/events\/.+$/g.test(path) || path == "/register";

  return (
    <div className="max-w-9xl">
      {/* {!isMatching && ( */}
      <header>
        <Navbar />
      </header>
      <div className="fixed bottom-0 left-0 w-full h-18 bg-gradient-to-t from-black to-transparent"></div>
      <main>
        <Outlet />
      </main>
      {!isMatching && <Footer />}
    </div>
  );
}
