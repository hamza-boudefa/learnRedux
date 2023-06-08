import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../contants/todoTypes";

//  in this reducer , we have an initialState array that gonna receive new data an store it in the store

const initialState=[]

// the reducer get 2 parameters , the state and the type and payload that the component dispatch it to the right Action
// depands on the type , the reducer return set the payload into the store 
// next step=> go to add component
export const todoReducer=(state=initialState,{type,payload})=>{

switch (type) {
    case ADD_TODO:
        return [...state,payload]
    case EDIT_TODO:
        return   state.map((todo)=>todo.id==payload.id?todo=payload:todo) 
    case DELETE_TODO:
        return state.filter((todo)=>todo.id!=payload)
    default:
        break;
}

}

