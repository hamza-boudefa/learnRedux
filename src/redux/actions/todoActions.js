import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../contants/todoTypes"

// here we create our actions 
// every action get payload as parametre and returns an object that contains type and payload so the reducer receiv it
// next step => go to todoReducer.js
export const addTodo=(payload)=>{
    return{
        type:ADD_TODO,
        payload
    }
} 

export const editTodo=(payload)=>{
    return{
        type:EDIT_TODO,
        payload
    }
}

export const deleteTodo=(payload)=>{
    console.log(payload)
    return{
        type:DELETE_TODO,
        payload
    }
}