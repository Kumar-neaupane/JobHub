import React from "react";
import Navbar from "../home/components/Navbar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import companyImage from "../../assets/images/compangimage.jpeg";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../components/Dropdown";
import Whitebtn from "../../components/Whitebtn";
import JobCard from "./components/JobCard";
import Footer from "../../components/Footer";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const cardDetails = [
    {
      id: 1,
      companyName: "Google LLC",
      src: companyImage,
      location: "California, USA",
      time: "Full Time",
      salary: "$120,000 - $150,000",
      date: "2025/10/20",
      desc: "We're looking for an experienced frontend developer to join our team and build amazing user experiences.",
      skills: "React, JavaScript, CSS",
    },
    {
      id: 2,
      companyName: "Microsoft Corp",
      src: companyImage,
      location: "Redmond, USA",
      time: "Part Time",
      salary: "$80,000 - $100,000",
      date: "2025/11/15",
      desc: "We're looking for an experienced frontend developer to join our team and build amazing user experiences.",
      skills: "React, JavaScript, CSS",
    },
    {
      id: 3,
      companyName: "Apple Inc",
      src: companyImage,
      location: "Cupertino, USA",
      time: "Full Time",
      salary: "$130,000 - $160,000",
      date: "2025/12/01",
      desc: "We're looking for an experienced frontend developer to join our team and build amazing user experiences.",
      skills: "React, JavaScript, CSS",
    },
    {
      id: 4,
      companyName: "Amazon.com Inc",
      src: companyImage,
      location: "Seattle, USA",
      time: "Contract",
      salary: "$90,000 - $120,000",
      date: "2025/09/30",
      desc: "We're looking for an experienced frontend developer to join our team and build amazing user experiences.",
      skills: "React, JavaScript, CSS",
    },
    {
      id: 5,
      companyName: "Amazon.com Inc",
      src: companyImage,
      location: "Seattle, USA",
      time: "Contract",
      salary: "$90,000 - $120,000",
      date: "2025/09/30",
      desc: "We're looking for an experienced frontend developer to join our team and build amazing user experiences.",
      skills: "React, JavaScript, CSS",
    },
    {
      id: 6,
      companyName: "Amazon.com Inc",
      src: companyImage,
      location: "Seattle, USA",
      time: "Contract",
      salary: "$90,000 - $120,000",
      date: "2025/09/30",
      desc: "We're looking for an experienced frontend developer to join our team and build amazing user experiences.",
      skills: "React, JavaScript, CSS",
    },
  ];
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = cardDetails.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(cardDetails.length / itemsPerPage);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="jobs w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="top-section shadow-sm p-4 sm:p-6 border border-gray-300 rounded-lg my-4 sm:my-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 py-4 sm:py-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-[600] text-[var(--heading)]">
                Find Your Dream Job
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[var(--paragraph-color)]">
                Discover opportunities from leading companies
              </p>
            </div>
            <h2 className="bg-stone-200 h-10 rounded flex items-center px-3 sm:px-4 text-sm sm:text-base text-[var(--paragraph-color)] font-[600] whitespace-nowrap">
              {cardDetails.length} Jobs Available
            </h2>
          </div>
          <div className="input-feilds flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <div className="p-2 relative flex items-center border border-gray-300 hover:border-green-500 rounded-xl sm:rounded-2xl w-full">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[var(--paragraph-color)] ml-2"
              />
              <Input classNames="w-full" placeholder="Search for jobs..." />
            </div>
            <div className="p-2 relative flex items-center border border-gray-300 hover:border-green-500 rounded-xl sm:rounded-2xl w-full">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[var(--paragraph-color)] ml-2"
              />
              <Input classNames="w-full" placeholder="Location..." />
            </div>
            <Button className="w-full sm:w-auto px-6 rounded-lg whitespace-nowrap" btnName="Search" />
          </div>
        </div>

        <div
          className="sidebar-main-content flex flex-col lg:flex-row gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* SideBar */}
          <Sidebar />
          <div className="right w-full">
            <div className="top flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 py-4">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-[900] text-[var(--heading)]">
                  All Jobs
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[var(--paragraph-color)] mt-1">
                  Showing {cardDetails.length} results
                </p>
              </div>
              <div className="experience-level w-full sm:w-auto text-[var(--paragraph-color)]">
                <Dropdown className="rounded-sm border border-gray-300 my-2 w-full sm:w-auto">
                  <option>Most Recent</option>
                  <option>Most Relevant</option>
                  <option>Salary : High to Low</option>
                  <option>Salary : Low to High</option>
                </Dropdown>
              </div>
            </div>
            <div  data-aos="fade-up"
          data-aos-delay="200"
             className="jobs-card grid grid-cols-1 gap-4">
              {currentJobs.map((card) => (
                <JobCard
                  key={card.id}
                  companyName={card.companyName}
                  src={card.src}
                  location={card.location}
                  time={card.time}
                  salary={card.salary}
                  date={card.date}
                  desc={card.desc}
                  skills={card.skills}
                />
              ))}
            </div>
            <div className="flex gap-2 justify-center mt-6">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded-md border
          ${
            currentPage === index + 1
              ? "bg-[#00B074] text-white"
              : "bg-white text-gray-700"
          }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
