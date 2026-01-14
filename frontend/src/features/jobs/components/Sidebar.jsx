import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../../components/Dropdown";
import Button from "../../../components/Button";
import { useState } from "react";
import Whitebtn from "../../../components/Whitebtn";

const Sidebar = () => {
  const [value, setValue] = useState(10000);
  return (
    <div className="sidebar shadow-sm border border-gray-300 w-full lg:w-1/3 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl h-[fit-content]">
      <div className="flex items-center flex-row gap-2 py-3 sm:py-4">
        <FontAwesomeIcon
          icon={faFilter}
          className="text-lg sm:text-xl text-[var(--bg-color)]"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl font-[600] text-[var(--heading)]">Filters</h1>
      </div>
      <div className="job-types flex flex-col items-start gap-3 sm:gap-2 py-3 sm:py-4 text-[var(--paragraph-color)]">
        <h1 className="text-base sm:text-lg md:text-xl text-[var(--heading)] font-[600] mb-1">Job Types</h1>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>Full time</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>Part time</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>Contract</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>Freelance</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>Internship</span>
        </label>
      </div>
      <div className="experience-level text-[var(--paragraph-color)] py-3 sm:py-4">
        <h1 className="text-base sm:text-lg md:text-xl text-[var(--heading)] font-[600] mb-2">Experience Level</h1>
        <Dropdown className="rounded-sm border border-gray-300 my-2 w-full text-sm sm:text-base">
          <option>Select Level</option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
          <option>Executive Level</option>
        </Dropdown>
      </div>
      {/* salary range */}
      <div className="salary range flex flex-col items-start gap-3 sm:gap-2 py-3 sm:py-4">
        <label className="text-sm sm:text-base md:text-lg text-[var(--paragraph-color)] font-[600]">Salary Range:</label>
        <input
          type="range"
          min="0"
          max="10000"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 rounded-full bg-gray-600 appearance-none range-input cursor-pointer"
          style={{
            background: `linear-gradient(to right, var(--bg-color) ${
              (value / 10000) * 100
            }%, #e5e7eb ${(value / 10000) * 100}%)`,
          }}
        />
        <div className="flex flex-row justify-between gap-2 sm:gap-4 w-full text-sm sm:text-base font-[600] text-[var(--bg-color)]">
          <span>$0</span>
          <span>${value.toLocaleString()}</span>
          <span>$10,000</span>
        </div>
      </div>
      <div className="job-types flex flex-col items-start gap-3 sm:gap-2 py-3 sm:py-4 text-[var(--paragraph-color)]">
        <h1 className="text-base sm:text-lg md:text-xl text-[var(--heading)] font-[600] mb-1">Company Size</h1>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>1-10 employees</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>11-50 employees</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>51-200 employees</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>201-500 employees</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>500+ employees</span>
        </label>
      </div>
      <div className="job-types flex flex-col items-start gap-3 sm:gap-2 py-3 sm:py-4 text-[var(--paragraph-color)]">
        <h1 className="text-base sm:text-lg md:text-xl text-[var(--heading)] font-[600] mb-1">Work Mode</h1>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>Remote</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>On-site</span>
        </label>
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-sm sm:text-base hover:text-[var(--heading)] transition-colors">
          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--bg-color)] rounded border-gray-300 focus:ring-2 focus:ring-[var(--bg-color)]" /> 
          <span>Hybrid</span>
        </label>
      </div>

      <div className="h-[1px] bg-gray-300 my-2 sm:my-4"></div>
      <div className="button-section flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 w-full">
        <Button
          btnName="Apply Filters"
          className="px-4 py-2 sm:py-3 my-2 sm:my-4 rounded-lg w-full text-sm sm:text-base"
        />
        <Whitebtn
          btnName="Reset"
          className="px-4 py-2 sm:py-3 my-2 sm:my-4 rounded-lg w-full bg-white text-blue border border-gray-300 text-sm sm:text-base"
        />
      </div>
    </div>
  );
};

export default Sidebar;
