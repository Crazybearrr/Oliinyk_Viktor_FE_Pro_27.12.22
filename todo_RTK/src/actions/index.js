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