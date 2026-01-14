import React from "react";
import clsx from "clsx";

const Input = ({ error, classNames, type, ...props }) => {
  return (
    <input
      type={type}
      className={clsx(
        classNames,
        "border-0 hover:border-0 p-2 rounded-md focus:outline-none text-sm sm:text-base",
        error && "border border-red-500"
      )}
      {...props}
    />
  );
};

export default Input;
