import React from "react";
import img from "../assets/b86820c5296cfd042edf7d72dc9e579a.jpg";

export default function AboutHero() {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-20">
      {/* IMAGE */}
      <img
        src={img}
        alt="about"
        className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto"
      />

      {/* CONTENT */}
      <div className="flex flex-col gap-4 md:ml-10 justify-center items-center md:items-start text-center md:text-left ">
        <div className="flex items-center gap-4">
          <div className="w-14 h-[1px] bg-[#212A31]" />
          <h1 className="text-3xl font-bold font-heading  text-[#212A31]">
            Who We Are
          </h1>
        </div>
        <p className="text-[#212A31] text-2xl max-w-md leading-relaxed">
          There’s Strength In Seeking Support. We’re honored to be part of your
          journey.
        </p>
        <p>
          Thank you for considering KAL as a resource on your path to
          well-beling. We look forward to the opportunity to support you in a
          chiving a healthier and more fulfilling life.
        </p>
      </div>
    </div>
  );
}
