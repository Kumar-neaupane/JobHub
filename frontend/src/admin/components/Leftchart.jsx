import React from "react";
import { Line } from "react-chartjs-2";
import { motion } from "motion/react";

// Chart.js registration
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Leftchart = () => {
  // Chart Data
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [100, 200, 300, 500, 550, 600, 700, 800, 950, 1000, 1500, 1200],
        borderColor: "#00B074",
        backgroundColor: "#00B074",
        tension: 0.4, // smooth curve
        pointRadius: 5,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      className="bg-white shadow-lg rounded-lg border-1 border-gray-300 p-4"
    >
      <h1 className=" text-2xl font-bold mb-2 text-[var(--heading)]">
        Job Postings Over Time
      </h1>
      <Line data={data} options={options} className="" />
    </motion.div>
  );
};

export default Leftchart;
