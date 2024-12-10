import { motion } from "framer-motion";
import Accordion from "../../components/Accordion";

function Details({ event }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const items = [
    {
      title: "Event Deadline",
      content: `Ends on ${event.deadline}`,
    },
    {
      title: "Team size",
      content: `${event.team_count} persons per team`,
    },
    {
      title: "Registration fee",
      content: `${event.fee} per team`,
    },
    {
      title: "Rules and Regulations",
      content: event.rulebook_url,
    },
  ];

  if(event?.info){
    items.push({
      title:"Important Dates",
      content: event.info,
    })
  }

  return (
    <motion.div
      className="flex flex-col items-center mb-20 min-h-[40vh] md:space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1 className="text-xl md:text-3xl" variants={itemVariants}>
        Registration Details
      </motion.h1>
      <motion.div
        className="w-full max-w-5xl"
        variants={itemVariants} // Animate Accordion as a whole
      >
        <Accordion items={items} />
      </motion.div>
    </motion.div>
  );
}

export default Details;
