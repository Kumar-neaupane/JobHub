import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../../components/Input";


const Loginpageinput = ({label,clasName,type,placeholder,icon}) => {
  return (
    <div className="input1 flex flex-col gap-1">
                <label>{label} :</label>

                <div className="relative flex items-center gap-2 bg-neutral-200 p-2 w-full rounded-lg">
                  <FontAwesomeIcon
                    icon={icon}
                    className=" text-[var(--paragraph-color)]  "
                  />

                  <Input
                    type={type}
                    placeholder={placeholder}
                    classNames={`bg-neutral-200  w-full ${clasName}`}
                    required
                  />
                </div>
              </div>
  )
}

export default Loginpageinput
