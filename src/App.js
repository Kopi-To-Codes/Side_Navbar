import React from "react";
import SideNavbar from "./SideNavbar";
import Dashboard from "./Dashboard";
import Patient from "./Patient";
import Document from "./Document";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <SideNavbar />
        <div className="main-content">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Patient" element={<Patient />} />
            <Route path="/Document" element={<Document />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
