import React from "react";
import JobRow from "./Jobrow.jsx";

const JobsTable = ({ jobs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="text-left text-gray-500 text-xs">
          <tr>
            <th className="pb-3">JOB TITLE</th>
            <th>COMPANY</th>
            <th>CATEGORY</th>
            <th>LOCATION</th>
            <th>APPLICANTS</th>
            <th>POSTED</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsTable;
