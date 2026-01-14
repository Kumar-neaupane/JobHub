import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuilding,
  faPaste,
  faSignsPost,
  faFile,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../home/components/Navbar";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Select from "./components/Select";
import Loginpageinput from "../auth/components/Loginpageinput";
import Textarea from "./components/Textarea";
import { useState } from "react";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const PostJob = () => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // size validation (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be under 5MB");
      return;
    }

    setPreview(URL.createObjectURL(file));
  };
  return (
    <div data-aos="fade-left" data-aos-delay="0" className="jopbost overflow-x-hidden">
      <Navbar />
      <div className="mt-4 sm:mt-6 md:mt-8 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="topdiv p-4 sm:p-6 border-b border-gray-300 shadow-sm flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <FontAwesomeIcon
              icon={faPaste}
              className="text-2xl sm:text-3xl md:text-4xl text-[var(--bg-color)]"
            />
            <span className="text-2xl sm:text-3xl md:text-4xl font-[600] text-[var(--heading)]">
              Post a Job
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[var(--paragraph-color)]">
            Fill in the details below to post your job opening
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="Basic-job-info shadow-lg p-4 sm:p-6 md:p-8 lg:p-9 rounded-lg border border-gray-200 mt-4 sm:mt-6"
        >
          <div className="title flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
            <FontAwesomeIcon
              icon={faSignsPost}
              className="text-xl sm:text-2xl text-[var(--bg-color)]"
            />
            <span className="text-2xl sm:text-3xl font-[600] text-[var(--paragraph-color)]">
              Basic Job Info
            </span>
          </div>
          <div className="input-feilds">
            <div className="firstline flex flex-col sm:flex-row w-full gap-4 mt-4">
              <div className="flex flex-col w-full">
                <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500] mb-1">
                  Job Title:
                </label>
                <Input
                  placeholder="Enter job title"
                  classNames="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500] mb-1">
                  Company Name *:
                </label>
                <Input
                  placeholder="Enter company name"
                  classNames="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="secondline flex flex-col sm:flex-row w-full gap-4 mt-4">
              <div className="flex flex-col w-full">
                <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500] mb-1">
                  Category:
                </label>
                <Select className="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base text-[var(--paragraph-color)]">
                  <option>Select a category</option>
                  <option>technology</option>
                  <option>education</option>
                  <option>fincance</option>
                </Select>
              </div>
              <div className="flex flex-col w-full">
                <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500] mb-1">
                  Job Type:
                </label>
                <Select className="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base text-[var(--paragraph-color)]">
                  <option>Select job type</option>
                  <option>technology</option>
                  <option>education</option>
                  <option>fincance</option>
                </Select>
              </div>
            </div>
            <div className="thirdline flex flex-col sm:flex-row w-full gap-4 mt-4">
              <div className="flex flex-col w-full">
                <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500] mb-1">
                  Job Location:
                </label>
                <Input
                  placeholder="Enter job Location"
                  classNames="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base"
                />
              </div>
              <div className="flex flex-col w-full"></div>
            </div>
          </div>
        </div>
        {/* jobdetails */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="jobdetails shadow-lg p-4 sm:p-6 md:p-8 lg:p-9 rounded-lg border border-gray-200 mt-4 sm:mt-6 mb-4 sm:mb-6"
        >
          <div className="title flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
            <FontAwesomeIcon
              icon={faFile}
              className="text-xl sm:text-2xl text-[var(--bg-color)]"
            />
            <span className="text-2xl sm:text-3xl font-[600] text-[var(--paragraph-color)]">
              Job Details
            </span>
          </div>

          <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Salary Range Section */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500]">
                Salary Range
              </label>
              <p className="text-xs sm:text-sm text-gray-500">
                Enter annual salary in USD
              </p>
              <div className="flex flex-row gap-3 sm:gap-4">
                <div className="flex items-center gap-2 flex-1">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="text-gray-400 text-sm sm:text-base"
                  />
                  <Input
                    placeholder="Min"
                    classNames="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base"
                    type="number"
                  />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="text-gray-400 text-sm sm:text-base"
                  />
                  <Input
                    placeholder="Max"
                    classNames="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base"
                    type="number"
                  />
                </div>
              </div>
            </div>

            {/* Experience Level Section */}
            <div className="flex flex-col gap-1 md:mt-0 mt-4">
              <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500] mb-1">
                Experience Level
              </label>
              <Select className="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base text-[var(--paragraph-color)]">
                <option>Select experience level</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
                <option>Executive</option>
              </Select>
            </div>
            
            <div className="flex flex-col w-full gap-1 md:col-span-2">
              <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500] mb-1">
                Application Deadline:
              </label>
              <Input
                placeholder="MM/DD/YYYY"
                classNames="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base"
              />
            </div>
          </div>
          
          <Textarea
            label="Job Description:"
            placeholder="Enter job description here"
            className="w-full"
          />
          <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-6">
            <Textarea
              label="Key Responsibilities:"
              placeholder="Enter key responsibilities here"
              className="w-full text-[var(--paragraph-color)]"
              wrapperClassName="w-full md:flex-1"
            />

            <Textarea
              label="Requirements & Qualifications:"
              placeholder="Enter Requirements and qualification here"
              className="w-full text-[var(--paragraph-color)]"
              wrapperClassName="w-full md:flex-1"
            />
          </div>
        </div>
        {/* company description */}

        <div  data-aos="fade-up"
            data-aos-delay="200" className="company-description shadow-lg p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 mt-4 sm:mt-6 mb-4 sm:mb-6">
          <div className="title flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-xl sm:text-2xl text-[var(--bg-color)]"
            />
            <span className="text-2xl sm:text-3xl font-[600] text-[var(--paragraph-color)]">
              Company Information
            </span>
          </div>
          {/* file input */}
          <div className="inputfile flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 mt-4 sm:mt-6">
            <div className="w-full my-2 sm:my-4">
              <label
                htmlFor="logoUpload"
                className="flex flex-col items-center justify-center gap-2
                   border-2 border-dashed border-gray-300
                   rounded-lg p-4 sm:p-6 md:p-8 cursor-pointer text-center
                   hover:border-blue-500 hover:bg-gray-50
                   transition min-h-[120px] sm:min-h-[150px]"
              >
                {!preview ? (
                  <>
                   
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0l-4 4m4-4l4 4"
                      />
                    </svg>

                    <p className="font-semibold text-sm sm:text-base text-gray-700">
                      Upload company logo
                    </p>
                    <span className="text-xs sm:text-sm text-gray-500">
                      PNG, JPG up to 5MB
                    </span>
                  </>
                ) : (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-20 sm:h-24 md:h-28 object-contain"
                  />
                )}
              </label>

              <input
                type="file"
                id="logoUpload"
                accept="image/png, image/jpeg"
                onChange={handleChange}
                className="hidden"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-sm sm:text-base text-[var(--paragraph-color)] font-[500] mb-1">
                Company Website:
              </label>
              <Input
                placeholder="https://www.example.com"
                classNames="w-full border border-gray-300 hover:border-green-500 text-sm sm:text-base"
              />
            </div>
          </div>

          <Textarea
            label="Company Description:"
            placeholder="Enter company description here"
            className="w-full text-[var(--paragraph-color)]"
            wrapperClassName="mt-4 sm:mt-6"
          />
        </div>
        <div className="button-section flex justify-center sm:justify-end mt-4 sm:mt-6 mb-4 sm:mb-6"  data-aos="fade-up">
        <Button  className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 rounded-sm hover:shadow-2xl text-sm sm:text-base" btnName="Post Job"/>

        </div>





      </div>
      <Footer />
    </div>
  );
};

export default PostJob;
