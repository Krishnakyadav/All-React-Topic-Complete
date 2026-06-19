

import {useContext} from 'react'
import { TodoContext } from '../Context/TodoContextProvider';

const CreateTodo = () => {
    const {todo,handleTodo,handleSubmit,} = useContext(TodoContext);
   
    
  return (
    <div>
      <h1>Create a TodoApp</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Todo here.......' value={todo} onChange={handleTodo}/><br/><br/>
        <button>Create</button>
      </form>
    </div>
  )
}

export default CreateTodo;
