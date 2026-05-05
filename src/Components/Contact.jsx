import React from "react";
import useForm from "../Hooks/useForm";
import img from "../assets/2b5470d1dfe2a56848d6311e59e6198e.jpg";

export default function Contact() {
  const { values, handleChange } = useForm();

  return (
    <section className="mt-20 md:mt-32 py-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 gap-10 md:gap-16">
        {/* IMAGE */}
        <img
          src={img}
          alt="contact"
          className="w-full h-64 md:h-96 object-cover rounded-xl"
        />

        {/* FORM */}
        <div className="flex flex-col gap-4">
          <label className="font-medium">
            Name <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border p-2 rounded-md w-full"
            />

            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border p-2 rounded-md w-full"
            />
          </div>

          <label className="font-medium">
            Email <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded-md w-full"
          />

          <label className="font-medium">
            Your Message <span className="text-red-500">*</span>
          </label>

          <textarea
            name="yourMessage"
            value={values.yourMessage}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full h-36 border p-2 rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
