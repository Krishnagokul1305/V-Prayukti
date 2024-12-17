import TiltCard from "../../components/TiltCard";
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";
import { motion } from "framer-motion";

const ContactUs = () => {
  const contactData = [
    {
      Icon: HiOutlineMail,
      title: "Email",
      description:
        "Our friendly team is here to help. mail us bitvprayukti@bitsathy.ac.in",
    },
    {
      Icon: HiPhone,
      title: "Phone",
      description:
        "Any doubts?,Our friendly team is here, Contact individual coordinators of the events",
    },
    {
      Icon: HiLocationMarker,
      title: "Location",
      description:
        "Bannari Amman Institute of Technology, Sathyamangalam, Erode-638401",
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-[60vh] w-full flex items-center flex-col justify-center py-20"
      id="contact"
    >
      <motion.h2
        className="font-medium text-xl tracking-wider mb-6 text-primary uppercase border-b border-b-secondary pb-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        variants={titleVariants}
      >
        Any help ?
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
        Contact Us
      </motion.h3>

      <div className="container max-w-6xl text-center mx-auto px-5 md:px-20 lg:px-10">
        <div className="flex flex-col gap-20 sm:flex-row justify-between mt-10">
          <div className="basis-full flex flex-row gap-10 flex-wrap justify-evenly md:basis-3/3">
            {contactData.map((data, index) => (
              <TiltCard key={data.title}>
                <motion.div
                  className="w-72  h-64 shadow-secondary  rounded-xl p-[2vw] border border-secondary"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <span className="inline-block p-3 text-accent rounded-full bg-secondary">
                    <data.Icon className="text-bg text-lg" />
                  </span>
                  <h2 className="mt-4 text-lg md:text-[1.1vw] font-bold text-white">
                    {data.title}
                  </h2>
                  <p className="mt-2 text-base font-semibold">
                    {data.description}
                  </p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
