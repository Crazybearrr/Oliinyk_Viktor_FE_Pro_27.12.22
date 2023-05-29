const initialState = {
    todos:[],
    todosLoadingStatus: 'idle'
}

const todos = (state= initialState, action)=>{
    switch (action.type) {
        case "TODOS_FETCHING":
            return{
                ...state,
                todosLoadingStatus: 'Loading'
            }
        case "TODOS_FETCHED":
            return{
                ...state,
                todos: action.payload,
                todosLoadingStatus: 'idle'
            }
        case "TODOS_FETCHING_ERROR":
            return{
                ...state,
                todosLoadingStatus:'error'
            }
        case "TODOS_CREATED":
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "TODOS_DELETED":
            return{
                ...state,
                todos: state.todos.filter(item => item.element !== action.payload)
            }
        default:
            return state
    }
}

export default todos