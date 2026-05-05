import React from "react";
import img from "../assets/febrian-zakaria-TgPQwLD5UD8-unsplash.jpg";

export default function ServiceBanner() {
  const bgStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="w-full h-64 md:h-96 relative" style={bgStyle}>
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold font-heading">
          Service
        </h1>
      </div>
    </section>
  );
}
