import { motion } from "framer-motion";
import { eventsBg } from "../../assets";
import Modal from "../../components/Modal";
import List from "../../components/List";

function HeroSection({ event, setCondition }) {
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
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="eventsbg relative space-y-5 text-lg min-h-[75vh] md:text-xl flex items-center justify-center flex-col pt-20"
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
            {event.id == 1 && (
              <>
                <br />
                <span className="text-secondary inline-block ms-3 text-lg">
                  (#Deadline extended)
                </span>
              </>
            )}
          </motion.h1>
          <motion.p
            className="md:text-[1.5vw] tracking-wider leading-8 md:leading-10"
            variants={itemVariants}
          >
            {event?.introduction}
          </motion.p>
        </motion.div>
        <div className="space-x-2 space-y-2">
          <motion.button
            variants={itemVariants}
            className=" px-5 py-3 rounded-full hover:bg-secondary/80 bg-secondary overflow-hidden text-white"
            onClick={() =>
              document
                .getElementById("details")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Details
          </motion.button>
          {/* {isAgreed ? (
            <motion.button
              className="button px-5 py-3 rounded-full border border-secondary overflow-hidden hover:text-white"
              disabled={event?.name === "Workshop"}
              onClick={() => {
                const params = new URLSearchParams({
                  name: event?.name,
                  teamSize: event?.team_count,
                  id: event?.id,
                });
                navigate(`/register?${params.toString()}`);
              }}
            >
              Click Here to Register
            </motion.button>
          ) : ( */}
          {event.id != 9 && (
            <Modal>
              <Modal.Open>
                {event.status == "Active" ? (
                  <motion.button
                    className="button px-5 py-3  mb-10 rounded-full border border-secondary overflow-hidden hover:text-white"
                    variants={itemVariants}
                    disabled={event?.name === "Workshop"}
                  >
                    Register Now {event.id != 1 ? "@ " + event?.fee : ""}
                  </motion.button>
                ):<span></span>}
              </Modal.Open>
              <Modal.Window>
                <List
                  setAgree={setCondition}
                  rules={event.rulebook_url}
                  event={event}
                />
              </Modal.Window>
            </Modal>
          )}
          {/* )} */}
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
