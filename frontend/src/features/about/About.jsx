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
    <div>
      <Navbar />
      <div className="about mx-60 my-10 ">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="first flex flex-row gap-10 shadow-sm p-6 border-1 border-gray-300 rounded-lg hover:shadow-lg"
        >
          <div className="w-1/2 flex flex-col gap-4 ">
            <h1 className="text-3xl font-bold text-[var(--heading)]">
              About Us
            </h1>
            <h2 className="text-2xl text-[var(--paragraph-color)]">
              Connecting Talent with Opportunity
            </h2>
            <p className="text-[var(--paragraph-color)] text-[18px]">
              We are a leading job searching platform dedicated to bridging the
              gap between talented professionals and innovative companies. Our
              mission is to empower job seekers to find their dream careers
              while helping employers discover exceptional talent that drives
              success.
            </p>
            <div className="flex flex-col py-6">
              <div className="upper-number flex justify-between text-[var(--bg-color)] font-[900] text-2xl ">
                <h2>50K+</h2>
                <h2>12K+</h2>
                <h2>95%</h2>
              </div>
              <div className="lower flex justify-between text-[var(--paragraph-color)] py-2">
                <h1>Job Seekers</h1>
                <h1>Companies</h1>
                <h1>Success Rate</h1>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={Aboutimg}
              alt="About Us"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="second-section my-6 bg-[#F8F9FF] shadow-lg border-1 border-gray-300 rounded-lg"
        >
          <div className="flex flex-col text-center gap-2 py-4">
            <h1 className="text-3xl text-[var(--heading)]">What Drives Us</h1>
            <p className="text-[18px] text-[var(--paragraph-color)]">
              Our commitment to excellence and innovation shapes everything we
              do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 place-items-center justify-items-center ">
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
          className="core-values shadow-lg border-1 border-gray-300 rounded-lg p-6 my-6"
        >
          <div className="top flex flex-col text-center gap-2 py-4 ">
            <h1 className="text-3xl font-[400] text-[var(--heading)]">
              Our Core Values
            </h1>
            <p className="text-[var(--paragraph-color)]">
              The principles that guide our actions and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 place-items-center justify-items-center ">
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
          className="platforom-highlights my-4 shadow-lg border-1 border-gray-300 rounded-lg p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="top flex flex-col gap-2 text-center my-4 py-4">
            <h1 className="text-3xl font-[400] text-[var(--heading)]">
              Platform Highlights
            </h1>
            <p className="text-[var(--paragraph-color)]">
              Comprehensive solutions tailored for every stakeholder
            </p>
          </div>
          <div className="flex flex-row gap-8 py-4"  data-aos="fade-left"
          data-aos-delay="100">
            <div className="left flex flex-col  gap-4 my-6 w-1/2 py-6">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-3xl text-[var(--bg-color)]"
              />
              <h1 className="text-3xl text-[var(--heading)] font-[600]">
                For Job Seekers
              </h1>
              <p className="text-[var(--paragraph-color)] ">
                Access thousands of opportunities, get personalized job
                recommendations, and streamline your application process with
                our intelligent matching system.
              </p>
              <div className="flex flex-col gap-2 text-[var(--paragraph-color)]">
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Smart Job Matching
                </span>
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Career Resources
                </span>

                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Application Tracking
                </span>
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Salary Insights
                </span>
              </div>
            </div>
            <div className="right py-4">
              <img
                src={Aboutimg}
                alt="About Us"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>

          <div className="flex flex-row gap-8 py-4 pt-20"  data-aos="fade-right"
          data-aos-delay="100">
            <div className="right py-4">
              <img
                src={Aboutimg}
                alt="About Us"
                className="w-full h-auto rounded-3xl"
              />
            </div>

            <div className="left flex flex-col  gap-4 my-6 w-1/2 py-6">
              <FontAwesomeIcon
                icon={faUser}
                className="text-3xl text-[var(--bg-color)]"
              />
              <h1 className="text-3xl text-[var(--heading)] font-[600]">
                For Employers
              </h1>
              <p className="text-[var(--paragraph-color)] ">
                Find qualified candidates faster, manage your hiring pipeline
                efficiently, and build your dream team with our advanced
                recruitment tools.
              </p>
              <div className="flex flex-col gap-2 text-[var(--paragraph-color)]">
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                 Talent Pool Access
                </span>
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  ATS Integration
                </span>

                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Screening Tools
                </span>
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                 Analytics Dashboard
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-8 py-4 mt-20"  data-aos="fade-left"
          data-aos-delay="0">
            <div className="left flex flex-col  gap-4 my-6 w-1/2 py-6">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-3xl text-[var(--bg-color)]"
              />
              <h1 className="text-3xl text-[var(--heading)] font-[600]">
                For Companies
              </h1>
              <p className="text-[var(--paragraph-color)] ">
                Build your employer brand, showcase your culture, and attract
                top talent with compelling company profiles and targeted
                outreach.
              </p>
              <div className="flex flex-col gap-2 text-[var(--paragraph-color)]">
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Brand Building
                </span>
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Company Pages
                </span>

                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Engagement Metrics
                </span>
                <span className="flex flex-row gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)]"
                  />
                  Targeted Reach
                </span>
              </div>
            </div>
            <div className="right py-4">
              <img
                src={Aboutimg}
                alt="About Us"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>


        <div className="my-8 bg-[var(--bg-color)] rounded-2xl shadow-sm "> 
        <div className="mx-60 flex flex-col items-center justify-center p-6 text-white  gap-4">
        <h1 className="text-3xl font-[600]">Start Your Career Journey Today</h1>
        <p>Join thousands of professionals and companies who have found success through our platform. Whether you're looking for your next opportunity or searching for top talent, we're here to help.</p>
        </div>
        
        </div>




      </div>
      <Footer />
    </div>
  );
};

export default About;
