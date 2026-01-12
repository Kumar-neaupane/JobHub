import React from "react";
import { useNavigate } from "react-router-dom";

const Whitebtn = ({ className, btnName ,to}) => {
  const navigate = useNavigate();
  return (
    <button
    onClick={()=>navigate(to)}
      className={
        "Whitebtn bg-[#00B074] p-3 cursor-pointer text-black text-sm sm:text-base hover:bg-stone-300 hover:text-shadow-lg transition duration-300 hover:underline " +
        className
      }
    >
      {btnName}
    </button>
  );
};

export default  Whitebtn;
