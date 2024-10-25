import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="h-[70vh] comingsoon relative flex items-center justify-center py-20">
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="text-center space-y-6">
        {/* Transform effect for "EVENTS" */}
        <motion.h1
          className="text-secondary"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          E V E N T S
        </motion.h1>

        {/* Zoom effect for "COMING SOON" */}
        <motion.h1
          className="text-[6vw] font-extrabold tracking-widest glowing-text"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} 
        >
          C O M I N G <span>S O O N</span>
        </motion.h1>
      </div>
    </div>
  );
};

export default ComingSoon;
