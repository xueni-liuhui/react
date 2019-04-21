import { createStore } from "redux";
import todoReducer from './todo_reducer';
const store =createStore(todoReducer);

export default store;