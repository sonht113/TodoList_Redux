import {createSelector} from 'reselect';


const selectorSearchText = (state) => state.filters.search;

const selectorTodoList = (state) => state.todoList;

export const selectRemainingTodoList = createSelector(selectorTodoList, selectorSearchText, (todoList, searchText) => {
    return todoList.filter(todo => {
        return todo.name.includes(searchText);
    })
})

// export const selectorTodoList = (state) => {
//     const todosRemaining = state.todoList.filter(todo => {
//         return todo.name.includes(state.filters.search);
//     })
//     return todosRemaining;
// };

