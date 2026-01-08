import React from "react";
import clsx from "clsx";

const Dropdown = ({ children, className }) => {
  return (
    <div className="w-full lg:w-auto">
      <select
        className={clsx(
          "bg-white p-2 rounded-md w-full lg:w-48 xl:w-64 h-10 border-0 focus:outline-none focus:ring-2 focus:ring-[#00B074]",
          className
        )}
      >
        {children}
      </select>
    </div>
  );
};

export default Dropdown;
