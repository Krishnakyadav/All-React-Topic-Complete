import React from "react";

const DisplayEmployees = ({
  employees,
  search,
  handleEdit,
  handleDelete,
}) => {
  const filteredEmployees = employees.filter((emp) =>
    `${emp.firstName} ${emp.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  console.log(employees)

  return (
    <div>
      <h2>Employee List</h2>

      <h3>Total Employees: {filteredEmployees.length}</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Marital Status</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>ZIP Code</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.firstName}</td>
              <td>{emp.middleName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.maritalStatus}</td>
              <td>{emp.dob}</td>
              <td>{emp.email}</td>
              <td>{emp.mobile}</td>
              <td>{emp.address}</td>
              <td>{emp.city}</td>
              <td>{emp.state}</td>
              <td>{emp.country}</td>
              <td>{emp.zipCode}</td>

              <td>
                <button onClick={() => handleEdit(emp)}>
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayEmployees;