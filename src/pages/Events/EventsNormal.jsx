import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import EventsCard from "../../components/EventsCard";
import Filter from "../../components/Filter";

export default function EventsNormal({ events }) {
  let filtered = [];
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get("type") || "technical";

  if (filterType === "technical") {
    filtered = events.filter(
      (event) => event.type === "Technical" || event.type === "Workshops"
    );
  } else if (filterType === "non-technical") {
    filtered = events.filter((event) => event.type === "Non Technical");
  } else if (filterType === "hackathons") {
    filtered = events.filter((event) => event.type === "Hackathons");
  }

  return (
    <div className="h-auto w-full p-5 md:px-10 py-20" id="events">
      <div className="mx-auto flex flex-col justify-center items-center space-y-10">
        <motion.h1
          className="font-bold text-secondary text-2xl md:text-[3vw] tracking-wider mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          EVENTS
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <Filter />
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center gap-10 justify-center w-full px-5 lg:grid lg:grid-cols-4 lg:w-fit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          {filtered.map((event) => (
            <EventsCard
              img={event.image_url}
              title={event.name}
              key={event.name}
              id={event.id}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
