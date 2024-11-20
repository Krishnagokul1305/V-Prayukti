import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen event-hero flex items-center justify-center text-center space-y-3 md:space-y-8 overflow-hidden px-2">
      <div className="z-10 flex items-center flex-col justify-center text-center space-y-3 md:space-y-8">
        <motion.h1
          className="text-5xl md:text-[5vw] font-bold"
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
          Rise to the
          <br className="md:hidden " /> Challenge
        </motion.h1>
        <motion.p
          className="text-sm md:text-[1.5vw]"
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
          Compete, Create, and Conquer at
          <br className="md:hidden " /> Our College Events!
        </motion.p>
        <motion.a
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#events")
              .scrollIntoView({ behavior: "smooth" });
          }}
          href="#events"
          className="mt-7 px-5 py-3 border flex items-center border-secondary hover:bg-secondary rounded-full text-white text-lg gap-5 hover:before:bg-redborder-red-500 relative overflow-hidden bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
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
          <span className="relative z-10 flex items-center gap-2 md:text-base text-sm">
            Explore Events
            <HiChevronRight className="md:h-6 md:w-6 h-4 w-4" />
          </span>
        </motion.a>
      </div>
    </div>
  );
}
