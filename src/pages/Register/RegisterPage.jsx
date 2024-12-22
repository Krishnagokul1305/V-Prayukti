import { motion } from "framer-motion";
import AccountDetails from "./AccountDetails";
import RegisterForm from "./RegisterForm";
import { useSearchParams } from "react-router-dom";

function RegisterPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animations of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start faded out and slightly below
    visible: { opacity: 1, y: 0 }, // Fade in and move to normal position
  };

  return (
    <motion.div
      className={`md:grid flex flex-col-reverse ${id!=1&&"md:grid-cols-[3fr_1fr]"} mt-10 py-10 md:px-5`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <RegisterForm />
      </motion.div>
      <motion.div
        variants={itemVariants}
        transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
      >
        {id != 1 && <AccountDetails />}
      </motion.div>
    </motion.div>
  );
}

export default RegisterPage;
