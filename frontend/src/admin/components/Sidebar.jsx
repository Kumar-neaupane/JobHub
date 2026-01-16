import React from "react";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBorderAll , faGear , faBuilding,faBriefcase,faUsers,faLayerGroup,faChartLine, faUserShield } from "@fortawesome/free-solid-svg-icons";
import Sidebaritems from "./Sidebaritems";

const Sidebar = () => {
  return (
    <div className=" ">
      <Topbar />
      
      <div className="sidebar-content w-1/5    px-4  mt-8  mx-4">
        <Sidebaritems icon={faBorderAll} name="Dashboard" />
        <Sidebaritems icon={faBriefcase} name="Manage Jobs" />
        <Sidebaritems icon={faBuilding} name="Employers" />
        <Sidebaritems icon={faUsers} name="Job Seekers" />
        <Sidebaritems icon={faLayerGroup} name="Categories" />
        <Sidebaritems icon={faChartLine} name="Analytics" />
        <Sidebaritems icon={faGear} name="Settings" />
        <Sidebaritems icon={faUserShield} name="Admin Roles" />
      </div>
    </div>
  );
};

export default Sidebar;
