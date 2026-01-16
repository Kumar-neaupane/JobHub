import React from "react";
import { motion } from "motion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboardgrid = ({ icon, firstline, number, listline }) => {
  return (
    <motion.div
      className="card shadow-lg flex justify-between p-4 rounded-lg border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 }}
    >
      <div className="flex flex-col gap-2">
        <p className="text-[var(--paragraph-color)]">{firstline}</p>
        <h1 className="text-2xl font-bold text-[var(--heading)]">{number}</h1>
        <p className="text-[var(--bg-color)]">{listline}</p>
      </div>

      <FontAwesomeIcon
        icon={icon}
        className="text-2xl text-[var(--bg-color)] bg-gray-200 p-4 rounded-lg "
      />
    </motion.div>
  );
};

export default Dashboardgrid;
