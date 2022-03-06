// const initState = [
//   { id: 1, name: "Learn HTML", completed: false, prioriry: "Medium" },
//   { id: 2, name: "Learn Redux", completed: true, prioriry: "High" },
//   { id: 3, name: "Learn React", completed: false, prioriry: "Low" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [...state, action.payload];
//     case 'todoList/completeTodo':
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: "Learn HTML", completed: false, prioriry: "Medium" },
        { id: 2, name: "Learn Redux", completed: true, prioriry: "High" },
        { id: 3, name: "Learn React", completed: false, prioriry: "Low" },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        completeTodo: (state, action) => {
            // filter() => [] chua nhieu phan tu / find() => tim ra mot phan tu minh can
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
        }
    }
})
