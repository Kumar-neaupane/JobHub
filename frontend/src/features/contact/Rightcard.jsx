
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rightcard = ({icon,title,text}) => {
  return (
    <div>
       <div className="email-section shadow-lg p-6 rounded-lg border-1 border-gray-300 hover:shadow-2xl flex  flex-row gap-4 items-center">
            <FontAwesomeIcon icon={icon} className="text-[var(--bg-color)] text-3xl "/>
            <div className="text-[var(--paragraph-color)]">
              <h1>{title}</h1>
              <p className="cursor-pointer">{text}</p>

            </div>

            </div>
    </div>
  )
}

export default Rightcard
