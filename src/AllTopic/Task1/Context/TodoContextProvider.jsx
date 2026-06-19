import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodos = {
      id: Date.now(),
      text: todo,
    };

    setAllTodos((prev) => [...prev, newTodos]);

    const savedTodo = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodo.push(newTodos);
    console.log(savedTodo);

    localStorage.setItem("todos", JSON.stringify(savedTodo));

    setTodo("");
  };

  const handleDeleteTodos = (id) => {
    const todos = [...allTodos];
    const filterTodos = todos.filter((ele) => ele.id !== id);
    setAllTodos(filterTodos);
    localStorage.setItem("todos", JSON.stringify(filterTodos));
  };
  return (
    <div>
      <TodoContext.Provider
        value={{ todo, handleTodo, handleSubmit, allTodos, handleDeleteTodos }}
      >
        {props.children}
      </TodoContext.Provider>
    </div>
  );
};

export default TodoContextProvider;
