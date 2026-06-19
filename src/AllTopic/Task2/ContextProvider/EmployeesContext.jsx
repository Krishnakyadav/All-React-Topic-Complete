import { createContext, useState, useEffect } from "react";

export const EmployeesData = createContext();
const EmployeesContext = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleDepartment = (e) => setDepartment(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  console.log(employees);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !department || !salary) {
      alert("all fied is require");
      return;
    }

    const isExist = employees.some(
      (emp) => emp.email.toLowerCase() === email.toLowerCase(),
    );
    if (isExist) {
      alert("Employees alread exixt");
      return;
    }
    const newEmployees = {
      id: Date.now(),
      name,
      email,
      department,
      salary,
    };
    console.log(newEmployees);

    const updatedEmployees = [...employees, newEmployees];
    setEmployees(updatedEmployees);
    // localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setName("");
    setEmail("");
    setDepartment("");
    setSalary("");
  };

  const handleDelete = (id) => {
    const filter = employees.filter((ele) => ele.id !== id);
    setEmployees(filter);
    // localStorage.setItem("employees", JSON.stringify(filter));
  };
  return (
    <div>
      <EmployeesData.Provider
        value={{
          name,
          email,
          department,
          salary,
          employees,
          handleName,
          handleEmail,
          handleDepartment,
          handleSalary,
          handleSubmit,
          handleDelete,
        }}
      >
        {props.children}
      </EmployeesData.Provider>
    </div>
  );
};

export default EmployeesContext;
