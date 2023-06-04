import { AccordionDetails, Box, Grid, useMediaQuery } from "@mui/material"

export default function AirQuality(){
    const isMobile = useMediaQuery('(max-width: 600px)');
    return(
        <Grid container spacing={1} sx={{backgroundColor:"#cae0eb"}}>
            <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
                <Box>
                    <img
                        src="https://4cair.com/wp-content/uploads/2021/05/Air-Quality-Chart-and-AQI-Ratings.jpg"
                        alt=""
                        className={isMobile ? 'mobile-image' : ''}
                        style={isMobile ? { maxWidth: "100%", width:"100%" } : {width:"100%"}}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}