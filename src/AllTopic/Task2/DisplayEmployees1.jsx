import { useContext } from "react";
import { EmployeesData } from "./ContextProvider/EmployeesContext";

const DisplayEmployees1 = () => {
  const { employees,handleDelete } = useContext(EmployeesData);
  return (
    <div>
      <p>allEmployees are display Here.........</p>
      {employees.length === 0 ? (
        <p>employees not available </p>
      ) : (
        <section>
            {employees.map((emp)=>(
                <div key={emp.id}>
                    <h3>{emp.name}</h3>
                    <p>{emp.email}</p>
                    <p>{emp.department}</p>
                    <p>{emp.salary}</p>
                    <button>Edit</button>
                    <button onClick={()=>handleDelete(emp.id)}>Delete</button>
                </div>
            ))}
        </section>
      )}
    </div>
  );
};

export default DisplayEmployees1;
