import axios from "axios";
import { useEffect, useState } from "react";

// //get data to server
// const DataFetctAxiso = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resp = await axios.get("https://dummyjson.com/users");
//         setUsers(resp.data.users);
        
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data fetch using axiox</h1>
//       {users.map((ele) => {
//         return (
//           <div key={ele.id}>
//             <h1>{ele.firstName}</h1>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default DataFetctAxiso;


// post data to server
// const DataFetctAxiso = () => {
//     const handlePost = async()=>{
//  const user={
//     firstName:"krishna",
//     email:"krishnayadav@gmail.com"
//  }
//  try{
//     const resp= await axios.post("https://dummyjson.com/users/add",user);
//     console.log(resp.data)
//  }catch(err){
//     console.log("erroe",err)
//  }
//     }
//   return (
//     <div>
//       <h1>send data to the server</h1>
//       <button onClick={handlePost}>Send Data</button>
//     </div>
//   )
// }

// export default DataFetctAxiso

// import React from 'react'

// // put (updated) data to server
// const DataFetctAxiso = () => {
//     const handleUpdate= async()=>{
//         const updatedUser = {
//             firstName:"rupesh",
//             email:"rupesh@gamil.com"
//         }
//         try{
//             const res = await axios.put("https://dummyjson.com/users/1",updatedUser)
//             console.log("updated User:",res.data)
//         }catch(err){
//             console.log("error",err)
//         }
//     }
//   return (
//     <div>
//       <h1>Update User</h1>
//       <button onClick={handleUpdate}>Update User</button>
//     </div>
//   )
// }

// export default DataFetctAxiso

import React from 'react'

//delete data to server
const DataFetctAxiso = () => {
    const deleteData= async()=>{
        try{
          const resp = await axios.delete("https://dummyjson.com/users/1")
        console.log(resp.data)
        }   
    catch(err){
        console.log("err",err)
    }
    }
  return (
    <div>
      <h1>delete data </h1>
      <button onClick={deleteData}>deleteData</button>
    </div>
  )
}

export default DataFetctAxiso
