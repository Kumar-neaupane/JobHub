import React from "react";
import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

const JobRow = ({ job }) => {
  return (
    <tr className="border-t text-sm">
      <td className="py-4">
        <div className="font-medium">{job.title}</div>
        <div className="text-gray-400 text-xs">{job.salary}</div>
      </td>
      <td>{job.company}</td>
      <td>{job.category}</td>
      <td>{job.location}</td>
      <td className="font-semibold">{job.applicants}</td>
      <td>{job.posted}</td>
      <td>
        <StatusBadge status={job.status} />
      </td>
      <td>
        <ActionButtons />
      </td>
    </tr>
  );
};

export default JobRow;
s