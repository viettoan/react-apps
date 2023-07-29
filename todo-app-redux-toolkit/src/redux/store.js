import {configureStore} from '@reduxjs/toolkit'
import filterSlice from "./reducers/filterSlice";
import todoListSlice from "./reducers/todoListSlice";

console.log(filterSlice)

const store = configureStore(
  {
    reducer: {
      filters: filterSlice.reducer,
      todoList: todoListSlice.reducer
    },
  }
)

export default store;