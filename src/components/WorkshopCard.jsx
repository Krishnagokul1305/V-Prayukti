import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { parseRequirements } from "../utils/helper";

function WorkshopCard({ event, variants }) {
  const navigate = useNavigate();
  const requirements = parseRequirements(event.eligibility).software;
  return (
    <motion.div
      className="bg-black text-white h-full border border-secondary/70 rounded-lg overflow-hidden shadow-md p-2 transition-all hover:-translate-y-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <div className="relative rounded-lg overflow-hidden text-lg">
        <div
          className={`absolute left-2 font-semibold tracking-wide top-2 py-1 px-5 ${
            event.domain == "Offline" ? "bg-green-500" : "bg-blue-500"
          } rounded-lg`}
        >
          {event.domain}
        </div>
        <img src={event.image_url} alt={event.name} />
      </div>

      <div className="px-2 py-3 text-lg flex items-center justify-between">
        <h3 className="truncate">{event.name}</h3>
        {event.status == "Inactive" ? (
          <></>
        ) : (
          <button
            className="bg-secondary hover:bg-secondary/90 px-3 py-1 rounded-full"
            onClick={() => {
              const params = new URLSearchParams({
                name: event?.name,
                teamSize: event?.team_count,
                id: event?.id,
                fee: "Rs.199/-",
              });
              navigate(`/register?${params.toString()}`);
            }}
          >
            Register
          </button>
        )}
      </div>
      <footer className="bg-stone900/90 rounded-lg px-3 py-2 text-lg flex items-center">
        <h1 className="text-secondary">#Requirements:</h1>
        <p className="text-base ms-2">{requirements}</p>
      </footer>
    </motion.div>
  );
}

export default WorkshopCard;
