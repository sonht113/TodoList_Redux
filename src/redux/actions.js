export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (data) => {
    return {
        type: 'filters/filterTodo', 
        payload: data
    }
}

