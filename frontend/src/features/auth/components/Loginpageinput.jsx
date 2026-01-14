import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../../components/Input";


const Loginpageinput = ({label,error, clasName,type,placeholder,icon, ...props}) => {
  return (
    <div className="input1 flex flex-col gap-1 sm:gap-2">
                <label className="text-sm sm:text-base text-[var(--paragraph-color)] font-[500]">{label} :</label>

                <div className="relative flex items-center gap-2 sm:gap-3 bg-neutral-200 p-2 sm:p-3 rounded-lg">
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-sm sm:text-base text-[var(--paragraph-color)]"
                  />

                  <Input
                    type={type}
                    placeholder={placeholder}
                    classNames={`bg-neutral-200 w-full text-sm sm:text-base ${clasName}`}
                    error={error}
                    required
                    {...props}
                  />
                  
                </div>
                {error && <span className='text-red-500 text-xs sm:text-sm mt-1 block'>{error.message}</span>}
              </div>
  )
}

export default Loginpageinput
