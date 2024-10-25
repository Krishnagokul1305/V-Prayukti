import { motion } from "framer-motion";

function HeroSection() {
  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and invisible
    visible: { opacity: 1, y: 0 }, // Move to original position and become visible
  };

  return (
    <div className="relative h-screen flex justify-center items-center home">
      <video
        className="absolute inset-0 w-full h-full object-cover grayscale"
        src={
          "https://cdn.pixabay.com/video/2021/06/27/79153-568252359_large.mp4"
        }
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative flex flex-col md:text-[6vw] text-5xl font-semibold text-center w-[80%] text-primary">
        <motion.span
          className="tracking-[1.2rem] text-sm md:text-base mb-5 text-secondary"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }} 
        >
          V-PRAYUKTI
        </motion.span>
        <motion.span
          className=""
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
        >
          INNOVATION
        </motion.span>
        <motion.span
        className="text-secondary"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          BEGINS
        </motion.span>
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          HERE
        </motion.span>
        <motion.span
          className="text-secondary"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1 }}
        >
          2025
        </motion.span>
      </div>
    </div>
  );
}

export default HeroSection;
