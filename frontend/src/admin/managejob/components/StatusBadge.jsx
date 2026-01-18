import React from "react";

const StatusBadge = ({ status }) => {
  const styles = {
    Active: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Approved: "bg-blue-100 text-blue-600",
    Inactive: "bg-gray-100 text-gray-500",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
