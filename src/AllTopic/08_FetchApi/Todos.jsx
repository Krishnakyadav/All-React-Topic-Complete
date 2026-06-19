import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const handleFetch = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      console.log(data.todos);
      setTodos(data.todos);
    } catch (error) {
      console.log("backend error", error);
    }
  };
  return (
    <div>
      <h1>Learn Fetch Api and Display on UI</h1>
      <button onClick={handleFetch}>Fetch</button>
      {todos.length === 0 ? <p>todo not avaliable</p> : <section>
        {todos.map((item)=>{
            return(
                <div key={item.id}>
                    <h1>{item.todo}</h1>
                    <p>{item.completed?"done":"pending"}</p>
                    <p>{item.id}</p>
                    <p>{item.userId}</p>
                </div>
            )
        })}
        </section>}
    </div>
  );
};

export default Todos;
