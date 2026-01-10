import React from "react";
import clsx from "clsx";

const Select = ({ children, className }) => {
  return (
    <div className="w-full lg:w-auto">
      <select
        className={clsx(
          "bg-white p-2 rounded-md  border-0 focus:outline-none focus:ring-1 focus:ring-[#00B074]",
          className
        )}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
