import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Coordinators({ coordinators }) {
  let [open, setIsopen] = useState(false);

  // Variants for animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below the view
    visible: (i) => ({
      opacity: 1,
      y: 0, // Move into position
      transition: { delay: i * 0.2 }, // Delay based on index
    }),
    exit: { opacity: 0, y: -50 }, // Exit upwards
  };

  return (
    <div className="text-white absolute bottom-5 left-5 md:left-10 space-y-2 z-10">
      <div className="rounded-lg space-y-2">
        <AnimatePresence>
          {open &&
            coordinators
              .slice()
              .reverse()
              .map((coordinator, index) => (
                <motion.div
                  key={coordinator.name}
                  className="p-3 rounded-xl opacity-90 bg-secondary"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index} // Pass index to variants
                >
                  <h1>{coordinator.name}</h1>
                  <p>{coordinator.phoneNo}</p>
                </motion.div>
              ))}
        </AnimatePresence>
      </div>
      <button
        className="bg-secondary px-3 py-2 rounded-full"
        onClick={() => setIsopen(!open)}
      >
        Coordinators
      </button>
    </div>
  );
}

export default Coordinators;
