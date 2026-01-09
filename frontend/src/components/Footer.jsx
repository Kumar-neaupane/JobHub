import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Input from "./Input";
import Button from "./Button";

const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="bg-[var(--heading)] mt-10 w-full overflow-x-hidden"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12">
        {/* Company Section */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="flex flex-col"
        >
          <h1 className="text-white text-2xl sm:text-[26px] md:text-[30px] mb-4">Company</h1>
          <ul className="text-[var(--paragraph-color)] text-base sm:text-[17px] md:text-[18px] font-[600] space-y-2">
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              About Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              Contact Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              Our Services
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              Terms & Condition
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="flex flex-col"
        >
          <h1 className="text-white text-2xl sm:text-[26px] md:text-[30px] mb-4">Quick Links</h1>
          <ul className="text-[var(--paragraph-color)] text-base sm:text-[17px] md:text-[18px] font-[600] space-y-2">
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              About Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              Contact Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              Our Services
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <FontAwesomeIcon icon={faGreaterThan} className="text-[12px] mr-2" />
              Terms & Condition
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="flex flex-col"
        >
          <h1 className="text-white text-2xl sm:text-[26px] md:text-[30px] mb-4">Contact</h1>
          <ul className="text-[var(--paragraph-color)] text-base sm:text-[17px] md:text-[18px] font-[600] space-y-3">
            <li>
              <FontAwesomeIcon icon={faLocation} className="text-[14px] mr-2" />
              123 Street, New York, USA
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="text-[14px] mr-2" />
              9860059411
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="text-[14px] mr-2" />
              info@example.com
            </li>
          </ul>

          {/* Social media icons */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="iconss flex flex-row text-white mt-6 gap-3 sm:gap-4 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="border border-white p-2 rounded-sm hover:text-[var(--bg-color)] hover:bg-white transition hover:delay-100 text-lg"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="border border-white p-2 rounded-sm hover:text-[var(--bg-color)] hover:bg-white transition hover:delay-100 text-lg"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="border border-white p-2 rounded-sm hover:text-[var(--bg-color)] hover:bg-white transition hover:delay-100 text-lg"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="border border-white p-2 rounded-sm hover:text-[var(--bg-color)] hover:bg-white transition hover:delay-100 text-lg"
            />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col">
          <h1
            className="text-white text-2xl sm:text-[26px] md:text-[30px] mb-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Newsletter
          </h1>
          <p className="pb-3 text-[var(--paragraph-color)] text-sm sm:text-base">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Input placeholder="Your email" classNames="w-full h-10 flex-1 bg-white" />
            <Button
              className="w-full sm:w-auto h-10 px-4 sm:px-6 rounded-md whitespace-nowrap"
              btnName="Sign Up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
