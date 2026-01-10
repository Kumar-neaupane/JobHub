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
    <div data-aos="fade-left" data-aos-delay="0" className="jopbost">
      <Navbar />
      <div className="mt-4 mx-60 ">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="topdiv p-6  border-b-1 border-gray-300  shadow-sm flex flex-col gap-2   "
        >
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faPaste}
              className="text-[var(--bg-color)] text-4xl"
            />{" "}
            <span className="text-3xl font-[600] text-[var(--heading)]">
              Post a Job
            </span>
          </div>
          <p className="text-[var(--paragraph-color)]">
            Fill in the details below to post your job opening
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="Basic-job-info shadow-lg p-9 rounded-lg border-1 border-gray-200 mt-6"
        >
          <div className="title  mt-8">
            <FontAwesomeIcon
              icon={faSignsPost}
              className="text-[var(--bg-color)] text-2xl"
            />{" "}
            <span className="text-3xl font-[600] text-[var(--paragraph-color)]">
              Basic Job Info
            </span>
          </div>
          <div className="input-feilds  ">
            <div className="firstline flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <label className="block mt-4 text-[var(--paragraph-color)] font-[500]">
                  Job Title:
                </label>
                <Input
                  placeholder="Enter job title"
                  classNames="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500 "
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label className="block mt-4 text-[var(--paragraph-color)] font-[500]">
                  Company Name *:
                </label>
                <Input
                  placeholder="Enter company name"
                  classNames="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500"
                />
              </div>
            </div>
            <div className="secondline flex flex-row w-full gap-4">
              <div className="flex flex-col w-full gap-1">
                <label className="block mt-4 text-[var(--paragraph-color)] font-[500]">
                  Category:
                </label>
                <Select className="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500 text-[var(--paragraph-color)]">
                  <option>Select a category</option>
                  <option>technology</option>
                  <option>education</option>
                  <option>fincance</option>
                </Select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label className="block mt-4 text-[var(--paragraph-color)] font-[500]">
                  Job Type:
                </label>
                <Select className="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500 text-[var(--paragraph-color)]">
                  <option>Select job type</option>
                  <option>technology</option>
                  <option>education</option>
                  <option>fincance</option>
                </Select>
              </div>
            </div>
            <div className="thirdline flex flex-row w-full gap-4">
              <div className="flex flex-col w-full gap-1">
                <label className="block mt-4 text-[var(--paragraph-color)] font-[500]">
                  Job Location:
                </label>
                <Input
                  placeholder="Enter job Location"
                  classNames="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500"
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
          className="jobdetails shadow-lg p-9 rounded-lg border-1 border-gray-200 mt-6 mb-6"
        >
          <div className="title  mt-8">
            <FontAwesomeIcon
              icon={faFile}
              className="text-[var(--bg-color)] text-2xl"
            />{" "}
            <span className="text-3xl font-[600] text-[var(--paragraph-color)]">
              Job Details
            </span>
          </div>

          <div
            className="mt-6 flex gap-6"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          >
            {/* Salary Range Section */}
            <div className="flex flex-col gap-2">
              <label className="block text-[var(--paragraph-color)] font-[500]">
                Salary Range
              </label>
              <p className="text-sm text-gray-500">
                Enter annual salary in USD
              </p>
              <div className="flex flex-row gap-4">
                <div className="flex items-center gap-2 flex-1">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="text-gray-400"
                  />
                  <Input
                    placeholder="Min"
                    classNames="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500"
                    type="number"
                  />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="text-gray-400"
                  />
                  <Input
                    placeholder="Max"
                    classNames="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500"
                    type="number"
                  />
                </div>
              </div>
            </div>

            {/* Experience Level Section */}
            <div className="flex flex-col gap-1 mt-8">
              <label className="block text-[var(--paragraph-color)] font-[500]">
                Experience Level
              </label>
              <Select className="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500 text-[var(--paragraph-color)]">
                <option>Select experience level</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
                <option>Executive</option>
              </Select>
            </div>
            <div className="thirdline flex flex-row w-full gap-4">
              <div className="flex flex-col w-full gap-1">
                <label className="block mt-4 text-[var(--paragraph-color)] font-[500]">
                  Application Deadline:
                </label>
                <Input
                  placeholder="MM/DD/YYYY"
                  classNames="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500"
                />
              </div>
              <div className="flex flex-col w-full"></div>
            </div>

            
          </div>
          <Textarea
            label="Job Description:"
            placeholder="Enter job description here"
            className="w-full"
          />
          <div className="flex flex-row w-full gap-6">
            <Textarea
              label="Key Responsibilities:"
              placeholder="Enter key responsibilities here"
              className="w-full text-[var(--paragraph-color)]"
              wrapperClassName="flex-1"
            />

            <Textarea
              label="Requirements & Qualifications:"
              placeholder="Enter Requirements and qualification here"
              className="w-full text-[var(--paragraph-color)]"
              wrapperClassName="flex-1"
            />
          </div>
        </div>
        {/* company description */}

        <div  data-aos="fade-up"
            data-aos-delay="200" className="company-description shadow-lg p-8 rounded-lg border-1 border-gray-200 mt-6 mb-6">
          <div className="title  mt-8">
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-[var(--bg-color)] text-2xl"
            />{" "}
            <span className="text-3xl font-[600] text-[var(--paragraph-color)]">
              Company Information
            </span>
          </div>
          {/* file input */}
          <div className="inputfile flex flex-row gap-10">
            <div className="w-full   my-4">
              <label
                htmlFor="logoUpload"
                className="flex flex-col items-center justify-center gap-2
                   border-2 border-dashed border-gray-300
                   rounded-lg p-8 cursor-pointer text-center
                   hover:border-blue-500 hover:bg-gray-50
                   transition"
              >
                {!preview ? (
                  <>
                   
                    <svg
                      className="w-8 h-8 text-gray-500"
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

                    <p className="font-semibold text-gray-700">
                      Upload company logo
                    </p>
                    <span className="text-sm text-gray-500">
                      PNG, JPG up to 5MB
                    </span>
                  </>
                ) : (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-24 object-contain"
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
            <div className="flex flex-col w-full gap-1">
              <label className="block mt-4 text-[var(--paragraph-color)] font-[500]">
                Company Website:
              </label>
              <Input
                placeholder="https://www.example.com"
                classNames="w-full border-1 border-gray-300 hover:border-1 hover:border-green-500"
              />
            </div>
          </div>

          <Textarea
            label="Company Description:"
            placeholder="Enter company description here"
            className="w-full text-[var(--paragraph-color)]"
            wrapperClassName="mt-6"
          />
        </div>
        <div className="button-section flex justify-end"  data-aos="fade-up">
        <Button  className=" px-8 rounded-sm hover:shadow-2xl " btnName="Post Job"/>

        </div>





      </div>
      <Footer />
    </div>
  );
};

export default PostJob;
