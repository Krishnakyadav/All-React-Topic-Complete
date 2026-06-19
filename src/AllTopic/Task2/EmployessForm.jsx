import { useContext } from "react";
import { EmployeesData } from "./ContextProvider/EmployeesContext";

const EmployessForm = () => {
  const {
    name,
    email,
    department,
    salary,
    handleName,
    handleEmail,
    handleDepartment,
    handleSalary,
    handleSubmit,
  } = useContext(EmployeesData);

  return (
    <div>
      <h1>Employees Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={name}
          onChange={handleName}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <label htmlFor="department">Department: </label>
        <input
          type="text"
          id="department"
          placeholder="Enter Department"
          value={department}
          onChange={handleDepartment}
        />
        <br />
        <br />
        <label htmlFor="salary">Salary: </label>
        <input
          type="number"
          id="salary"
          placeholder="Enter Salary"
          value={salary}
          onChange={handleSalary}
        />
        <br />
        <br />
        <button>Employees</button>
      </form>
    </div>
  );
};

export default EmployessForm;
