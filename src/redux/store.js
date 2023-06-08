import { createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";



// first step => creating store and link it to redux devtools extension
//import  createStore from redux so you can create your redux store
// 2nd step => go to index.js
const store=createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store