import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex gap-3 text-lg">
      <button title="View">👁</button>
      <button title="Edit" className="text-green-600">✏️</button>
      <button title="Delete" className="text-red-500">🗑</button>
    </div>
  );
};

export default ActionButtons;
