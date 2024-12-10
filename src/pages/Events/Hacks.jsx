import EventsCard from "../../components/EventsCard";
import { motion } from "framer-motion";

function Hacks({events}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const hackathons = events.filter((event) => event.type === "Hackathons");

  return (
    <div className="h-auto w-full p-5 md:px-10 py-20" id="events">
      <div className="mx-auto flex flex-col justify-center items-center space-y-10">
        <motion.h1
          className="font-bold text-secondary text-2xl md:text-[3vw] tracking-wider mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
        >
          Prayukti Hacks
        </motion.h1>
        <motion.div
          className="flex flex-wrap items-center gap-10 justify-center w-full px-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hackathons.map((event) => (
            <EventsCard img={event.image_url} title={event.name} key={event.name} id={event.id}/>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Hacks;
