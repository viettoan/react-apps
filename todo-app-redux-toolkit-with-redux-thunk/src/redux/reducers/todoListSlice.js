import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    status: 'idle',
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = 'idle';
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const currentTodoIndex = state.todos.findIndex(
          todo => todo.id === action.payload.id
        );

        if (currentTodoIndex >= 0) {
          state.todos[currentTodoIndex] = action.payload;
        }
      });
  }
});

// thunk function
// action (object) - action creator () => action
// thunk action (function) - thunk action creator () => thunk action
export const addNewTodo = (newTodo) => {
  return (dispatch, getState) => {
    return fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo)
    }).then(
      res => res.json()
    ).then(
      res => dispatch(todoListSlice.actions.addTodo(res.todos))
    )
  }
}

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();

    return data.todos;
  }
)

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  (updatedTodoId) => {
    return fetch('/api/update-todo', {
      method: 'PUT',
      body: JSON.stringify(updatedTodoId)
    }).then(
      res => res.json()
    ).then(
      res => res.todos
    );
  }
)

export default todoListSlice;