import { motion } from "framer-motion";
import Counter from "../../components/Counter";

export default function Countdown() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="min-h-[50vh] text-center py-10 space-y-7 flex flex-col justify-center items-center">
      <motion.h1
        className="font-bold text-secondary text-2xl md:text-[3vw] tracking-wider"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        Event Starts Soon
      </motion.h1>
      <motion.h1
        className="text-2xl md:text-[2vw] tracking-wider"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          type: "spring",
          stiffness: 100,
        }}
      >
        Join us on 8&apos;th Feb
      </motion.h1>
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Counter targetDate="2025-02-08T23:59:59" />
      </motion.div>
    </div>
  );
}
