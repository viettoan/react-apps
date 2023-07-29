import {createSlice} from '@reduxjs/toolkit'
const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(
        todo => todo.id === action.payload
      );

      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  }
});

export default todoListSlice;