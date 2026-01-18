import React from "react";
import clsx from "clsx";

const Dropdown = ({ children, className }) => {
  return (
    <div className="w-full lg:w-auto">
      <select
        className={clsx(
          "bg-white p-2 rounded-md w-full lg:w-48 xl:w-64 h-10 border-0 hover:border-1 hover:border-green-400 outline-none",
          className
        )}
      >
        {children}
      </select>
    </div>
  );
};

export default Dropdown;
