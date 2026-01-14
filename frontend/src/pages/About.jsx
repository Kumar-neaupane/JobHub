import React from 'react'
import Navbar from '../features/home/components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import aboutImage from '../assets/images/image.jpg'

const About = () => {
  const missionData = [
    {
      id: 1,
      icon: faBullseye,
      heading: "Our Mission",
      paragraph:
        "To connect talented individuals with meaningful career opportunities, fostering growth and success for both job seekers and employers worldwide.",
    },
    {
      id: 2,
      icon: faEye,
      heading: "Our Vision",
      paragraph:
        "To be the most trusted and innovative job searching platform, revolutionizing the way people find and connect with career opportunities.",
    },
    {
      id: 3,
      icon: faStar,
      heading: "Our Promise",
      paragraph:
        "We are committed to integrity, innovation, and excellence in every interaction, ensuring the best experience for all our users.",
    },
  ]

  const valuesData = [
    {
      id: 1,
      icon: faShield,
      heading: "Trust",
      paragraph:
        "Building trust through transparency and reliability in all our services and interactions.",
    },
    {
      id: 2,
      icon: faArrowCircleUp,
      heading: "Growth",
      paragraph:
        "Empowering continuous professional development and career advancement for everyone.",
    },
    {
      id: 3,
      icon: faLightbulb,
      heading: "Innovation",
      paragraph:
        "Constantly evolving our platform with cutting-edge technology and creative solutions.",
    },
    {
      id: 4,
      icon: faUsers,
      heading: "Inclusivity",
      paragraph:
        "Creating equal opportunities for all, regardless of background or experience level.",
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="bg-[var(--bg-color)] w-full py-12 sm:py-16 md:py-20 lg:py-24"
        data-aos="fade-up"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h1 
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[900] text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Us
          </h1>
          <p 
            className="text-white text-center mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Connecting Talent with Opportunity
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16">
        {/* About Section */}
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-[var(--heading)]">
              Welcome to JobHub
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[var(--paragraph-color)] font-[600]">
              Your Gateway to Success
            </h2>
            <p className="text-[var(--paragraph-color)] text-base sm:text-lg md:text-xl leading-relaxed">
              We are a leading job searching platform dedicated to bridging the
              gap between talented professionals and innovative companies. Our
              mission is to empower job seekers to find their dream careers
              while helping employers discover exceptional talent that drives
              success.
            </p>
            <p className="text-[var(--paragraph-color)] text-base sm:text-lg leading-relaxed">
              With years of experience in the recruitment industry, we understand
              the challenges both job seekers and employers face. That's why we've
              built a comprehensive platform that simplifies the hiring process
              and makes career advancement accessible to everyone.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8 border-t border-gray-200 mt-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-[var(--bg-color)]">
                  50K+
                </h2>
                <p className="text-sm sm:text-base text-[var(--paragraph-color)] mt-2">
                  Job Seekers
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-[var(--bg-color)]">
                  12K+
                </h2>
                <p className="text-sm sm:text-base text-[var(--paragraph-color)] mt-2">
                  Companies
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-[var(--bg-color)]">
                  95%
                </h2>
                <p className="text-sm sm:text-base text-[var(--paragraph-color)] mt-2">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission, Vision, Promise Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-8 sm:mt-12 md:mt-16 bg-[#F8F9FF] rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-[var(--heading)] mb-4">
              What Drives Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] max-w-2xl mx-auto">
              Our commitment to excellence and innovation shapes everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {missionData.map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={item.id * 100}
                className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-3xl sm:text-4xl text-[var(--bg-color)] mb-4"
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-[700] text-[var(--heading)] mb-3 sm:mb-4">
                  {item.heading}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[var(--paragraph-color)] leading-relaxed">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-8 sm:mt-12 md:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-[var(--heading)] mb-4">
              Our Core Values
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] max-w-2xl mx-auto">
              The principles that guide our actions and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {valuesData.map((value) => (
              <div
                key={value.id}
                data-aos="fade-up"
                data-aos-delay={value.id * 100}
                className="bg-[#F8F9FF] shadow-lg border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={value.icon}
                  className="text-3xl sm:text-4xl text-[var(--bg-color)] mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-[700] text-[var(--heading)] mb-3">
                  {value.heading}
                </h2>
                <p className="text-sm sm:text-base text-[var(--paragraph-color)] leading-relaxed">
                  {value.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Highlights Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 sm:mt-12 md:mt-16 bg-[#F8F9FF] rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-[var(--heading)] mb-4">
              Platform Highlights
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] max-w-2xl mx-auto">
              Comprehensive solutions tailored for every stakeholder
            </p>
          </div>

          {/* For Job Seekers */}
          <div
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-3xl sm:text-4xl text-[var(--bg-color)]"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-[700] text-[var(--heading)]">
                For Job Seekers
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] leading-relaxed">
                Access thousands of opportunities, get personalized job
                recommendations, and streamline your application process with
                our intelligent matching system.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 mt-2">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Smart Job Matching
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Career Resources
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Application Tracking
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Salary Insights
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={aboutImage}
                alt="Job Seekers"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* For Employers */}
          <div
            className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
              <FontAwesomeIcon
                icon={faUser}
                className="text-3xl sm:text-4xl text-[var(--bg-color)]"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-[700] text-[var(--heading)]">
                For Employers
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] leading-relaxed">
                Find qualified candidates faster, manage your hiring pipeline
                efficiently, and build your dream team with our advanced
                recruitment tools.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 mt-2">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Talent Pool Access
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    ATS Integration
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Screening Tools
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Analytics Dashboard
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={aboutImage}
                alt="Employers"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* For Companies */}
          <div
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-3xl sm:text-4xl text-[var(--bg-color)]"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-[700] text-[var(--heading)]">
                For Companies
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--paragraph-color)] leading-relaxed">
                Build your employer brand, showcase your culture, and attract
                top talent with compelling company profiles and targeted
                outreach.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 mt-2">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Brand Building
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Company Pages
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Engagement Metrics
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[var(--bg-color)] mt-1 text-lg sm:text-xl"
                  />
                  <span className="text-base sm:text-lg text-[var(--paragraph-color)]">
                    Targeted Reach
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={aboutImage}
                alt="Companies"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div
          data-aos="fade-up"
          className="mt-8 sm:mt-12 md:mt-16 bg-[var(--bg-color)] rounded-2xl shadow-lg p-8 sm:p-10 md:p-12 lg:p-16"
        >
          <div className="text-center text-white mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[700] mb-4 sm:mb-6">
              Start Your Career Journey Today
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Join thousands of professionals and companies who have found success
              through our platform. Whether you're looking for your next opportunity
              or searching for top talent, we're here to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="bg-white rounded-xl p-3 sm:p-4 px-6 sm:px-8 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              <div className="flex flex-row gap-2 items-center justify-center text-[var(--bg-color)] font-[600] text-base sm:text-lg">
                <FontAwesomeIcon icon={faBriefcase} />
                <span>Find Jobs</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
            <button className="bg-white rounded-xl p-3 sm:p-4 px-6 sm:px-8 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              <div className="flex flex-row gap-2 items-center justify-center text-[var(--bg-color)] font-[600] text-base sm:text-lg">
                <FontAwesomeIcon icon={faBuilding} />
                <span>Post a Job</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About