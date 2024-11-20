import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import AnimatedCursor from "react-animated-cursor";

export default function AppLayout() {
  const path = useLocation().pathname;
  const isMatching = /^\/events\/.+$/g.test(path);
  return (
    <div className="max-w-9xl">
      {/* {!isMatching && ( */}
      <header>
        <Navbar />
      </header>
      {/* )} */}
      <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10 md:none"></div>
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#eb5939",
        }}
        outerStyle={{
          backgroundColor: "#eb5939",
          zIndex: 5,
        }}
        clickables={["a"]}
      />
      <main>
        <Outlet />
      </main>
      {!isMatching && <Footer />}
    </div>
  );
}
