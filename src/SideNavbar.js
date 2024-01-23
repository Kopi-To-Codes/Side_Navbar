import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        className={`toggle-button ${
          !isVisible ? "" : "toggle-button-sidebar-hidden"
        }`}
        onClick={toggleSidebar}
      >
        <span className="hamburger-line">&nbsp;</span>
        <span className="hamburger-line">&nbsp;</span>
        <span className="hamburger-line">&nbsp;</span>
      </button>
      <div className={`sidebar ${!isVisible ? "sidebar-hidden" : ""}`}>
        {/* Sidebar content */}
        <ul>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Patient">Patients</Link>
          </li>
          <li>
            <Link to="/Document">Documents</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
