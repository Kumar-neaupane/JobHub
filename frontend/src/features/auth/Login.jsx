import React from "react";
import LoginImg from "../../assets/images/loginpageimg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../home/components/Navbar";
import Footer from "../../components/Footer";
import LeftsideCard from "./components/LeftsideCard";
import RightTop from "./components/RightTop";
import {Link} from "react-router-dom";
import Loginpageinput from "./components/Loginpageinput";
import { useForm } from "react-hook-form";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [success, setSuccess] = useState(false);
    const {
      register,
      handleSubmit,
      reset,
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
            <RightTop children="Welcome Back" topline="Login to continue your job search"/>
            
            
            <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3 sm:gap-4">
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
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 my-4 sm:my-6">
                <label className="flex flex-row items-center gap-2 text-sm sm:text-base text-[var(--paragraph-color)] cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-[var(--bg-color)] rounded border-gray-300" />
                  <span>Remember Me</span>
                </label>

                <p className="text-sm sm:text-base underline text-[var(--bg-color)] cursor-pointer hover:opacity-80 transition">
                  Forgot Password?
                </p>
              </div>

              <Button
                className="w-full rounded-lg text-sm sm:text-base"
                btnName="Login"
                type="submit"
              />
                  {success && (
                <p className="text-green-500 my-8 flex text-center justify-center items-center">
                  Login Successful!
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
              Don't have an account?{" "}
              <Link to="/register"><span className="text-[var(--bg-color)] underline cursor-pointer hover:opacity-80 transition">
                Register
              </span></Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
