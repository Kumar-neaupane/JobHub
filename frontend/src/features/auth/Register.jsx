import React, { useState } from "react";
import JobSeeker from "./components/Jobseeker";
import Employer from "./components/Employer";

const Register = () => {
  const [role, setRole] = useState("jobseeker");

  return (
    <div>
      {role === "employer" ? (
        <Employer role={role} setRole={setRole} />
      ) : (
        <JobSeeker role={role} setRole={setRole} />
      )}
    </div>
  );
};

export default Register;
