import React, { useEffect, useState } from "react";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [search,setSearch] =useState("");
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/users");
        const data = await resp.json();
        setUser(data.users);
      } catch (err) {
        console.log("Data not Fetch", err);
      }
    };
    handleFetch();
  }, []);

const filterupdated = user.filter((ele)=>ele.firstName.toLowerCase().includes(search.toLowerCase()));
  console.log(search)
  return (
    <div>
      <h1>UserList</h1>
      <input type="search" id="search" placeholder="search here........ " value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {/* <button onClick={handleFetch}>Fetching</button> */}
      {user.length === 0 ? (
        <p>User data is not Availble</p>
      ) : (
        <table style={{ border: "2" }}>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>lastName</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody >
            {filterupdated.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.firstName}</td>
                  <td>{ele.lastName}</td>
                  <td>{ele.email}</td>
                  <td>{ele.age}</td>
                  <td>{ele.gender}</td>
                  <td>{ele.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
