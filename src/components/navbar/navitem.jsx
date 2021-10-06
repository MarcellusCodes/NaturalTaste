import Link from "next/link";
import { motion } from "framer-motion";

const NavItem = ({ item }) => {
  return (
    <>
      <Link href={item.href}>
        <motion.li
          whileHover={{
            rotate: 12,
            backgroundColor: "#FF6E00",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          whileTap={{
            scale: 0.95,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          className="p-2 rounded-lg cursor-pointer"
        >
          {item.name}
        </motion.li>
      </Link>
    </>
  );
};

export default NavItem;
