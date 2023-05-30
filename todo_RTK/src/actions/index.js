import { createAction } from "@reduxjs/toolkit";

export const fetchTodos = (request) => (dispatch) =>{
    dispatch(todosFetching());
    request("http://localhost:3001/todos")
        .then(data => dispatch(todosFetched(data)))
        .catch(() => dispatch(todosFetchingError()))
}

export const todosFetching = createAction('TODOS_FETCHING');
export const todosFetched = createAction('TODOS_FETCHED');
export const todosFetchingError = createAction('TODOS_FETCHING_ERROR');
export const todosCreated = createAction('TODOS_CREATED');
export const todosDeleted = createAction('TODOS_DELETED', (id)=>{
    return{
        payload: id
    }
});

// export const todosFetching = () => {
//     return{
//         type: 'TODOS_FETCHING'
//     }
// }


// export const todosFetched = (todos) => {
//     return {
//         type:'TODOS_FETCHED',
//         payload: todos
//     }
// }

// export const todosFetchingError = () =>{
//     return {
//         type: 'TODOS_FETCHING_ERROR'
//     }
// }

// export const todosCreated = (todos) =>{
//     return {
//         type: 'TODOS_CREATED',
//         payload: todos
//     }
// }

// export const todosDeleted = (id) =>{
//     return{
//         type:'TODOS_DELETED',
//         payload: id
//     }
// }