// export default Sidebar;
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MenuIcon, ArrowLeftIcon } from "@heroicons/react/outline"; // use console terminal paste npm install @heroicons/react@1 for icons

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="border-b border-gray-300 bg-white-800 text-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            {/* Hamburger Menu */}
            <div className="flex items-center ">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {!isSidebarOpen && <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar*/}
      <div
        className={`border-r border-gray-300 absolute top-0 left-0 w-64 bg-white h-full transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-5">
          {/* Exit Button */}
          <div className="flex justify-end">
            <button onClick={() => setIsSidebarOpen(false)}>
              <ArrowLeftIcon className="h-6 w-6 text-gray" />
            </button>
          </div>
          <li className="list-none text-xl">
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="list-none text-xl">
            <Link to="/Patient">Patients</Link>
          </li>
          <li className="list-none text-xl">
            <Link to="/Document">Documents</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
