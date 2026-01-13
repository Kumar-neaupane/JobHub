import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({icon, className, paragraph, heading}) => {
  return (
    <div className="">
      
      <div className="shadow-lg border-1 border-gray-300 rounded-2xl hover:shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 ease-in-out mb-6">
        <div className="flex flex-col px-4 py-4">
        <FontAwesomeIcon icon={icon}  className={`text-3xl py-2 text-[var(--bg-color)] ${className}`}/>
       <h1 className="text-4xl p-2 text-[var(--heading)]">{heading}</h1>
       <p className="text-lg text-[var(--paragraph-color)]">{paragraph}</p>

        </div> 
      </div>
     

  
    </div>
  );
};

export default Card;
