import React from 'react'
import LoginImg from "../../../assets/images/loginpageimg.jpeg";

const LeftsideCard = () => {
  return (
   <div className="left w-full lg:w-1/2 xl:w-auto mt-8 sm:mt-12 lg:mt-20 px-4 sm:px-6 lg:px-0">
          <img
            src={LoginImg}
            alt="Login Illustration"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 rounded-xl sm:rounded-2xl"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--heading)] mt-4 sm:mt-6 text-center lg:text-left">
            Find Your Dream Job
          </h1>
          <p className="my-3 sm:my-4 text-sm sm:text-base md:text-lg text-[var(--paragraph-color)] text-center lg:text-left">
            Connect with top employers and discover opportunities that{" "}
            <span className="hidden sm:inline"><br /></span>{" "}
            match your skills and ambitions. Your next career move starts here.
          </p>
          <div className="flex flex-row justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 text-[var(--paragraph-color)] mt-4 sm:mt-6">
            <p className="text-center">
              <span className="text-[var(--bg-color)] font-extrabold text-base sm:text-lg md:text-xl block">
                10K+
              </span>
              <span className="text-xs sm:text-sm md:text-base block mt-1">Active Jobs</span>
            </p>
            <p className="text-center">
              <span className="text-[var(--bg-color)] font-extrabold text-base sm:text-lg md:text-xl block">
                5K+
              </span>
              <span className="text-xs sm:text-sm md:text-base block mt-1">Companies</span>
            </p>
            <p className="text-center">
              <span className="text-[var(--bg-color)] font-extrabold text-base sm:text-lg md:text-xl block">
                50K+
              </span>
              <span className="text-xs sm:text-sm md:text-base block mt-1">Jobs Seekers</span>
            </p>
          </div>
        </div>
  )
}

export default LeftsideCard
