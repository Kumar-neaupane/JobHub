import React from 'react'
import LoginImg from "../../../assets/images/loginpageimg.jpeg";

const LeftsideCard = () => {
  return (
   <div className="left w-140 mt-20">
          <img
            src={LoginImg}
            alt="Login Illustration"
            className="w-120 rounded-2xl"
          />
          <h1 className="text-4xl font-bold text-[var(--heading)] mt-4">
            Find Your Dream Job
          </h1>
          <p className="my-3 text-5 text-[var(--paragraph-color)]">
            Connect with top employers and discover opportunities that <br />{" "}
            match your skills and ambitions. Your next career move starts here.
          </p>
          <div className="flex flex-row gap-3 text-[var(--paragraph-color)]">
            <p>
              <span className="text-[var(--bg-color)] font-extrabold text-lg">
                10K+
              </span>{" "}
              <br />
              Active Jobs
            </p>
            <p>
              <span className="text-[var(--bg-color)] font-extrabold text-lg">
                5K+
              </span>{" "}
              <br />
              Companies
            </p>
            <p>
              <span className="text-[var(--bg-color)] font-extrabold text-lg">
                50K+
              </span>{" "}
              <br />
              Jobs Seekers
            </p>
          </div>
        </div>
  )
}

export default LeftsideCard
