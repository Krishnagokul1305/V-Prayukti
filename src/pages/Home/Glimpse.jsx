import { motion } from "framer-motion";

function Glimpse() {
  const row1 = [
    "https://bitvprayukti.in/static/media/g1.911871089557adcd7799.jpg",
    "https://bitvprayukti.in/static/media/g2.86f6ef1acee37bea2b33.jpg",
    "https://bitvprayukti.in/static/media/g3.12cdb10930b204ae57bc.jpg",
    "https://bitvprayukti.in/static/media/g6.c5b87adbcee50692e146.jpg",
    "https://bitvprayukti.in/static/media/g7.388416e043dadb10f6b8.jpg",
    "https://bitvprayukti.in/static/media/g8.15b308c4a65ac3bc6eb3.jpg",
    "https://bitvprayukti.in/static/media/g9.c5b87adbcee50692e146.jpg",
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="glimpse"
      className="w-full py-20 flex justify-center items-center my-10 "
    >
      <div className="w-full flex flex-col items-center justify-center text-primary">
        <motion.h2
          className="font-medium text-xl tracking-wider mb-6 text-primary uppercase border-b-2 border-secondary pb-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          variants={titleVariants}
        >
          A Glimpse of
        </motion.h2>

        <motion.h3
          className="text-3xl sm:text-6xl uppercase tracking-wider px-16 leading-10 sm:px-0 mb-16 font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          variants={titleVariants}
        >
          V-PRAYUKTI’23
        </motion.h3>

        <motion.div
          className="w-10/12 overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          variants={titleVariants}
        >
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10"></div>

          <div className="flex space-x-8 animate-marquee">
            {row1.concat(row1).map((el, index) => (
              <div
                key={index}
                className="flex-shrink-0 grid place-items-center w-64"
              >
                <img
                  src={el}
                  alt={`glimpse-${index}`}
                  className="object-cover w-full h-auto rounded-md shadow-md aspect-video"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Glimpse;
