import React, { useState } from "react";
import Navbar from "../home/components/Navbar";
import { useForm } from "react-hook-form";
import Input from "./Input";
import "../../components/Dropdown";
import Select from "../jobs/components/Select";
import Textarea from "../jobs/components/Textarea";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Rightcard from "./Rightcard";
import Footer from "../../components/Footer";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSuccess(data);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setTimeout(() => reset(), 1000);
  };

  return (
    <div className="contentfonts ">
      <Navbar />
      <div data-aos="fade-up"
          data-aos-delay="0" className="mx-60">
        <div className=" flex flex-col justify-center items-center my-20">
          <h1 className="text-4xl font-[600] py-4 text-[var(--heading)]">Get in Touch</h1>
          <p className="text-xl text-[var(--paragraph-color)]">
            Have a question or need assistance? We're here to help! Fill out the
            form below and our support <br />
            team will get back to you as soon as possible.
          </p>
        </div>

        <div className="content flex flex-row gap-8 my-8">
          <div  data-aos="fade-left"
          data-aos-delay="100"className="left w-full shadow-lg p-8 rounded-md border-1 border-gray-300">
            <form onSubmit={handleSubmit(onSubmit)} className>
              <Input
                id="text"
                label="Full Name :"
                type="text"
                placeholder="enter your full name"
                className="my-4"
                {...register("fullName", {
                  required: "Full Name is Required",
                })}
                error={errors.fullName}
              />
              <Input
                id="email"
                label="Email :"
                type="email"
                placeholder="enter your email"
                className="my-4"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                error={errors.email}
              />
              <Select className="mt-6 p-2 w-full border-1 border-gray-300 text-[var(--paragraph-color)]">
                <option>General Inquiry</option>
                <option>Job Posting Support</option>
                <option>Job Search Help</option>
                <option>Account Issues</option>
                <option>Technical Support</option>
                <option>Feedback And Suggestions</option>
                <option>Others</option>
              </Select>

              <Textarea
                label="Message"
                className="my-2 w-full border-1 border-gray-300"
              />
              <Button
                type="submit"
                className="my-4 px-6 rounded-sm "
                btnName="Submit"
              />
              {success && (
                <p className="text-green-500">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>

          <div data-aos="fade-right"
          data-aos-delay="" className="right w-1/3 flex flex-col gap-6">
            <h1 className="text-2xl text-[var(--heading)]">
              Contact Information
            </h1>
            <Rightcard
              icon={faEnvelope}
              title="Email Address:"
              text="support@jobhub.com"
            />
            <Rightcard
              icon={faPhone}
              title="Phone Number:"
              text="+977- 9818041863"
            />
            <Rightcard
              icon={faLocationDot}
              title="Location:"
              text="Kathmandu, Nepal"
            />
            {/* <Rightcard icon={faLinkedin} title="LinkedIn:" text="linkedin.com/in/jobhub" /> */}
            <div className="email-section shadow-lg p-6 rounded-lg border-1 border-gray-300 hover:shadow-2xl flex  flex-row gap-4 items-center justify-center">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-[var(--bg-color)] text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-[var(--bg-color)] text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-[var(--bg-color)] text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[var(--bg-color)] text-2xl cursor-pointer"
              />
            </div>
            <div className=" shadow-lg p-6 rounded-lg border-1 border-gray-300 hover:shadow-2xl flex  flex-col  gap-2  ">
              <h1 className="text-2xl text-[var(--heading)]">
                {" "}
                Business Hours
              </h1>
              <p className="text-[var(--paragraph-color)]">
                {" "}
                Sunday - Friday : 9:00 AM - 6:00 PM
              </p>
              <p className="text-[var(--paragraph-color)]">Saturday : Closed</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
