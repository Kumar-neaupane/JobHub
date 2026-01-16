import React, { useState } from "react";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBorderAll,
  faGear,
  faBuilding,
  faBriefcase,
  faUsers,
  faLayerGroup,
  faChartLine,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import Sidebaritems from "./Sidebaritems";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="sticky top-0 h-screen">
      <div className="sidebar-content shadow-2xl h-full border-r border-gray-300 pt-8 p-4 flex flex-col gap-2 text-[var(--paragraph-color)] overflow-y-auto">
        <Sidebaritems
          icon={faBorderAll}
          name="Dashboard"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Sidebaritems
          icon={faBriefcase}
          name="Manage Jobs"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Sidebaritems
          icon={faBuilding}
          name="Employers"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Sidebaritems
          icon={faUsers}
          name="Job Seekers"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Sidebaritems
          icon={faLayerGroup}
          name="Categories"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Sidebaritems
          icon={faChartLine}
          name="Analytics"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Sidebaritems
          icon={faGear}
          name="Settings"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Sidebaritems
          icon={faUserShield}
          name="Admin Roles"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
};

export default Sidebar;
