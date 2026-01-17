import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Smallcard = ({ title, companyName, Time }) => {
  return (
    <div className="flex flex-col gap-1 text-sm text-gray-700">
      <h1 className="text-base font-semibold text-[var(--heading)]">{title}</h1>
      <p className="text-gray-500">{companyName}</p>
      <p className="text-gray-400 text-xs flex items-center gap-2">
        <FontAwesomeIcon icon={faClock} />
        <span>{Time}</span>
      </p>
    </div>
  );
};

export default Smallcard;
