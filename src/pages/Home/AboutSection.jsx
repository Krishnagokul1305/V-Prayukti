import { motion } from "framer-motion";

function AboutSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col w-[80%] mx-auto  py-32" id="about">
      <motion.h1
        className="text-start font-thin text-2xl tracking-widest"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        transition={{ duration: 0.8,type: "spring", stiffness: 100}}
      >
        About-Us
      </motion.h1>

      <motion.p
        className="md:text-[3vw] font-bold text-3xl leading-normal mt-6"
        variants={textVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3,type: "spring", stiffness: 100 }} 
      >
        BIT V-PRAYUKTI&apos;25 is a
        <span className="text-secondary"> National Level Event</span> aims to
        showcase technological and inventive skills from students across the
        country, providing a platform for innovative minds to shine.
      </motion.p>
    </div>
  );
}

export default AboutSection;
