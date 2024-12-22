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
        className="absolute inset-0 w-full h-full object-cover"
        src={
          "https://cdn.pixabay.com/video/2021/06/27/79153-568252359_large.mp4"
        }
        controls={false}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative  flex flex-col md:text-[9vw] text-5xl font-semibold text-center w-[80%] text-primary">
        <motion.span
          className="text-sm md:text-lg mb-5 tracking-widest leading-relaxed"
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
          Bannari Amman Institute of Technology
          <br />
          ECE & BME PRESENTS
        </motion.span>
        <motion.span
          className=" mb-5 text-secondary tracking-widest text-wrap"
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
          V-PRAYUKTI
        </motion.span>
        <motion.span
          className=""
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          2025
        </motion.span>
      </div>
    </div>
  );
}

export default HeroSection;
