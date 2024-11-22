import { useNavigate, useParams } from "react-router-dom";
import { events } from "../../constants/constants";
import { HiUserGroup } from "react-icons/hi";
import { HiCurrencyRupee } from "react-icons/hi2";
import { HiMiniCalendarDays } from "react-icons/hi2";
import InfoCard from "../../components/InfoCard";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function EventPage() {
  const params = useParams();
  const event = events.find((event) => event.title === params.event);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  function handleClick(){
    toast("Opens on 16th December!");
  }

  return (
    <motion.div
      className="pt-24 pb-10 space-y-5 text-lg min-h-screen md:px-20 w-[90%] md:text-xl m-auto mb-10 flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Ensures animation triggers when 10% of the element is in view
      variants={containerVariants}
    >
      {/* Event Content Section */}
      <motion.div
        className="relative bg-black flex items-center flex-col md:flex-row"
        variants={cardVariants}
      >
        {/* Background Image */}
        <motion.div
          className="md:min-w-[400px] max-w-[450px] p-2 md:min-h-[300px] rounded-md border border-secondary"
          animate={{
            y: [0, -10, 10, 0], // Wobble effect
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={event.img}
            alt="Rock Concert"
            className="h-full w-full object-cover opacity-80 rounded-md"
          />
        </motion.div>

        {/* Content */}
        <div className="relative flex flex-col items-start max-w-5xl mx-auto px-5 md:px-8 py-10">
          <p className="text-secondary text-lg uppercase tracking-widest">
            8&apos;th FEB 2025
          </p>
          <h1 className="md:text-[4vw] font-bold text-2xl capitalize leading-tight mt-2 tracking-wide text-white">
            {event.title}
          </h1>
          <p className="mt-4 text-gray-300 ">{event.description}</p>
          <div className="mt-6 flex items-center gap-4 text-base">
            {/* Register Button */}
            <a
              onClick={handleClick}
              href="#"
              className="px-6 py-3 bg-secondary font-semibold rounded-full hover:bg-opacity-80 text-white"
            >
              Register Now
            </a>
            <button
              className="px-6 py-3 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </div>
      </motion.div>

      {/* Info Cards Section */}
      <motion.div
        className="flex gap-5 flex-col md:grid md:grid-cols-3 px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the section is visible
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <InfoCard
            icon={<HiUserGroup />}
            title="Teamsize"
            value={event.teamSize}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <InfoCard icon={<HiCurrencyRupee />} title="Fee" value={event.fee} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <InfoCard
            icon={<HiMiniCalendarDays />}
            title="Deadline"
            value={event.deadline}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default EventPage;
