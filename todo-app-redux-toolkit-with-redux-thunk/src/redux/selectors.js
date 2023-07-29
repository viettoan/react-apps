import {createSelector} from '@reduxjs/toolkit';
export const todoListSelector = state => state.todoList.todos;
export const searchTextSelector = state => state.filters.search;
export const statusSelector = state => state.filters.status;
export const prioritiesSelector = state => state.filters.priorities;
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  prioritiesSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter(
      todo => todo.name.includes(searchText)
        && (
          status === 'All'
          || (status === 'Completed' && todo.completed)
          || (status === 'Todo' && !todo.completed)
        )
        && (priorities.length === 0 || (priorities.length > 0 && priorities.includes(todo.priority)))
    )
  }
)