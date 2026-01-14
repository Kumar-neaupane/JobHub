import React from "react";
import Navbar from "./components/Navbar";
import heroImage from "../../assets/images/image.jpg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Categorygrid from "./components/Categorygrid";
import HelpfindJob from "./components/HelpfindJob";
import Review from "../../components/Review";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";
import JobDetails from "../jobs/JobDetails";


const Home = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="homeitems w-full min-h-screen relative overflow-x-hidden">
        <div
          className="herosection opacity-90 w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] bg-cover overflow-hidden bg-center bg-no-repeat flex flex-col brightness-90 contrast-90"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div
          className="text2 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-[200px] text-white absolute top-0 text-shadow-lg/30 w-full max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[700px]"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-[900] leading-tight"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            FIND THE BEST JOBS THAT FIT YOU
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] mt-4 max-w-full"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Button
            className="mt-6 sm:mt-8 w-full sm:w-auto"
            btnName="SEARCH A JOB"
          />
        </div>

        <div className="bg-[var(--bg-color)] w-full py-6 sm:py-8 md:py-10 lg:py-12 flex items-center justify-center overflow-x-hidden">
          <div className="inputf w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3 sm:gap-4 items-stretch lg:items-center lg:pt-4">
            <div className="w-full lg:w-auto">
              <Input
                handleChange={handleOnChange}
                placeholder="Keyword"
                classNames="w-full lg:w-[300px] xl:w-[400px] h-[40px] bg-white"
              />
            </div>

            <Dropdown>
              <option value="">Select Location</option>
              <option value="1">New York</option>
              <option value="2">San Francisco</option>
              <option value="3">Remote</option>
            </Dropdown>
            <Dropdown>
              <option value="">Select Location</option>
              <option value="1">New York</option>
              <option value="2">San Francisco</option>
              <option value="3">Remote</option>
            </Dropdown>
            <div className="w-full lg:w-auto">
              {/* Search button */}
              <Button
                className="bg-black w-full lg:w-32 xl:w-40 h-10 mb-0 lg:mb-0 items-center text-center justify-center flex rounded-md"
                btnName="Search"
              />
            </div>
          </div>
        </div>

        <Categorygrid />

        <HelpfindJob />
        <JobDetails />
        <Review />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
