import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditTodo from './EditTodo'
import { Button } from 'react-bootstrap'
import { deleteTodo } from '../redux/actions/todoActions'

const Todo = () => {
    const todos=useSelector(store=>store)

// Using the useSelector hook, we can retrieve our data (todos) from the store and iterate over the todos in the component.

// the ntxt step is to delete todo
// houni yezikom 
const dispatch=useDispatch()

  return (
    <div>
    {todos && todos.map((todo)=>
    <div style={{display:"flex"}} >
       <h1> {todo.text}  </h1>
       <EditTodo todo={todo} />
       <Button onClick={()=>dispatch(deleteTodo(todo.id))} >delete</Button>
    </div> )}
    
    </div>
  )
}

export default Todo