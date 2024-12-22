import { useState } from "react";
import NavMenu from "./NavMenu";
import { logo } from "../assets/index.js";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed cursor-pointer z-20 top-0 pt-5 w-full md:px-10 px-5 items-center flex justify-between bg-gradient-to-b from-black via-black/70 to-transparent ">
      <Link to="/">
        <img src={logo} alt="" className="md:h-[4vw] h-16" />
      </Link>
      <div className="flex items-center gap-5">
        <Link
          className="text-base md:text-[1.2vw] mb-4 hidden md:block"
          to="/register/search"
        >
          REGISTRATIONS
        </Link>
        <h1
          onClick={() => setMenuOpen(true)}
          className="text-base md:text-[1.2vw] mb-4"
        >
          MENU
        </h1>
      </div>
      {menuOpen && <NavMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}

export default Navbar;
