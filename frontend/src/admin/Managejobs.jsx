import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dropdown from "../components/Dropdown";

const Managejobs = () => {
  return (
    <div className="m-6 shadow-lg border-1 border-gray-300 rounded-lg  w-full">
      <div className="top flex flex-row justify-between p-8">
        <h1 className=" text-xl  font-bold text-[var(--heading)]">
          Manage Jobs
        </h1>

        <Dropdown className="border-1 border-gray-300 rounded-md p-2">
          <option>All Categories</option>
          <option>Technology</option>
          <option>Design</option>
          <option>Marketing</option>
          <option>Management</option>
        </Dropdown>
      </div>
    </div>
  );
};

export default Managejobs;
