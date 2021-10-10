import { motion } from "framer-motion";
import buttonVariants from "../../utils/buttonVariants";

const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <>
      <motion.button
        variants={buttonVariants}
        whileTap="active"
        whileHover="primaryHover"
        className={`bg-primary rounded-lg px-8 py-2 text-white text-xl font-sans font-bold focus:outline-none z-50 ${className}`}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </>
  );
};

export default PrimaryButton;
