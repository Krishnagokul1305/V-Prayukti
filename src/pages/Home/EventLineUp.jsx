import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { events } from "../../constants/constants";
import EventsCard from "../../components/EventsCard";

const EventLineUp = () => {
  return (
    <div className="min-h-[60vh] p-7 comingsoon relative flex items-center justify-center py-20">
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="text-center space-y-10">
        <motion.h1
          className="text-xl border-b w-fit mx-auto border-secondary tracking-wide mb-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          EVENTS LINEUP
        </motion.h1>

        <Link to="/events" className="text-lg">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            View All Events &#x2192;
          </motion.span>
        </Link>
        <motion.div
          className=" flex gap-10 flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, type: "spring", stiffness: 100 }}
          transition={{
            duration: 0.1,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          {events.map((eve) => (
            <EventsCard
              key={eve.id}
              id={eve.id}
              img={eve.image_url}
              title={eve.name}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EventLineUp;
