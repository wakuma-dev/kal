import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2E3944] mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* BRAND */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-heading text-white">
            KAL Counseling
          </h1>
          <p className="text-white text-sm">
            Supporting your mental health, healing, and personal growth journey
            with care and trust.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-gray-800">Quick Links</h2>

          <Link
            className="text-white hover:text-green-500 transition"
            to="/"
          >
            Home
          </Link>

          <Link
            className="text-white hover:text-green-500 transition"
            to="/about"
          >
            About
          </Link>

          <Link
            className="text-white hover:text-green-500 transition"
            to="/services"
          >
            Services
          </Link>

          <Link
            className="text-white hover:text-green-500 transition"
            to="/contact"
          >
            Contact
          </Link>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-gray-800">Contact</h2>

          <p className="text-white">Addis Ababa, Ethiopia</p>
          <p className="text-white">+251 91 384 8475</p>
          <p className="text-white">support@kaltherapy.com</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KAL Counseling. All rights reserved.
      </div>
    </footer>
  );
}
