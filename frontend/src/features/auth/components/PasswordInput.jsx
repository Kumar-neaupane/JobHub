import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input";

const PasswordInput = () => {
     const [passwordVisible, setPasswordVisible] = useState(false);
      const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
  return (
   <div className="input2 flex flex-col gap-1 ">
                <label>Password :</label>
                <div className="relative flex items-center gap-2 bg-neutral-200 p-2 w-full rounded-lg">
                  <FontAwesomeIcon
                    icon={faLock}
                    className=" text-[var(--paragraph-color)]  "
                  />

                  <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    classNames=" w-full outline-0 "
                    required
                  />
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className="hover:text-green-500 text-[var(--paragraph-color)] cursor-pointer transition delay-100"
                  />
                </div>
              </div>
  )
}

export default PasswordInput
