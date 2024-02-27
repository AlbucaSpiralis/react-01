import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TableDump.css";
import SideNav from "../components/SideNav";
import InputForm from "../components/InputForm";

const TableDump: React.FC = () => {
  const benefitFields = {
    fields: [
      "Benefit ID",
      // "Benefit Type",
      // "Effective Date",
      // "Termination Date",
    ],
    types: ["text"], //, "text", "date", "date"],
  };

  const individualFields = {
    fields: ["test"],
    types: ["text"],
  };

  const employerFields = {
    fields: [],
    types: [],
  };

  return (
    <div className="tableDumpPage">
      <h1>Table Dump Page</h1>
      <SideNav />
      <Routes>
        <Route
          path="benefits"
          element={<InputForm dumpType="Benefits" {...benefitFields} />}
        />
        <Route
          path="individual"
          element={<InputForm dumpType="Individual" {...individualFields} />}
        />
        <Route
          path="employer"
          element={<InputForm dumpType="Employer" {...employerFields} />}
        />
      </Routes>
    </div>
  );
};

export default TableDump;
