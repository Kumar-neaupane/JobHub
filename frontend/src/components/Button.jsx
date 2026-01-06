import React from "react";

const Button = ({ className, btnName }) => {
  return (
    <div>
      <button
        className={
          className +
          " Jobpost bg-[#00B074] p-3 cursor-pointer text-white hover:shadow-lg hover:text-shadow-lg transition duration-300 hover:underline"
        }
      >
        <a>{btnName}</a>
      </button>
    </div>
  );
};

export default Button;
