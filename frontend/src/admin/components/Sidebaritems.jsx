import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebaritems = ({ icon, name,className }) => {
  return (
    <div> 
      <div className=" flex flex-row items-center gap-1 hover:bg-green-200 rounded-lg transition delay-100 cursor-pointer group ">
        <FontAwesomeIcon
          icon={icon}
          className={`text-[var(--bg-color)] text-2xl  p-2 ${className}`}
        />
        <h1 className="text-[var(--heading)] text-xl group-hover:text-[var(--bg-color)] transition delay-20">{name}</h1>
      </div>
    </div>
  );
};

export default Sidebaritems;
