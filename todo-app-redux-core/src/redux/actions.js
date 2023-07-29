export const addTodo = (todo) => {
  return {
    type: 'todoList/addTodo',
    payload: todo
  }
}

export const toggleTodoStatus = (todoListId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoListId
  }
}

export const searchFilterChange = (text) => {
  return {
    type: 'filters/searchFilterChange',
    payload: text
  }
}

export const statusFilterChange = (status) => {
  return {
    type: 'filters/statusFilterChange',
    payload: status
  }
}

export const prioritiesFilterChange = (priorities = []) => {
  return {
    type: 'filters/prioritiesFilterChange',
    payload: priorities
  }
}

