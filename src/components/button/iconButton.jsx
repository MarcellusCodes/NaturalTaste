import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import buttonVariants from "../../utils/buttonVariants";

const IconButton = ({ variant, title, className, icon }) => {
  return (
    <>
      <motion.button
        variants={buttonVariants}
        whileHover={variant}
        whileTap="active"
        className={`bg-secondary rounded-lg px-8 py-2 text-white text-xl font-sans font-bold flex flex-row items-center focus:outline-none ${className}`}
      >
        <span className="mr-2">{title}</span>
        <Image src={icon} alt="Products Image" width="45" height="45" />
      </motion.button>
    </>
  );
};

export default IconButton;
