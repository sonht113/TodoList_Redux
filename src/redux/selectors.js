import { createSelector } from "@reduxjs/toolkit";

const selectorSearchText = (state) => state.filters.search;
const selectorFilterStatus = (state) => state.filters.status;
const selectorFilterPriority = (state) => state.filters.prioriry;
const selectorTodoList = (state) => state.todoList;

export const selectRemainingTodoList = createSelector(
  selectorTodoList,
  selectorFilterStatus,
  selectorSearchText,
  selectorFilterPriority,
  (todoList, status, searchText, prioriry) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return prioriry.length
          ? todo.name.includes(searchText) && prioriry.includes(todo.prioriry)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (prioriry.length ? prioriry.includes(todo.prioriry) : true)
      );
    });
  }
);