import React, { useState } from "react";

const Employees1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [editId,setEditId] = useState(null)
  const [allEmploye, setAllEmploye] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });
  console.log(allEmploye);
  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId){
        const updatedEmployees = allEmploye.map((emp)=>
            emp.id===editId?{...emp,name,email,department,password,salary}
        :emp
    )
    setAllEmploye(updatedEmployees);
    localStorage.setItem("employees",JSON.stringify(updatedEmployees))
    setEditId(null)
     setName("");
    setEmail("");
    setPassword("");
    setDepartment("");
    setSalary("");
    return;
}

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !department.trim() ||
      !salary
    ) {
      alert("field is require");
      return;
    }

    const isExist = allEmploye.find(
      (ele) => ele.email.toLowerCase() === email.toLowerCase(),
    );
    if (isExist) {
      alert("employes already exist");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      department,
      salary,
    };

    const user = [...allEmploye, newUser];
    setAllEmploye(user);
    localStorage.setItem("employees", JSON.stringify(user));
    setName("");
    setEmail("");
    setPassword("");
    setDepartment("");
    setSalary("");
    // console.log(allEmploye)
  };
  const handleDelete=(id)=>{
    const allCopy = [...allEmploye];
    const filter = allCopy.filter((ele)=>ele.id!==id)
    setAllEmploye(filter);
    localStorage.setItem("employees",JSON.stringify(filter))
  }
  const handleEdit=(emp)=>{
//    const employ = [...allEmploye];
//   const updated =  employ.find((emp)=>emp.id===id)
   setName(emp.name)
   setEmail(emp.email)
   setPassword(emp.password)
   setDepartment(emp.department)
   setSalary(emp.salary)
   setEditId(emp.id)

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Employees Form</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          placeholder="Enter Your Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="salary">salary:</label>
        <input
          type="number"
          id="salary"
          placeholder="Enter Your salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">{editId?"Employees Updated":"Employees Create"}</button>
      </form>
      <hr />
      <h1>Display All Employees here.....</h1>
      {allEmploye.length === 0 ? (
        <p>No Employees Available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allEmploye.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.password}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <button onClick={()=>handleEdit(emp)}>Edit</button>
                    <button  onClick={()=>handleDelete(emp.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Employees1;
