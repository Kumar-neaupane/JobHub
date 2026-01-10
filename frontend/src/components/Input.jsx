import React from "react";
import clsx from "clsx";

const Input = ({ placeholder, classNames, handleChange, type,required }) => {
  return (
    
    <input
    type={type}
      className={clsx(
        classNames,
        " border-0 hover:border-0 p-2 rounded-md focus:outline-none  text-sm sm:text-base"
      )}
      placeholder={placeholder}
      onChange={handleChange}
      required={required}
    />
  );
};

export default Input;
