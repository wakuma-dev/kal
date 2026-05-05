import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const linkStyle =
    "text-base relative text-[#2E3944] inline-block after:content-[''] after:block after:absolute after:-bottom-1 after:left:0 after:bg-black after:w-0 after:h-[1px] after:transition-all after:duration-200 hover:after:w-full";

  return (
    <nav className="hidden md:flex items-center gap-8">
      <ul className="flex items-center gap-8">
        <li className="flex gap-8">
          <Link to="/" className={linkStyle}>
            Home
          </Link>
          <Link to="/about" className={linkStyle}>
            About Us
          </Link>
         <Link to="/service" className={linkStyle}>
            Service
         </Link>
         <Link to="/contact" className={linkStyle}>
            Contact
         </Link>
        </li>
      </ul>
    </nav>
  );
}
