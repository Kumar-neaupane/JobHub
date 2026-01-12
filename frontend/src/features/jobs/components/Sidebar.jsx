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
    <div className="sidebar shadow-sm border-1 border-gray-300 w-1/3 p-4 rounded-2xl h-[fit-content]">
      <div className="flex items-center flex-row gap-2 py-4">
        <FontAwesomeIcon
          icon={faFilter}
          className="text-xl text-[var(--bg-color)]"
        />
        <h1 className="text-xl font-[600] text-[var(--heading)]">Filters</h1>
      </div>
      <div className="job-types flex flex-col items-baseline gap-2 py-4 text-[var(--paragraph-color)]">
        <h1 className="text-xl text-[var(--heading)]">Job Types</h1>
        <span>
          <input type="checkbox" /> Full time{" "}
        </span>
        <span>
          <input type="checkbox" /> Part time{" "}
        </span>
        <span>
          <input type="checkbox" /> Contract{" "}
        </span>
        <span>
          <input type="checkbox" /> Freelance{" "}
        </span>
        <span>
          <input type="checkbox" /> Internship{" "}
        </span>
      </div>
      <div className="experience-level text-[var(--paragraph-color)]">
        <h1 className="text-[var(--heading)]">Experience Level</h1>
        <Dropdown className="rounded-sm border-1 border-gray-300 my-2">
          <option>Select Level</option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
          <option>Executive Level</option>
        </Dropdown>
      </div>
      {/* salary range */}
      <div className="salary range flex flex-col items-baseline gap-2 py-4 ">
        <label className="text-[var(--paragraph-color)]">Salary Range:</label>
        <input
          type="range"
          min="0"
          max="10000"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 rounded-full bg-gray-600 appearance-none range-input"
          style={{
            background: `linear-gradient(to right, #000 ${
              (value / 10000) * 100
            }%, #e5e7eb ${(value / 10000) * 100}%)`,
          }}
        />
        <div className=" flex flex-row justify-between gap-4 w-full text-[var(--bg-color)]">
          <span>0$</span>
          <span>{value}$</span>

          <span>10000$</span>
        </div>
      </div>
      <div className="job-types flex flex-col items-baseline gap-2 py-4 text-[var(--paragraph-color)]">
        <h1 className="text-xl text-[var(--heading)]">Company Size</h1>
        <span>
          <input type="checkbox" /> 1-10 employees{" "}
        </span>
        <span>
          <input type="checkbox" /> 11-50 employees{" "}
        </span>
        <span>
          <input type="checkbox" /> 51-200 employees{" "}
        </span>
        <span>
          <input type="checkbox" /> 201-500 employees{" "}
        </span>
        <span>
          <input type="checkbox" /> 500+ employees{" "}
        </span>
      </div>
      <div className="job-types flex flex-col items-baseline gap-2 py-4 text-[var(--paragraph-color)]">
        <h1 className="text-xl text-[var(--heading)]">Work Mode</h1>
        <span>
          <input type="checkbox" /> Remote{" "}
        </span>
        <span>
          <input type="checkbox" /> On-site{" "}
        </span>
        <span>
          <input type="checkbox" /> Hybrid{" "}
        </span>
      </div>

      <div className="h-[1px] bg-gray-300"></div>
      <div className="button-section flex justify-center gap-2 w-full ">
        <Button
          btnName="Apply Filters"
          className="px-4 my-4 rounded-lg w-full"
        />
        <Whitebtn
          btnName="Reset"
          className="px-4 my-4 rounded-lg w-full bg-white text-blue border-1 border-gray-300"
        />
      </div>
    </div>
  );
};

export default Sidebar;
