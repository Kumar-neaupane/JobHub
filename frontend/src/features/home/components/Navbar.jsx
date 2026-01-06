import React from "react";
import Button from "../../../components/Button";

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* <Topbar/> */}
        <div className=" navbar bg-[#ffffff] flex flex-row gap-2  items-center p-4  shadow-lg w-full drop-shadow-lg">
          <h1 className="title text-[44px] text-[#00B074] font-[900] text-shadow-lg ml-[30px]">
            JobHub
          </h1>
          <div className=" navitems flex flex-row  justify-between items-center w-full ">
            <ul className="navitems flex flex-row gap-4 flex-start ml-[200px] text-[18px] font-[600]  ">
              <li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg  hover:underline">
                {" "}
                <a href="#">HOME</a>
              </li>
              <li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                {" "}
                <a href="#"> FIND A JOBS</a>
              </li>
              <li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                {" "}
                <a href="#">ABOUT</a>
              </li>
              <li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                {" "}
                <a href="#">PAGES</a>
                {/* <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Blog Details</a></li>
                    <li><a href="#">Job Details</a></li>
                  </ul> */}
              </li>
              <li className="hover:text-[#00B074] transition duration-300 hover:text-shadow-lg hover:underline">
                {" "}
                <a href="#">CONTACT</a>
              </li>
            </ul>

            <Button className="" btnName="POST A JOB" />
            <div className="buttons flex flex-row gap-2 ">
              <div className="loginRegister flex flex-row gap-4 text-white">
                <Button className="" btnName="LOGIN" />

                <Button className="" btnName="REGISTER" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// const Topbar =()=>{
//     return(
//         <div className='topbar bg-[]'>
//         <button>Login</button>
//         <button>Register</button>

//         </div>
//     )
// }
