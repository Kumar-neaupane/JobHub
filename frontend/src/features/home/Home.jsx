import React from "react";
import Navbar from "./components/Navbar";
import heroImage from "../../assets/images/image.jpg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Categorygrid from "./components/Categorygrid";
import HelpfindJob from "./components/HelpfindJob";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeitems w-full h-[100vh] relative ">
        <div
          className="herosection opacity-90 w-full h-[100vh] bg-cover overflow-hidden bg-fit bg-no-repeat  w-full h-[100vh] bg-cover overflow-hidden bg-fit bg-no-repeat flex flex-col brightness-90 contrast-90 "
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Hero Section Content */}
        </div>
        <div   className="text2 mx-[200px] pt-[200px]  text-white absolute top-0 text-shadow-lg/30 w-[700px]"data-aos="fade-left" data-aos-delay="0">
          <h1 className="text-[55px] font-[900] " data-aos="fade-up" data-aos-delay="0">
            FIND THE BEST JOBS <span>THAT FIT YOU</span>
          </h1>
          <p className="text-[20px]" data-aos="fade-left" data-aos-delay="0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
           <Button className="mt-8" btnName="SEARCH A JOB" />
        </div>
        <div className="bg-[var(--bg-color)] w-full h-[150px] flex-row items-center justify-center  ">
        <div className="inputf mx-[250px] pt-[70px] flex flex-row gap-4">
           <Input placeholder="Keyword"/>
            <div>
              <select className="bg-white p-2 rounded-md w-[400px] h-[40px]">
                <option value="">Select Category</option>
                <option value="1">Technology</option>
                <option value="2">Marketing</option>
                <option value="3">Design</option>
              </select>
            </div>
            <div>
              <select className="bg-white p-2 rounded-md w-[400px] h-[40px]">
                <option value="">Select Location</option>
                <option value="1">New York</option>
                <option value="2">San Francisco</option>
                <option value="3">Remote</option>
              </select>
            </div>
            <div>
                <Button className="bg-black w-[150px] h-[40px] mb-3 items-center text-center" btnName="Search"/>
            </div>
        </div>
        </div>
         <Categorygrid />
         <HelpfindJob />
       
      </div>
     
    </div>
  );
};

export default Home;
