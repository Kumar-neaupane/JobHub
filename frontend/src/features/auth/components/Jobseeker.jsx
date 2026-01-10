import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  
  faUserGroup,
  faUser,
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../home/components/Navbar";
import Footer from "../../../components/Footer";
import LeftsideCard from "./LeftsideCard";
import RightTop from "./RightTop";
import { Link } from "react-router-dom";
import Loginpageinput from "./Loginpageinput";
import Employer from "./Employer";

function JobSeeker({ role, setRole }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    
    <>
      <Navbar />
      <div
        className="loginpage mt-20 flex justify-center items-center gap-20  "
        data-aos="fade-left"
        data-aos-delay="0"
      >
        <LeftsideCard />
        <div className="right  w-140 shadow-2xl rounded-2xl p-10 bg-white">
          <RightTop
            children="Create Account"
            topline="Join us and start your job search today!"
          />
          <form>
          <div className="flex flex-row gap-4 items-center mb-4 ">
                      <div onClick={()=>setRole('jobseeker')} className={`border-1 p-2 rounded-lg text-lg w-full flex flex-row justify-center items-center cursor-pointer shadow-sm m-1 gap-2 ${role === 'jobseeker' ? 'border-green-500 bg-blue-100' : 'border-gray-300 hover:border-green-500 hover:bg-blue-100'}`}>
                        <FontAwesomeIcon icon={faUser} className="text-[var(--bg-color)]" />
                        <span className="">Job Seeker</span>
                      </div>
                      <div onClick={()=>setRole('employer')} className={`border-1 p-2 rounded-lg text-lg w-full flex flex-row justify-center items-center cursor-pointer shadow-sm m-1 gap-2 ${role === 'employer' ? 'border-green-500 bg-blue-100' : 'border-gray-300 hover:border-green-500 hover:bg-blue-100'}`}>
                        <FontAwesomeIcon
                          icon={faUserGroup}
                          className="text-[var(--bg-color)]"
                        />{" "}
                        <span className="">Employer</span>
                      </div>
                    </div>

            <div className="flex flex-col gap-2">
            <Loginpageinput label="Username " type="text" placeholder="Eg: Kumar Neupane" icon={faUser} />
          

         
            <Loginpageinput label="Email Address" type="text" placeholder="Eg: example@gmail.com" icon={faEnvelope} />
         
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
                <div className="input3 flex flex-col gap-1 ">
                <label> Confirm Password :</label>
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
            </div>

            <Button
              className=" w-full rounded-lg my-7"
              btnName="Register"
              type="submit"
            />
          </form>

          <div className=" flex flex-row gap-4 items-center py-3 ">
            <div className="flex-1  h-[1px] bg-[var(--paragraph-color)]"></div>
            <div className="w-fit text-[var(--paragraph-color)]">
              or continue with
            </div>
            <div className="flex-1  h-[1px] bg-[var(--paragraph-color)]"></div>
          </div>

          <div className="flex flex-row gap-4 items-center ">
            <div className="google border-1 border-gray-300 p-2 rounded-lg  text-lg  w-full flex fex-row justify-center items-center cursor-pointer shadow-sm m-1 hover:border-1 hover:border-green-500 gap-2 hover:bg-blue-100">
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              <span className="">Google</span>
            </div>
            <div className="linkedin border-1 border-gray-300 p-2  rounded-lg  text-lg w-full flex flex-row justify-center items-center cursor-pointer shadow-sm m-1 hover:border-1 hover:border-green-500 gap-2 hover:bg-blue-100">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-500 text-2xl"
              />{" "}
              <span className="">Linkedin</span>
            </div>
          </div>
          <p className="text-center my-7">
            Don't have an account?{" "}
            <Link to="/login">
              <span className="text-[var(--bg-color)] underline cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobSeeker;
