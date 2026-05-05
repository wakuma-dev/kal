import React from "react";
import img from "../assets/cody-black-VDb0wxbfG6k-unsplash.jpg";
import Button from "../Constant/Button";

export default function Main() {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20">
      {/* IMAGE */}
      <img
        src={img}
        alt="about"
        className="w-full h-64 md:h-96 object-cover rounded-lg"
      />

      {/* CONTENT */}
      <div className="flex flex-col gap-4 md:ml-8">
        {/* TITLE */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-[1px] bg-[#D3D9D4]" />
          <h1 className="text-3xl md:text-4xl text-[#D3D9D4] font-heading">
            who we are
          </h1>
        </div>

        {/* TEXT */}
        <p className="text-lg md:text-xl font-semibold font-body">
          There’s Strength In Seeking Support We’re Honored To Be Part Of Your
          Journey.
        </p>

        <p className="pt-4 text-sm md:text-base font-normal font-body">
          Thank you for considering KAL as a resource on your path to
          well-being. We look forward to the opportunity to support you in
          achieving a healthier and more fulfilling life.
        </p>

        {/* FOOTER */}
        <div className="py-8 md:py-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-base font-semibold">Kalkidan</h1>
            <p className="text-gray-400">Founder</p>
          </div>

          <Button variant="primary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
