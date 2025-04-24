import { motion } from "framer-motion";
import Accordion from "../../components/Accordion";
import { createOrderedList, transformToCoordinators } from "../../utils/helper";
import { HiQuestionMarkCircle } from "react-icons/hi";

function Details({ event }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const items = [
    {
      title: "Rules and Regulations",
      content: event?.rulebook_url,
    },
    {
      title: "Price Pool",
      content: `🏆 Win ${
        event?.team_formation
          ? `upto Rs.${event?.team_formation} /-`
          : "MEMENTOS AND CERTIFICATES"
      } in this event! 🎉`,
    },
  ];

  if (event?.info) {
    items.push({
      title: "Important Dates",
      content: createOrderedList(event.info),
    });
    items.reverse();
  }
  const coordinators = transformToCoordinators(event?.student_contacts);
  return (
    <motion.div
      className="flex flex-col items-center min-h-[40vh] md:space-y-5"
      initial="hidden"
      id="details"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h1 className="text-xl md:text-3xl" variants={itemVariants}>
        Registration Details
      </motion.h1>
      <motion.div className="w-full max-w-5xl" variants={itemVariants}>
        <div className="border border-secondary p-3 rounded-2xl my-3 opacity-90 mx-5 md:me-6">
          <button className="w-full flex justify-between items-center p-4 transition">
            <span className="text-lg font-medium flex items-center gap-2">
              <HiQuestionMarkCircle /> For Queries
            </span>
          </button>
          <div className="px-4 py-2 ms-5 text-lg md:text-xl ">
            <ul className="list-disc">
              {coordinators.map((c, i) => (
                <li key={i} className="">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Accordion items={items} />
      </motion.div>
    </motion.div>
  );
}

export default Details;
