import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";

export default function AlbumPage() {
    const [albums, setAlbums] = useState([]);
    const location = useLocation();
    const userId = new URLSearchParams(location.search).get('userId');
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.json())
        .then(data => setAlbums(data));
    }, [userId]);
  
    return (
      <Box >
        <Typography component={"h1"} sx={{fontSize:"2rem"}}>List album</Typography>
          {albums.map(album => (
            <Box key={album.id} sx={{marginTop:"20px"}}>
              <Typography component={"p"}>{album.title}</Typography>
              <Button 
                component={Link}
                to={`/photos?albumId=${album.id}`}
                variant="contained"
                color="primary"
                sx={{ textDecoration: "none", margin:"5px"}}
              >
                Photos
              </Button>
            </Box>
          ))}
      </Box>
    );
  };