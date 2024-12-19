import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import WorkshopCard from "../../components/WorkshopCard";
import { getWorkShops } from "../../services/apiEvent";
import FallBackLoader from "../../components/FallBackLoader";

function WorkshopList() {
  const { data, isLoading } = useQuery({
    queryKey: ["workshops"],
    queryFn: getWorkShops,
  });

  if (isLoading) return <FallBackLoader />;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between animations of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <h1 className="ms-10 font-extrabold text-center text-2xl md:text-[3vw] tracking-wider mb-4">
        Workshops
      </h1>
      <motion.div
        className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true, amount: 0.2 }} // Play animation only once when 20% of the component is in view
      >
        {data?.map((eve) => (
          <motion.div key={eve.id} variants={itemVariants}>
            <WorkshopCard event={eve} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default WorkshopList;
