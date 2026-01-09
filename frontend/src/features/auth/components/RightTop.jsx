import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBridgeLock,

} from "@fortawesome/free-solid-svg-icons";

const RightTop = ({children,topline}) => {
  return (
      <div className="toppart flex flex-col justify-center items-center gap-2 mb-6">
            <FontAwesomeIcon
              icon={faBridgeLock}
              className="text-5xl text-[var(--bg-color)] mb-4"
            />
            <h1 className="text-4xl font-bold text-[var(--heading)]">
             {children}
            </h1>
            <p className="text-[var(--heading)]">
              {topline}
            </p>
          </div>
  )
}

export default RightTop
