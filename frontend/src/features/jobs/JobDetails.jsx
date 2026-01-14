import React from "react";
import { useState } from "react";
import JobCard from "./components/JobCard";
import companyImage from "../../assets/images/compangimage.jpeg";

const JobDetails = () => {
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
  const [activeTab, setActiveTab] = useState("Featured");
  const filteredJobs =
    activeTab === "Featured"
      ? cardDetails
      : cardDetails.filter((iteam) => iteam.time === activeTab);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 overflow-x-hidden"
    >
      <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-5 mt-5">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-[var(--heading)]">
          Job Listing
        </h1>
        <div className="topOptions flex flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center text-base sm:text-lg md:text-xl text-[var(--heading)] pb-3">
          <h2
            className="border-b-2 border-transparent transition hover:border-b-2 hover:border-green-500 hover:transition hover:delay-200 cursor-pointer px-2 py-1"
            onClick={() => setActiveTab("Featured")}
          >
            Featured
          </h2>
          <h2
            className="border-b-2 border-transparent transition hover:border-b-2 hover:border-green-500 hover:transition hover:delay-200 cursor-pointer px-2 py-1"
            onClick={() => setActiveTab("Full Time")}
          >
            Full Time
          </h2>
          <h2
            className="border-b-2 border-transparent transition hover:border-b-2 hover:border-green-500 hover:transition hover:delay-200 cursor-pointer px-2 py-1"
            onClick={() => setActiveTab("Part Time")}
          >
            Part Time
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {filteredJobs.map((iteam) => (
          <JobCard
            key={iteam.id}
            companyName={iteam.companyName}
            src={iteam.src}
            location={iteam.location}
            time={iteam.time}
            salary={iteam.salary}
            date={iteam.date}
            desc={iteam.desc}
            skills={iteam.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
