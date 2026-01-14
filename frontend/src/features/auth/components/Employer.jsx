import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    faBuilding,
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
import { useForm } from "react-hook-form";

function Employer({ role, setRole }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
    const [success, setSuccess] = useState(false);
    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      setSuccess(data);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      setTimeout(() => reset(), 1000);
    };
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden min-h-screen">
        <div
          className="loginpage mt-8 sm:mt-12 lg:mt-20 flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <LeftsideCard />
          <div className="right w-full max-w-md lg:max-w-lg xl:max-w-xl shadow-2xl rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 bg-white">
            <RightTop
              children="Create Account"
              topline="Join us and start your job search today!"
            />


            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mb-4 sm:mb-6">
                        <div onClick={()=>setRole('jobseeker')} className={`border p-2 sm:p-3 rounded-lg text-sm sm:text-base md:text-lg w-full flex flex-row justify-center items-center cursor-pointer shadow-sm gap-2 transition ${role === 'jobseeker' ? 'border-green-500 bg-blue-100' : 'border-gray-300 hover:border-green-500 hover:bg-blue-100'}`}>
                          <FontAwesomeIcon icon={faUser} className="text-sm sm:text-base text-[var(--bg-color)]" />
                          <span>Job Seeker</span>
                        </div>
                        <div onClick={()=>setRole('employer')} className={`border p-2 sm:p-3 rounded-lg text-sm sm:text-base md:text-lg w-full flex flex-row justify-center items-center cursor-pointer shadow-sm gap-2 transition ${role === 'employer' ? 'border-green-500 bg-blue-100' : 'border-gray-300 hover:border-green-500 hover:bg-blue-100'}`}>
                          <FontAwesomeIcon
                            icon={faUserGroup}
                            className="text-sm sm:text-base text-[var(--bg-color)]"
                          />
                          <span>Employer</span>
                        </div>
                      </div>

              <div className="flex flex-col gap-3 sm:gap-4">
              <Loginpageinput label="Username " type="text" placeholder="Eg: Kumar Neupane" icon={faUser} 
                {...register("username", {
                  required: "Username is Required",
                })}
                error={errors.username}
              />
              <Loginpageinput label="Company Name" type="text" placeholder="Eg: ABC Corp" icon={faBuilding} 
                {...register("companyName", {
                  required: "Company Name is Required",
                })}
                error={errors.companyName}
              />
          
              <Loginpageinput label="Email Address" type="text" placeholder="Eg: example@gmail.com" icon={faEnvelope} 
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                error={errors.email}
              />
           
                <div className="input2 flex flex-col gap-1 sm:gap-2">
                  <label className="text-sm sm:text-base text-[var(--paragraph-color)] font-[500]">Password :</label>
                  <div className="relative flex items-center gap-2 sm:gap-3 bg-neutral-200 p-2 sm:p-3 w-full rounded-lg">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-sm sm:text-base text-[var(--paragraph-color)]"
                    />

                    <Input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter your password"
                      classNames="w-full outline-0 bg-neutral-200 text-sm sm:text-base"
                      {...register("password", {
                        required: "Password is Required",
                        minLength:{
                          value:6,
                          message:"Password must be at least 6 characters"
                        },
                        pattern:{
                          value:/^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                          message:"Password must contain at least one letter and one number"
                        }
                      })}
                      error={errors.password}
                    />
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      className="hover:text-green-500 text-sm sm:text-base text-[var(--paragraph-color)] cursor-pointer transition delay-100"
                    />
                  </div>
                  {errors.password && <span className='text-red-500 text-xs sm:text-sm mt-1 block'>{errors.password.message}</span>}
                </div>
                  <div className="input3 flex flex-col gap-1 sm:gap-2">
                  <label className="text-sm sm:text-base text-[var(--paragraph-color)] font-[500]">Confirm Password :</label>
                  <div className="relative flex items-center gap-2 sm:gap-3 bg-neutral-200 p-2 sm:p-3 w-full rounded-lg">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-sm sm:text-base text-[var(--paragraph-color)]"
                    />

                    <Input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Confirm your password"
                      classNames="w-full outline-0 bg-neutral-200 text-sm sm:text-base"
                      required
                      {...register("confirmPassword", {
                        required: "Confirm Password is Required",
                        validate: (value) =>
                          value === watch("password") || "Passwords do not match",
                      })}
                      error={errors.confirmPassword}
                      />
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      className="hover:text-green-500 text-sm sm:text-base text-[var(--paragraph-color)] cursor-pointer transition delay-100"
                    />
                  </div>
                  {errors.confirmPassword && <span className='text-red-500 text-xs sm:text-sm mt-1 block'>{errors.confirmPassword.message}</span>}
                </div>
              </div>

              <Button
                className="w-full rounded-lg my-4 sm:my-6 md:my-7 text-sm sm:text-base"
                btnName="Register"
                type="submit"
              />
              {success && (
                <p className="text-green-500 my-4 sm:my-6 md:my-7 flex text-center justify-center items-center">
                  Registration Successful!
                </p>
              )}
            </form>
            <div className="flex flex-row gap-3 sm:gap-4 items-center py-4 sm:py-6">
              <div className="flex-1 h-[1px] bg-[var(--paragraph-color)]"></div>
              <div className="w-fit text-xs sm:text-sm md:text-base text-[var(--paragraph-color)] whitespace-nowrap">
                or continue with
              </div>
              <div className="flex-1 h-[1px] bg-[var(--paragraph-color)]"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
              <div className="google border border-gray-300 p-2 sm:p-3 rounded-lg text-sm sm:text-base md:text-lg w-full flex flex-row justify-center items-center cursor-pointer shadow-sm hover:border-green-500 gap-2 hover:bg-blue-100 transition">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-base sm:text-lg" />
                <span>Google</span>
              </div>
              <div className="linkedin border border-gray-300 p-2 sm:p-3 rounded-lg text-sm sm:text-base md:text-lg w-full flex flex-row justify-center items-center cursor-pointer shadow-sm hover:border-green-500 gap-2 hover:bg-blue-100 transition">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-500 text-lg sm:text-xl md:text-2xl"
                />
                <span>Linkedin</span>
              </div>
            </div>
            <p className="text-center my-6 sm:my-7 text-sm sm:text-base">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[var(--bg-color)] underline cursor-pointer hover:opacity-80 transition">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Employer;
