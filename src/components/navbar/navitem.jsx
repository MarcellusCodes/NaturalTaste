import Link from "next/link";
import { motion } from "framer-motion";
import Theme from "../../utils/theme";
import ButtonVariants from "../../utils/buttonVariants";
const NavItem = ({ item }) => {
  return (
    <>
      <Link href={item.href}>
        <motion.li
          variants={ButtonVariants}
          whileHover={{
            rotate: 12,
            backgroundColor: Theme.colors.primary,
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          whileTap="active"
          className="p-2 rounded-lg cursor-pointer"
        >
          {item.name}
        </motion.li>
      </Link>
    </>
  );
};

export default NavItem;
