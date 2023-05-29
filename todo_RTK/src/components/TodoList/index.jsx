import { useDispatch, useSelector } from "react-redux";
import useHttp from '../../hooks/http.hook'
import TodoListItem from "./components/TodoListItem";
import { useCallback, useEffect } from "react";
import { fetchTodos} from "../../actions";
import { Alert, Box, CircularProgress, Stack } from "@mui/material";

const TodoList =()=>{
    const {todos, todosLoadingStatus} = useSelector(state=>state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(()=>{
        dispatch(fetchTodos(request));
    },[]);


    const onDelete = useCallback((id) =>{
        request(`http://localhost:3001/todos/${id}`, "DELETE")
        .then(res => console.log(res, "Deleted"))
        .then(dispatch('TODOS_DELETED'))
        .catch(error=>console.log(error))
    }, [request])

    if (todosLoadingStatus === "Loading") {
        return (
            <Stack>
                <CircularProgress color="success"/>
            </Stack>    
        )    } else if (todosLoadingStatus === "error"){
        return (
            <Alert severity="error">Oops! Something went wrong while accessing the to-do list.</Alert>
        )
    }

    const renderTodosList = (arr) => {
        if(arr.length === 0){
            return (
                <Alert severity="info">The to-do list is empty.</Alert>
            )
        }

        return arr.map(({id, ...props})=>{
            return <TodoListItem key={id} {...props} onDelete={()=>onDelete(id)}/>
        })
    }

    const element = renderTodosList(todos)
return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor:"#f2f7d5de", 
            padding:"10px", marginTop:"50px", 
            borderRadius:"7px"
        }}>
            {element}
        </Box>
    )
}

export default TodoList