// SideNav.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav: React.FC = () => {
  return (
    <div className="sideNav">
      <h3>Dump Types</h3>
      <Link to="/tabledump/benefits">Benefits</Link>
      <Link to="/tabledump/individual">Individual</Link>
      <Link to="/tabledump/employer">Employer</Link>
    </div>
  );
};

export default SideNav;
