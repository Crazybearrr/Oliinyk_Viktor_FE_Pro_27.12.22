import { Box, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PhotosPage() {

    const [photos, setPhotos] = useState([]);
    const location = useLocation();
    const albumId = new URLSearchParams(location.search).get('albumId');

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res=> res.json())
            .then(data=>setPhotos(data));
    }, [albumId])
    
    return(
        <Box component={"div"}>
            <Typography component={"h1"} sx={{fontSize:"2rem"}}>Photos with album</Typography>
            {photos.map(photo=>(
                <Box key={photo.id}>
                    <Avatar alt={photo.title} src={photo.thumbnailUrl}/>
                </Box>
                ))}
        </Box>    
    )
}