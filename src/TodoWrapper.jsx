import CreateTodo from "./Createtodo/CreateTodo";
import { useState } from "react";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(()=>{
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
  });
  
  console.log(allTodos);

  const handleCreateTodo = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };

    const todos = [...allTodos, newTodo];

    setAllTodos([...allTodos, newTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));

    setTodo("");
  };

  const handleDeleteTodo = (id) => {
  const filteredTodos = allTodos.filter((ele) => ele.id !== id);

  setAllTodos(filteredTodos);

  localStorage.setItem(
    "todos",
    JSON.stringify(filteredTodos)
  );
};

  return (
    <>
      <main>
        <h1>Todo App</h1>
        <CreateTodo
          todo={todo}
          setTodo={setTodo}
          handleCreateTodo={handleCreateTodo}
        />
        {
            allTodos.map((item)=>(
                <div key={item.id}>
                    <p>{item.text}</p>
                    <button>edit</button>
                    <button onClick={()=>handleDeleteTodo(item.id)}>delete</button>
                </div>
            ))
        }
      </main>
    </>
  );
};

export default TodoWrapper;
