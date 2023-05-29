export const fetchTodos = (request) => (dispatch) =>{
    dispatch(todosFetching);
    request("http://localhost:3001/todos")
        .then(data => dispatch(todosFetched(data)))
        .catch(() => dispatch(todosFetchingError()))
}


export const todosFetching = () => {
    return{
        type: 'TODOS_FETCHING'
    }
}

export const todosFetched = (todos) => {
    return {
        type:'TODOS_FETCHED',
        payload: todos
    }
}

export const todosFetchingError = () =>{
    return {
        type: 'TODOS_FETCHING_ERROR'
    }
}

export const todosCreated = (todos) =>{
    return {
        type: 'TODOS_CREATED',
        payload: todos
    }
}

export const todosDeleted = (id) =>{
    return{
        type:'TODOS_DELETED',
        payload: id
    }
}