import { Box } from "@mui/material"
import React, { useEffect, useState } from 'react';

const API_KEY = '5d066958a60d315387d9492393935c19';
const CITY = 'Lviv';

export default function About(){
    return(
        <Box sx={{display:"flex", justifyContent:"center" , backgroundColor:"#cae0eb"}}>
            <Box component="span" sx={{color:"black"}}>About page</Box>
        </Box>
    )
}