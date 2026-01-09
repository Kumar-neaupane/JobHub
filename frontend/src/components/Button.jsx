import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ className, btnName ,to}) => {
  const navigate = useNavigate();
  return (
    <button
    onClick={()=>navigate(to)}
      className={
        "Jobpost bg-[#00B074] p-3 cursor-pointer text-white text-sm sm:text-base hover:shadow-lg hover:text-shadow-lg transition duration-300 hover:underline " +
        className
      }
    >
      {btnName}
    </button>
  );
};

export default Button;
