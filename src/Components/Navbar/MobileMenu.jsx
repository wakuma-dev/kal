import React from "react";
import useMobileMenu from "../../Hooks/useMobileMenu";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const { isOpen, navToggle } = useMobileMenu();

  return (
    <div className="md:hidden">
      {/* BUTTON */}
      <button onClick={navToggle} className="relative z-50">
        {isOpen ? <IoCloseSharp size={22} /> : <CiMenuFries size={22} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={navToggle}
            />

            {/* MENU */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-5"
            >
              <Link to="/" onClick={navToggle}>
                Home
              </Link>
              <Link to="/about" onClick={navToggle}>
                About
              </Link>
              <Link to="/service" onClick={navToggle}>
                Service
              </Link>
              <Link to="/contact" onClick={navToggle}>
                Contact
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
