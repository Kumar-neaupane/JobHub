import React from "react";
import Topbar from "../admin/components/Topbar";
import Sidebar from "../admin/components/Sidebar";
import Dashboardgrid from "../admin/components/Dashboardgrid";
import {
  faBriefcase,
  faChartLine,
  faUsers,
  faBuilding,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import Leftchart from "../admin/components/Leftchart";
import Rightsidechart from "../admin/components/Rightsidechart";
import Piechart from "../admin/components/Piechart";
import Quickstartcard from "../admin/components/Quickstartcard";
import Smallcard from "../admin/components/Smallcard";
import StatusBtn from "../admin/components/StatusBtn";
import { Outlet } from "react-router-dom";

const Dashboardlayout = () => {
  const gridItems = [
    {
      icon: faBriefcase,
      firstline: "Total Job Posted ",
      number: "1000",
      listline: "↑ 12% from last month",
    },

    {
      icon: faChartLine,
      firstline: "Active Job Listings ",
      number: "5000",
      listline: "↑ 8% from last month",
    },
    {
      icon: faUsers,
      firstline: "Total Users",
      number: "2000",
      listline: "↑ 15% from last month",
    },
    {
      icon: faBuilding,
      firstline: "Employers Registered ",
      number: "750",
      listline: "↑ 10% from last month",
    },
    {
      icon: faFile,
      firstline: "Applications Today ",
      number: "300",
      listline: "↑ 5% from last day",
    },
  ];
  const quickStartData = [
    { toptext: "Avg. Time to Fill", bottomtext: "35 Days" },
    { toptext: "Application Rate", bottomtext: "67%" },
    { toptext: "Jobs Filled This Month", bottomtext: "124" },
    { toptext: "Active Employers", bottomtext: "456" },
  ];

  const statusData = [
    {
      title: "Frontend Developer",
      companyName: "Tech Solutions Inc.",
      Time: "2 hours ago",
      status: "Pending",
    },
    {
      title: "Backend Developer",
      companyName: "Innovatech Corp.",
      Time: "1 day ago",
      status: "Approved",
    },
    {
      title: "Product Manager",
      companyName: "StartupXYZ",
      Time: "5 hours ago",
      status: "Approved",
    },
    {
      title: "Data Analyst",
      companyName: "Analytics Co",
      Time: "6 hours ago",
      status: "Rejected",
    },
  ];
  const latestReg = [
    { title: "John Doe", companyName: "Job Seeker", Time: "3 hours ago" },
    { title: "Jane Smith", companyName: "Job Seeker", Time: "1 day ago" },
    { title: "Mike Johnson", companyName: "Job Seeker", Time: "2 days ago" },
  ];

  const recentApplications = [
    {
      title: "Kumar Neupane",
      companyName: "Tech Solutions Inc.",
      Time: "4 hours ago",
    },
    { title: "Sara Lee", companyName: "Innovatech Corp.", Time: "1 day ago" },
    { title: "Liam Brown", companyName: "StartupXYZ", Time: "3 days ago" },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <div className="flex flex-row contentfonts">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboardlayout;
