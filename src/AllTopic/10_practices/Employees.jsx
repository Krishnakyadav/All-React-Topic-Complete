import { useState } from "react";

const Employees = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [department, setDepartment] = useState("");
  // const [salary, setSalary] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });
  const [employees,setEmployees] =useState([])

  // const handleName = (e) => setName(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);
  // const handleDepartment = (e) => setDepartment(e.target.value);
  // const handleSalary = (e) => setSalary(e.target.value);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setEmployees([...employees, formData]);
    if (
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.salary
    ) {
      alert("all filled are required");
      return;
    }
    const NewUser = { ...formData };
    console.log(NewUser);

    const savedForm = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = savedForm.find((ele) => ele.email === email);
    if (isExist) {
      alert("User already exist");
      return;
    }
    savedForm.push(NewUser);
    localStorage.setItem("users", JSON.stringify(savedForm));

    setFormData({
      name: "",
      email: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Employees Froms</h1>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          placeholder="Enter Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          id="salary"
          placeholder="Enter Salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Employee List</h2>

      {employees.map((emp, index) => (
        <div key={index}>
          <p>Name: {emp.name}</p>
          <p>Email: {emp.email}</p>
          <p>Department: {emp.department}</p>
          <p>Salary: {emp.salary}</p>
        </div>
      ))}
    </div>
  );
};

export default Employees;
