import React from "react";
import { Bar } from "react-chartjs-2";
import { motion } from "motion/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Rightsidechart = () => {
  const data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Job Postings",
        data: [100, 200, 300, 500, 550, 600, 700, 800, 950, 1000, 1500, 1200],
        backgroundColor: "#00B074",
        borderRadius: 6,
        barThickness: 24,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      className="bg-white shadow-lg rounded-lg border border-gray-300 p-4"
    >
      <h1 className="text-2xl font-bold mb-2 text-[var(--heading)]">
       User Growth
      </h1>

      <Bar data={data} options={options} />
    </motion.div>
  );
};

export default Rightsidechart;
