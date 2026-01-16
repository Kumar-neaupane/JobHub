import React from "react";
import { motion } from "motion/react";

const Quickstartcard = ({ toptext, bottomtext }) => {
  return (
    <motion.div 
     animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, delay: 0.2 }} className="quickstart-details flex flex-col gap-2 bg-gray-100 p-4 rounded-lg shadow-lg border border-gray-300 ">
      <p className="text-xl text-[var(--paragraph-color)]">{toptext}</p>
      <h1 className="text-2xl font-bold text-[var(--bg-color)]">{bottomtext}</h1>
    </motion.div>
  );
};

export default Quickstartcard;
