import React from "react";
import { Pie } from "react-chartjs-2";
import { motion } from "motion/react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
  const data = {
    labels: [
      "Technology 30%",
      "Marketing 20%",
      "Sales 17%",
      "Design 14%",
      "Finance 11%",
      "Other 8%",
    ],
    datasets: [
      {
        data: [30, 20, 17, 14, 11, 8],
        backgroundColor: [
          "#00C389",
          "#007BFF",
          "#FFC107",
          "#FF8A3D",
          "#7A7ADB",
          "#9ED9A1",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            family: "Inter, sans-serif",
            size: 13,
          },
        },
      },
    },
  };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, delay: 0.2 }}
     className="bg-white p-4 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-bold text-[var(--heading)] ">
        Applications by Category
      </h2>
      <Pie data={data} options={options} />
    </motion.div>
  );
};

export default Piechart;
