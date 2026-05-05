import React from "react";
import Button from "../Constant/Button";
import img1 from "../assets/1defb918aaf6e1b1c0c1ec15aa2f8e7d.jpg";
import img2 from "../assets/b554027fcc33eb7032306179697ef337.jpg";
import img3 from "../assets/16f34ca057487f6158f05bee42e9a825.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const informations = [
  { id: 1, image: img1, title: "STRESS" },
  { id: 2, image: img2, title: "DEPRESSION" },
  { id: 3, image: img3, title: "ANGER MANAGEMENT" },
];

export default function Banner() {
  return (
    <section className="w-full bg-[#212A31] mt-10 py-12">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="w-16 h-[1px] bg-[#D3D4D9]" />
          <h1 className="uppercase text-[#D3D4D9] font-medium text-xl">
            What we do
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-lg font-normal text-[#748D92]">Popular Psychological Services</p>

          <Button variant="primary">EXPLORE MORE SERVICES</Button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mt-10">
        {informations.map((info) => (
          <div
            key={info.id}
            className="flex flex-col gap-4 rounded-lg shadow hover:shadow-lg transition "
          >
            <LazyLoadImage
              src={info.image}
              alt={info.title}
              effect="blur"
              className="w-full h-64 object-cover rounded-md transition duration-500 hover:scale-105"
            />

            <p className="text-center font-medium text-gray-700">
              {info.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
