import { motion } from "framer-motion";
import { eventsBg } from "../../assets";
import Coordinators from "../../components/Coordinators";
import Modal from "../../components/Modal";
import List from "../../components/List";
import { transformToCoordinators } from "../../utils/helper";
import { useEffect } from "react";
import toast from "react-hot-toast";

function HeroSection({ event, setCondition, isAgreed }) {
console.log(event)
  useEffect(() => {
    if (event.name == "Workshop") {
      toast.error("Opens on 18th Dec");
    }
  }, [event.name]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const coordinators = transformToCoordinators(event?.student_contacts)

  return (
    <motion.div
      className="eventsbg relative space-y-5 text-lg min-h-screen md:text-xl flex items-center justify-center flex-col py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={eventsBg}
        controls={false}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full flex-col max-w-7xl text-center space-y-10 px-5">
        <motion.div
          className="md:space-y-14 space-y-5"
          variants={containerVariants}
        >
          <motion.h1
            className="font-bold md:text-[5vw] capitalize text-center text-3xl"
            variants={itemVariants}
          >
            {event?.name}
          </motion.h1>
          <motion.p
            className="md:text-[1.5vw] tracking-wider leading-9"
            variants={itemVariants}
          >
            {event?.introduction}
          </motion.p>
        </motion.div>

        {isAgreed ? (
          <motion.button
            className="button px-5 py-3 rounded-full border border-secondary overflow-hidden hover:text-white"
            disabled={event?.name === "Workshop"}
            onClick={() =>
              document
                .getElementById("register")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Click Here to Register
          </motion.button>
        ) : (
          <Modal>
            <Modal.Open>
              <motion.button
                className="button px-5 py-3 rounded-full border border-secondary overflow-hidden hover:text-white"
                variants={itemVariants}
                disabled={event?.name === "Workshop"}
              >
                Register Now
              </motion.button>
            </Modal.Open>
            <Modal.Window>
              <List
                setAgree={setCondition}
                rules={event.rulebook_url}
              />
            </Modal.Window>
          </Modal>
        )}
      </div>
      <Coordinators coordinators={coordinators} />
    </motion.div>
  );
}

export default HeroSection;