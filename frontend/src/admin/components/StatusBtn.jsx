import React from "react";

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Approved: "bg-green-100 text-green-700 border-green-200",
  Rejected: "bg-red-100 text-red-700 border-red-200",
};

const StatusBtn = ({ status }) => {
  const resolvedClass = statusStyles[status] || statusStyles.Rejected;

  return (
    <button
      type="button"
      className={`rounded-full border px-3 py-1 text-sm font-semibold ${resolvedClass}`}
    >
      {status}
    </button>
  );
};

export default StatusBtn;
