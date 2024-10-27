import { motion } from "framer-motion";
import { navItems, socialLinks } from "../constants/constants";

function NavMenu({ setMenuOpen }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="bg-black h-screen w-full text-gray-400 fixed top-0 left-0 z-50 flex flex-col justify-between py-10 px-10 md:pe-10 md:ps-20 text-2xl md:text-4xl"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-sm hover:text-gray-400 transition duration-300"
        >
          CLOSE
        </button>
      </div>
      <div className="flex flex-col space-y-6 w-fit">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="hover:italic  hover:text-gray-100 transition duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex space-x-3 text-sm text-gray-500">
        <p className="hover:text-gray-400 transition duration-300 italic">
          bitvprayukti@bitsathy.ac.in
        </p>
        <div className="space-x-3">
          <span>/ </span>
          <a
            onClick={()=>window.open(socialLinks.instagram)}
            className="hover:italic hover:text-gray-400 transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default NavMenu;
