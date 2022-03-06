import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoListSlice";

const rootReducer = combineReducers({
    filters: filtersReducer, 
    todoList: todoListReducer
})

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action), 
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

export default rootReducer;