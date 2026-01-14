import React from "react";
import Navbar from "../home/components/Navbar";
import Aboutimg from "../../assets/images/image.jpg";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBullseye,
  faEye,
  faStar,
  faShield,
  faArrowCircleUp,
  faLightbulb,
  faUsers,
  faSearch,
  faBuilding,
  faCircleCheck,
  faUser,
  faBriefcase,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";

const About = () => {
  const cardData = [
    {
      id: 1,
      icon: faBullseye,
      heading: "Our Mission",
      paragraph:
        "To connect talented individuals with meaningful career opportunities, fostering growth and success for both job seekers and employers.",
    },
    {
      id: 2,
      icon: faEye,
      heading: "Our Vision",
      paragraph:
        "To be the most trusted and innovative job searching platform, revolutionizing the way people find and connect with career opportunities worldwide.",
    },
    {
      id: 3,
      icon: faStar,
      heading: "Our Promise",
      paragraph:
        "Integrity, Innovation, Customer-Centricity, Collaboration, and Excellence guide our actions and decisions every day.",
    },
  ];
  const valuesDetails = [
    {
      id: 1,
      icon: faShield,
      heading: "Trust",
      paragraph:
        "To connect talented individuals with meaningful career opportunities, fostering growth and success for both job seekers and employers.",
    },
    {
      id: 2,
      icon: faArrowCircleUp,
      heading: "Growth",
      paragraph:
        "To be the most trusted and innovative job searching platform, revolutionizing the way people find and connect with career opportunities worldwide.",
    },
    {
      id: 3,
      icon: faLightbulb,
      heading: "Innovation",
      paragraph:
        "Integrity, Innovation, Customer-Centricity, Collaboration, and Excellence guide our actions and decisions every day.",
    },
    {
      id: 4,
      icon: faUsers,
      heading: "Inclusivity",
      paragraph:
        "We uphold the highest standards of honesty and transparency in all our interactions.",
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="about w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="first flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 shadow-sm p-4 sm:p-6 border border-gray-300 rounded-lg hover:shadow-lg"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--heading)]">
              About Us
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[var(--paragraph-color)]">
              Connecting Talent with Opportunity
            </h2>
            <p className="text-[var(--paragraph-color)] text-base sm:text-lg md:text-xl leading-relaxed">
              We are a leading job searching platform dedicated to bridging the
              gap between talented professionals and innovative companies. Our
              mission is to empower job seekers to find their dream careers
              while helping employers discover exceptional talent that drives
              success.
            </p>
            <div className="flex flex-col py-4 sm:py-6">
              <div className="upper-number flex justify-between text-[var(--bg-color)] font-[900] text-xl sm:text-2xl md:text-3xl">
                <h2>50K+</h2>
                <h2>12K+</h2>
                <h2>95%</h2>
              </div>
              <div className="lower flex justify-between text-[var(--paragraph-color)] py-2 text-sm sm:text-base md:text-lg">
                <h1>Job Seekers</h1>
                <h1>Companies</h1>
                <h1>Success Rate</h1>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={Aboutimg}
              alt="About Us"
              className="w-full h-auto rounded-2xl sm:rounded-3xl"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="second-section my-6 sm:my-8 bg-[#F8F9FF] shadow-lg border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8"
        >
          <div className="flex flex-col text-center gap-2 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[var(--heading)]">What Drives Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)]">
              Our commitment to excellence and innovation shapes everything we
              do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 place-items-center justify-items-center">
            {cardData.map((card) => (
              <Card
                key={card.id}
                icon={card.icon}
                heading={card.heading}
                paragraph={card.paragraph}
              />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="core-values shadow-lg border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 my-6 sm:my-8"
        >
          <div className="top flex flex-col text-center gap-2 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[400] text-[var(--heading)]">
              Our Core Values
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)]">
              The principles that guide our actions and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 place-items-center justify-items-center">
            {valuesDetails.map((value) => (
              <Card
                key={value.id}
                icon={value.icon}
                heading={value.heading}
                paragraph={value.paragraph}
                className=""
              />
            ))}
          </div>
        </div>
        <div 
          className="platforom-highlights bg-[#F8F9FF] my-4 sm:my-6 shadow-lg border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="top flex flex-col gap-2 text-center my-4 sm:my-6 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[400] text-[var(--heading)]">
              Platform Highlights
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)]">
              Comprehensive solutions tailored for every stakeholder
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 py-4 sm:py-6"  data-aos="fade-left"
          data-aos-delay="100">
            <div className="left flex flex-col gap-4 my-4 sm:my-6 w-full lg:w-1/2 py-4 sm:py-6">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-2xl sm:text-3xl md:text-4xl text-[var(--bg-color)]"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-[var(--heading)] font-[600]">
                For Job Seekers
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] leading-relaxed">
                Access thousands of opportunities, get personalized job
                recommendations, and streamline your application process with
                our intelligent matching system.
              </p>
              <div className="flex flex-col gap-2 sm:gap-3 text-[var(--paragraph-color)]">
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Smart Job Matching</span>
                </span>
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Career Resources</span>
                </span>

                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Application Tracking</span>
                </span>
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Salary Insights</span>
                </span>
              </div>
            </div>
            <div className="right w-full lg:w-1/2 py-4">
              <img
                src={Aboutimg}
                alt="About Us"
                className="w-full h-auto rounded-2xl sm:rounded-3xl"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 py-4 sm:py-6 pt-8 sm:pt-12 md:pt-16 lg:pt-20"  data-aos="fade-right"
          data-aos-delay="100">
            <div className="right w-full lg:w-1/2 py-4">
              <img
                src={Aboutimg}
                alt="About Us"
                className="w-full h-auto rounded-2xl sm:rounded-3xl"
              />
            </div>

            <div className="left flex flex-col gap-4 my-4 sm:my-6 w-full lg:w-1/2 py-4 sm:py-6">
              <FontAwesomeIcon
                icon={faUser}
                className="text-2xl sm:text-3xl md:text-4xl text-[var(--bg-color)]"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-[var(--heading)] font-[600]">
                For Employers
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] leading-relaxed">
                Find qualified candidates faster, manage your hiring pipeline
                efficiently, and build your dream team with our advanced
                recruitment tools.
              </p>
              <div className="flex flex-col gap-2 sm:gap-3 text-[var(--paragraph-color)]">
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Talent Pool Access</span>
                </span>
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">ATS Integration</span>
                </span>

                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Screening Tools</span>
                </span>
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Analytics Dashboard</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 py-4 sm:py-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20"  data-aos="fade-left"
          data-aos-delay="0">
            <div className="left flex flex-col gap-4 my-4 sm:my-6 w-full lg:w-1/2 py-4 sm:py-6">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-2xl sm:text-3xl md:text-4xl text-[var(--bg-color)]"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-[var(--heading)] font-[600]">
                For Companies
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] leading-relaxed">
                Build your employer brand, showcase your culture, and attract
                top talent with compelling company profiles and targeted
                outreach.
              </p>
              <div className="flex flex-col gap-2 sm:gap-3 text-[var(--paragraph-color)]">
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Brand Building</span>
                </span>
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Company Pages</span>
                </span>

                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Engagement Metrics</span>
                </span>
                <span className="flex items-start gap-2 sm:gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg">Targeted Reach</span>
                </span>
              </div>
            </div>
            <div className="right w-full lg:w-1/2 py-4">
              <img
                src={Aboutimg}
                alt="About Us"
                className="w-full h-auto rounded-2xl sm:rounded-3xl"
              />
            </div>
          </div>
        </div>


        <div data-aos="fade-up" className="my-6 sm:my-8 md:my-10 bg-[var(--bg-color)] rounded-2xl shadow-sm pb-6 sm:pb-8 md:pb-10"> 
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center justify-center p-4 sm:p-6 text-white gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[600] text-center">Start Your Career Journey Today</h1>
        <p className="text-base sm:text-lg md:text-xl font-[200] text-center max-w-3xl">Join thousands of professionals and companies who have found success through our platform. Whether you're looking for your next opportunity or searching for top talent, we're here to help.</p>
        </div>
<div className="buttons flex flex-col sm:flex-row justify-center items-center py-4 sm:py-6 gap-3 sm:gap-4 px-4">
        <button className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 px-4 sm:px-6 cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-200 w-full sm:w-auto">
        <div className="flex flex-row gap-1 sm:gap-2 items-center justify-center text-[var(--bg-color)] font-[600] text-sm sm:text-base">
          <FontAwesomeIcon  icon={faBriefcase} /> <span>Find Jobs</span>
          <FontAwesomeIcon  icon={faArrowRight} className="ml-1"/>
        </div>

        </button>
        <button className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 px-4 sm:px-6 cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-200 w-full sm:w-auto">
        <div className="flex flex-row gap-1 sm:gap-2 items-center justify-center text-[var(--bg-color)] font-[600] text-sm sm:text-base">
          <FontAwesomeIcon  icon={faBuilding} /> <span>Post a Job</span>
          <FontAwesomeIcon  icon={faArrowRight} className="ml-1"/>
        </div>

        </button>
        </div>


        
        </div>




      </div>
      <Footer />
    </div>
  );
};

export default About;
