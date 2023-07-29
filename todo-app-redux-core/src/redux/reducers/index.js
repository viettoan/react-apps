import filterSlice from "./filterSlice";
import todoListSlice from "./todoListSlice";
import {combineReducers} from "redux";

export default combineReducers({
  filters: filterSlice,
  todoList: todoListSlice
})