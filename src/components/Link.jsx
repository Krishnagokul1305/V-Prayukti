import { motion } from "framer-motion";

function Link({ link, Icon }) {
  return (
    <motion.div
      className="flex items-center p-1.5 w-fit rounded-full hover:text-bg"
      whileHover={{ scale: 1.1 }}
    >
      <a href={link} className="link-style" rel="noreferrer" target="_blank">
        <Icon className="h-[1.7vw]" />
      </a>
    </motion.div>
  );
}

export default Link;
