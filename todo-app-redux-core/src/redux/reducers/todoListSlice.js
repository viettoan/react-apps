const initState = []
const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [
        ...state,
        action.payload
      ]
    case 'todoList/toggleTodoStatus':
      return state.map(
        todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }

          return todo;
        }
      )
    default:
      return state;
  }
}

export default todoListReducer;