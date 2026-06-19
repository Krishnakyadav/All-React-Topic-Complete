
import { useState, useEffect } from "react";
import DisplayEmployees from "./DisplayEmployees";
import logo from "../assets/Qsp.jpg";
const Employees = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    maritalStatus: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const newEmployee = {
    id: Date.now(),
    ...formData,
  };

  const updatedEmployees = [
    ...employees,
    newEmployee,
  ];

  setEmployees(updatedEmployees);

  localStorage.setItem(
    "employees",
    JSON.stringify(updatedEmployees)
  );

  setFormData({
    firstName: "",
    middleName: "",
    lastName: "",
    maritalStatus: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
};

  return (
    <div className="container">
      <div className="header">
        <div className="logo"><img src={logo} alt="" /></div>

        <div>
          <h1>Employee Registration Form</h1>
          <p>Please fill out the form for registration.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Full Name</h3>

        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <option value="">Marital Status</option>
            <option>Single</option>
            <option>Married</option>
          </select>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <h3>Home Address</h3>

        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleChange}
        />

        <div className="row">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="state"
            placeholder="State / Province"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />

          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={formData.zipCode}
            onChange={handleChange}
          />
         
        </div>

        <button type="submit" className="btn">
          REGISTER ME
        </button>
      </form>
      <br/>
       <input
            type="text"
            placeholder="Search Employee"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
      <DisplayEmployees
        employees={employees}
        search={search}
        // handleEdit={handleEdit}
        // handleDelete={handleDelete}
      />
    </div>
  );
};

export default Employees;
