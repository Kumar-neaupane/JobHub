import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBridgeLock,

} from "@fortawesome/free-solid-svg-icons";

const RightTop = ({children,topline}) => {
  return (
      <div className="toppart flex flex-col justify-center items-center gap-2 mb-4 sm:mb-6">
            <FontAwesomeIcon
              icon={faBridgeLock}
              className="text-3xl sm:text-4xl md:text-5xl text-[var(--bg-color)] mb-2 sm:mb-4"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--heading)] text-center">
             {children}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--heading)] text-center px-2">
              {topline}
            </p>
          </div>
  )
}

export default RightTop
