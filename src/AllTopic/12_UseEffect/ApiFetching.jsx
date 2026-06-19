import { useState, useEffect } from "react";

function ApiFetching() {
  const [employees, setEmployees] = useState([]);
 const [search,setSearch] =useState("")
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true); // start loading

      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setEmployees(data.users);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchEmployees();
  }, []);

  const filter = employees.filter((emp) =>
    emp.firstName.toLowerCase().includes(search.toLowerCase()),
  );
//   console.log(filter)
  return (
    <div>
      <h1>Employee List</h1>
      <h1>Employee Search</h1>

      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
      filter.map((emp) => (
          <div key={emp.id} style={{ border: "1px solid black", margin: 10 }}>
            <h3>{emp.firstName}</h3>
            <p>Email: {emp.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ApiFetching;
