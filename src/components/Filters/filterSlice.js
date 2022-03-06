// const initState = {
//     search: '',
//     status: 'All',
//     prioriry: []
// }

// const filtersReducer = (state = initState, action) => {
//     /*
//      action: {
//          type: 'todoList/addTodo,
//          payload: {id: 5, name: 'Learn CSS', completed: false, prioriry: 'Medium'}
//      }
//     */
//    switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/prioriryFilterChange':
//             return {
//                 ...state,
//                 prioriry: action.payload
//             }
//         default:
//             return state;
//    }
// }

// export default filtersReducer;

// toolkit

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        prioriry: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        prioriryFilterChange: (state, action) => {
            state.prioriry = action.payload
        }
    }
})