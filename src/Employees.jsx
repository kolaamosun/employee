import React from "react";
import { useState } from "react";
import { employeeData } from "./data/employee.data";
import femaleProfile from "./Images/femaleProfile.jpeg";
import maleProfile from "./Images/maleProfile.jpeg";

const Employees = () => {
  const defaultTeam = "TeamA";
  const [selectedTeam, setSelectTeam] = useState(defaultTeam);

  const [employees, setEmployees] = useState(
    employeeData.filter((employee) => employee.teamName === selectedTeam)
  );
  const handleSelectionChange = (event) => {
    const newTeam = event.target.value;
    setSelectTeam(newTeam);
    setEmployees(
      employeeData.filter((employee) => employee.teamName === newTeam)
    );
  };
  return (
    <main className="container">
      <div className="row justify-contentcenter mt-3 mb3">
        <div className="col-8">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => {
              return (
                <div
                  key={employee.id}
                  className="card m-2"
                  style={{ cursor: "pointer" }}
                >
                  {employee.gender === "female" ? (
                    <img src={femaleProfile} alt="" />
                  ) : (
                    <img src={maleProfile} alt="" />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">
                      FullName: {employee.fullName}
                    </h5>
                    <p className="card-text">
                      <b>Designation:</b> {employee.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
