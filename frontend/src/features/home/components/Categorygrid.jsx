import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeadset,
  faUserTie,
  faListCheck,
  faChartLine,
  faHandshake,
  faBookOpen,
  faCompassDrafting,
} from "@fortawesome/free-solid-svg-icons";
import GridCard from "../../../components/GridCard";

const Categorygrid = () => {
  const gridData = [
    { icon: faEnvelope, title: "Marketing", vacancy: 123 },
    { icon: faHeadset, title: "Customer Service", vacancy: 123 },
    { icon: faUserTie, title: "Human Resource", vacancy: 123 },
    { icon: faListCheck, title: "Project Management", vacancy: 123 },
    { icon: faChartLine, title: "Business Development", vacancy: 123 },
    { icon: faHandshake, title: "Sales & Communication", vacancy: 123 },
    { icon: faBookOpen, title: "Teaching & Education", vacancy: 123 },
    { icon: faCompassDrafting, title: "Design & Creative", vacancy: 123 },
  ];
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8">
      <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] pb-8">
        Explore By Category
      </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {gridData.map((iteam,index)=>(
                <GridCard key={index} icon={iteam.icon} title={iteam.title} vacancy={iteam.vacancy} delay={index * 100} />

              ))}
            </div>
    </section>
  )
};

export default Categorygrid;
