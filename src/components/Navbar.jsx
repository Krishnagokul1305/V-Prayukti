import { useState } from "react";
import NavMenu from "./NavMenu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed right-7 md:right-13 cursor-pointer z-20 top-10">
      <h1 onClick={() => setMenuOpen(true)} className="text-base">
        MENU
      </h1>
      {menuOpen && <NavMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}

export default Navbar;
