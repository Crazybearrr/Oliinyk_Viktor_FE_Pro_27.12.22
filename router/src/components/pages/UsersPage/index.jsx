import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUsers(data));
    },[])

    return(
    
        <Box>
            <Typography component={"h1"} sx={{fontSize:"2rem"}}>List Users</Typography>
                {users.map(user=>(
                    <Box key={user.id}>
                        <Box component={"p"} >{user.name}</Box>
                        <Button 
                            component={Link} 
                            to={`albums?userId=${user.id}`}
                            variant="contained"
                            color="primary"
                            sx={{ textDecoration: "none", margin:"5px"}}
                        >
                            Album
                        </Button>
                    </Box>
                ))}
        </Box>
    )
}