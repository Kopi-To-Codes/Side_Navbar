import React, { useState, useEffect } from "react";
import "./App.css";

const Patient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = () => {
    // Check if search term is empty and reset to full list
    if (!searchTerm.trim()) {
      setFilteredPatients(patients);
      return;
    }

    // Filter based on the search accounts
    const filtered = patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.contact.includes(searchTerm) ||
        patient.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  const handleCreateAccount = () => {
    console.log("Create Patient Account clicked");
  };

  // patient holder
  const patients = [
    {
      id: 1,
      name: "Okatsu Mel",
      email: "Okatsuki@example.com",
      age: 30,
      gender: "Male",
      contact: "09175923268",
      address: "1234 Test Street is my street",
    },
    {
      id: 1,
      name: "Johna Bautista",
      email: "johna@example.com",
      age: 30,
      gender: "Female",
      contact: "09175923265",
      address: "1234 Test Street is my street",
    }, // more patients in backend
  ];

  useEffect(() => {
    setFilteredPatients(patients);
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white  ">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-4xl font-bold">Patients</h2>
        <div className="flex space-x-3">
          <input
            type="text"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            onClick={handleFilter}
            className="bg-indigo-500 text-white px-6 py-3 rounded shadow hover:bg-indigo-600 focus:outline-none"
          >
            Filter
          </button>
          <button
            onClick={handleCreateAccount}
            className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 focus:outline-none"
          >
            Create Patient Record
          </button>
        </div>
      </div>

      {/* Table deisgn here */}
      <div className="overflow-x-auto rounded-lg ">
        <table className="min-w-full bg-white">
          <thead className="bg-teal-600 text-white uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Patient Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Age</th>
              <th className="py-3 px-6 text-left">Gender</th>
              <th className="py-3 px-6 text-left">Contact Number</th>
              <th className="py-3 px-6 text-left">Address</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredPatients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b border-gray-200 hover:bg-emerald-100"
              >
                {/* display resulst */}
                <td className="py-3 px-6 text-left">{patient.id}</td>
                <td className="py-3 px-6 text-left">{patient.name}</td>
                <td className="py-3 px-6 text-left">{patient.email}</td>
                <td className="py-3 px-6 text-left">{patient.age}</td>
                <td className="py-3 px-6 text-left">{patient.gender}</td>
                <td className="py-3 px-6 text-left">{patient.contact}</td>
                <td className="py-3 px-6 text-left">{patient.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-4 flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">2</span> results
          </p>
        </div>
        <div className="flex-initial">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="z-10 bg-emerald-400 border-gray-400 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              1
            </button>
            <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              2
            </button>
            {/* More here page numbers*/}
            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Patient;
