import { motion } from "framer-motion";

function GiftPopup() {
  return (
    <motion.div
      className=" p-4 rounded-lg shadow-lg absolute bottom-5 left-5"
      animate={{
        y: [0, -10, 0], // Moves up and down
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center flex-col relative px-4 pb-4 rounded-3xl bg-black border-secondary/60 border pt-12">
        Dealine Extended
      </div>
    </motion.div>
  );
}

export default GiftPopup;
