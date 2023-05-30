import { createReducer } from "@reduxjs/toolkit";
import {
    todosCreated, 
    todosDeleted, 
    todosFetched, 
    todosFetching, 
    todosFetchingError
} from '../actions';

const initialState = {
    todos:[],
    todosLoadingStatus: 'idle',
}

const todos = createReducer(initialState, builder =>{
    builder
        .addCase(todosFetching, state => {
            state.todosLoadingStatus = 'Loading';
        })
        .addCase(todosFetched, (state, action) => {
            state.todosLoadingStatus = 'idle';
            state.todos = action.payload;
        })
        .addCase(todosFetchingError, state =>{
            state.todosLoadingStatus = 'error';
        })
        .addCase(todosCreated, (state, action)=>{
            state.todos.push(action.payload);
        })
        .addCase(todosDeleted, (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload); 
        })
        .addDefaultCase(()=>{})
})

// const todos = (state = initialState, action)=>{
//     switch (action.type) {
//         case "TODOS_FETCHING":
//             return{
//                 ...state,
//                 todosLoadingStatus: 'Loading'
//             }
//         case "TODOS_FETCHED":
//             return{
//                 ...state,
//                 todos: action.payload,
//                 todosLoadingStatus: 'idle'
//             }
//         case "TODOS_FETCHING_ERROR":
//             return{
//                 ...state,
//                 todosLoadingStatus:'error'
//             }
//         case "TODOS_CREATED":
//             return{
//                 ...state,
//                 todos: [...state.todos, action.payload]
//             }
//         case "TODOS_DELETED":
//             return{
//                 ...state,
//                 todos: state.todos.filter(item => item.id !== action.payload)
//             }
//         default:
//             return state
//     }
// }

export default todos