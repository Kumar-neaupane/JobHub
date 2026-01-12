import React from "react";
import Navbar from "../home/components/Navbar";
import  Aboutimg from "../../assets/images/image.jpg";
import Card from "./Card";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about mx-60 my-10 ">
      <div className="first flex flex-row gap-10 shadow-sm p-6 border-1 border-gray-300 rounded-lg">
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[var(--heading)]">About Us</h1>
          <h2 className="text-2xl text-[var-(--paragraph-color)]">Connecting Talent with Opportunity</h2>
          <p className="text-[var(--paragraph-color)] text-[18px]">
            We are a leading job searching platform dedicated to bridging the
            gap between talented professionals and innovative companies. Our
            mission is to empower job seekers to find their dream careers while
            helping employers discover exceptional talent that drives success.
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
          <img src={Aboutimg} alt="About Us" className="w-full h-auto rounded-3xl" />
        </div>
        </div>

        <div className="second-section my-6 bg-[#F8F9FF] shadow-lg border-1 border-gray-300 rounded-lg" >
       <div className="flex flex-col text-center gap-2 py-4">
        <h1 className="text-3xl text-[v]">What Drives Us</h1>
         <p className="text-[18px] text-[var(--paragraph-color)]">Our commitment to excellence and innovation shapes everything we do</p>
       </div>
       
      <Card />
       <Card />
        <Card />


        </div>


      </div>
      
    </div>
  );
};

export default About;
