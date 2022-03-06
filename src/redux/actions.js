export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const completeTodo = todoId => {
    return {
        type: 'todoList/completeTodo',
        payload: todoId
    }
}

export const searchFilterChange = (data) => {
    return {
        type: 'filters/searchFilterChange', 
        payload: data
    }
}

export const statusFilterChange = (data) => {
    return {
        type: 'filters/statusFilterChange',
        payload: data
    }
}

export const prioriryFilterChange = (data) => {
    return {
        type: 'filters/prioriryFilterChange',
        payload: data
    }
}

