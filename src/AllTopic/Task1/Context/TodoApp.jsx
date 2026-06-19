
import React from 'react'
import CreateTodo from '../Components/CreateTodo'
import DisplayTodos from '../Components/DisplayTodos'

const TodoApp = () => {
  return (
    <div>
      <h1>TodoApp</h1>
      <hr />
      <CreateTodo/>
      <hr />
      <DisplayTodos/>
    </div>
  )
}

export default TodoApp
