import React from "react";
import clsx from "clsx";

const Input = ({ placeholder, classNames, handleChange }) => {
  return (
    <input
      className={clsx(
        classNames,
        "bg-white border-0 hover:border-0 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B074] text-sm sm:text-base"
      )}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
