const CreateTodo = ({ todo, setTodo, handleCreateTodo }) => {
  return (
    <form onSubmit={handleCreateTodo}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
      
    </form>
  );
};

export default CreateTodo;
