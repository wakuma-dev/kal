import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Cta() {
  return (
    <div className="hidden md:flex items-center gap-4 ml-10">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2E3944]">
        <FaPhoneAlt className="text-black text-sm" />
      </div>

      <p className="text-md font-bold ">+251913848475</p>
    </div>
  );
}
