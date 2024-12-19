import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function WorkshopCard({ event ,variants}) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-black text-white border border-secondary/70 rounded-lg overflow-hidden shadow-md p-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      <div className="relative rounded-lg overflow-hidden text-lg">
        <img src={event.image_url} alt={event.name} />
      </div>

      <div className="px-2 py-3 text-lg flex items-center justify-between">
        <h3 className="truncate ">{event.name}</h3>
        <button
          className="bg-secondary hover:bg-secondary/90 px-3 py-1 rounded-full"
          onClick={() => {
            const params = new URLSearchParams({
              name: event?.name,
              teamSize: event?.team_count,
              id: event?.id,
            });
            navigate(`/register?${params.toString()}`);
          }}
        >
          Register
        </button>
      </div>
    </motion.div>
  );
}

export default WorkshopCard;
