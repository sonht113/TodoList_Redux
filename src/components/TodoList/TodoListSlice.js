const initState = [
    {id: 1, name: 'Learn HTML', completed: false, prioriry: 'Medium'},
    {id: 2, name: 'Learn Redux', completed: true, prioriry: 'High'},
    {id: 3, name: 'Learn React', completed: false, prioriry: 'Low'}
]

const todoListReducer = (state = initState, action) => {
   switch (action.type) {
       case 'todoList/addTodo':
           return [  
                ...state, 
                action.payload
            ]
        default:
            return state;
   }
}

export default todoListReducer;