import { motion } from "framer-motion";

const text = "THE-NAITIK";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  },
};

const LogoAnimation = () => (
  <motion.div
    className="flex uppercase"
    initial="hidden"
    animate="show"
    variants={container}
  >
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={letter} className={ index >= 4 ? "text-teal-800" : "text-zinc-900" }>
        {char}
      </motion.span>
    ))}
  </motion.div>
);

export default LogoAnimation;
