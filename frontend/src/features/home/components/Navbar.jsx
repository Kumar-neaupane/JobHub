import React, { useState } from "react";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="navbar bg-[#ffffff] flex flex-row gap-2 items-center p-3 md:p-4 shadow-lg w-full drop-shadow-lg relative">
          {/* Logo */}
          <h1 className="title text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#00B074] font-[900] text-shadow-lg ml-2 sm:ml-4 md:ml-[30px]">
            JobHub
          </h1>

          <div className="navitems hidden lg:flex flex-row justify-between items-center w-full">
            <ul className="navitems flex flex-row gap-6 xl:gap-10 flex-start ml-8 xl:ml-[200px] text-[16px] xl:text-[18px] font-[600]">
             <Link to="/"><li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                HOME
              </li></Link>
            <Link to="/find-jobs"><li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                FIND A JOBS
              </li></Link>
             <Link to="/about"><li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                ABOUT
              </li></Link>
              <li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                <a href="#">PAGES</a>
              </li>
              <li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                <a href="#">CONTACT</a>
              </li>
            </ul>

            <div className="buttons flex flex-row gap-2">
              <Button className="hidden xl:block" btnName="POST A JOB" to="/post-job" />
              <div className="loginRegister flex flex-row gap-2 xl:gap-4 text-white">
                <Button className="text-sm xl:text-base" btnName="LOGIN" to="/login" />
                <Button className="text-sm xl:text-base" btnName="REGISTER" to="/register" />
              </div>
            </div>
          </div>

          <div className="lg:hidden ml-auto mr-2">
            <button
              onClick={toggleMenu}
              className="text-[#00B074] text-2xl p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 p-6 text-[16px] font-[600]">
            <li className="hover:text-[#00B074] transition duration-300 border-b border-gray-200 pb-2">
              <a href="#" onClick={toggleMenu}>
                HOME
              </a>
            </li>
            <li className="hover:text-[#00B074] transition duration-300 border-b border-gray-200 pb-2">
              <a href="#" onClick={toggleMenu}>
                FIND A JOBS
              </a>
            </li>
            <li className="hover:text-[#00B074] transition duration-300 border-b border-gray-200 pb-2">
              <a href="#" onClick={toggleMenu}>
                ABOUT
              </a>
            </li>
            <li className="hover:text-[#00B074] transition duration-300 border-b border-gray-200 pb-2">
              <a href="#" onClick={toggleMenu}>
                PAGES
              </a>
            </li>
            <li className="hover:text-[#00B074] transition duration-300 border-b border-gray-200 pb-2">
              <a href="#" onClick={toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-3 p-6 pt-0">
            <Link to="/post-job">
              <Button className="w-full text-center" btnName="POST A JOB" />
            </Link>
           
              <Button className="w-full text-center" btnName="LOGIN" to="/login" />
           
            
              <Button className="w-full text-center" btnName="REGISTER" to="/register" />
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
