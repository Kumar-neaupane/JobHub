import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboardgrid from "./components/Dashboardgrid";
import {
  faBriefcase,
  faChartLine,
  faUsers,
  faBuilding,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import Leftchart from "./components/Leftchart";
import Rightsidechart from "./components/Rightsidechart";
import Piechart from "./components/Piechart";
import Quickstartcard from "./components/Quickstartcard";

const Dashboard = () => {
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
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <div className="flex flex-row contentfonts">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 overflow-x-hidden mx-8">
          <motion.div
            className="dashboard-content w-full h-fit grid grid-cols-5 gap-4 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {gridItems.map((item, index) => (
              <Dashboardgrid
                key={index}
                icon={item.icon}
                firstline={item.firstline}
                number={item.number}
                listline={item.listline}
              />
            ))}
          </motion.div>
          <div className="mt-4 flex flex-row gap-6  px-4">
            <div className="left-chart w-1/2">
              <Leftchart />
            </div>
            <div className="right-chart w-1/2">
              <Rightsidechart />
            </div>
          </div>
          <div className="piechart-section flex flex-row gap-4 h-fit my-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="pie-chart w-1/3"
            >
              <Piechart />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="pie-chart w-2/3 shadow-lg border-1 border-gray-300 rounded-lg h-fit  px-4  py-7 bg-white "
            >
              <h1 className="text-[var(--heading)] text-2xl font-bold my-4">
                Quick Stats
              </h1>
              <motion.div className="grid grid-cols-2 gap-4">
                {quickStartData.map((item, index) => (
                  <Quickstartcard
                    key={index}
                    toptext={item.toptext}
                    bottomtext={item.bottomtext}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
