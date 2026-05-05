import React from "react";

export default function Button({ children, variant = "primary" }) {
  const baseStyle = "w-fit px-6 py-2 rounded-full uppercase font-bold outline-none transition-all";

  const styles =
    variant === "primary"
      ? "bg-[#124E66] text-[#D3D9D4] hover:bg-black "
      : "bg-white border border-green-500 text-green-500";

  return <button className={`${baseStyle} ${styles}`}>{children}</button>;
}
