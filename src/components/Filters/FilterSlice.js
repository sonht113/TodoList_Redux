const initState = {
    search: '',
    status: 'All',
    prioriry: []
}

const filtersReducer = (state = initState, action) => {
    /*
     action: {
         type: 'todoList/addTodo,
         payload: {id: 5, name: 'Learn CSS', completed: false, prioriry: 'Medium'}
     }
    */
   switch (action.type) {
        case 'filters/filterTodo':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
   }
}

export default filtersReducer;