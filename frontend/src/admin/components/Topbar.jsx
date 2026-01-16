import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div className="contentfonts">
      <div className="topbar flex felx-row  justify-between gap-4 shadow-lg p-4">
        <div className="leftside flex flex-row w-1/4 items-center text-center justify-center border-r-2 border-gray-300">
          <h1 className="toplogo text-4xl text-[var(--bg-color)] font-[900] ">
            JobHub Admin
          </h1>
        </div>

        <div className="rightside flex flex-row w-full justify-between ">
          <div className="px-4 search-bar flex flex-row relative items-center border-1 border-gray-300 rounded-2xl w-1/3 text-[var(--paragraph-color)] gap-2 shadow-sm hover:scale-105 transition delay-100">
            <FontAwesomeIcon icon={faSearch} className="p-2" />
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md border border-gray-300 outline-0 border-0"
            />
          </div>
          <div className="adminside flex flex-row gap-4 items-center px-4 ">
            <div>
              <FontAwesomeIcon
                icon={faBell}
                className="text-[var(--bg-color)] text-2xl border-r-2 border-gray-300 p-2"
              />
            </div>
            <div className="bg-[var(--bg-color)] p-2 px-3 rounded-full text-white text-xl">
              AD
            </div>
            <h1 className="text-[var(--heading)] text-xl">Super Admin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
