import { Box } from "@mui/material"
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_OPEN_WEATHER_MAP;
const CITY = 'Kiev';

console.log(API_KEY);

export default function Weather(){
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&APPID=${API_KEY}`
          );
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    if (!weatherData) {
      return <div>Loading...</div>;
    }
  
    const { main, name, weather, wind} = weatherData;
    const { description, icon } = weather[0];

    return (
            <Box sx={{mt:1, mb:2, display:"flex", justifyContent:"center", flexDirection:"row"}}>
                <Box sx={{display:"flex", flexDirection: "column-reverse", justifyContent:"center"}}>
                  <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" style={{width:"50%", height:"50%"}}/>
                </Box>
                <Box>
                    <Box component="h5">Weather in {name}</Box>
                    <Box component="p">Temperature: {main.temp}°C</Box>
                    <Box component="p">Pressure: {main.pressure}hPa</Box>
                    <Box component="p">Humidity: {main.humidity}%</Box>
                    <Box component="p">Wind Speed: {wind.speed} m/s</Box>
                    <Box component="p">Wind Direction: {wind.deg}°</Box>
                    <Box component="p">Description: {description}</Box>
                    
                </Box>
                
            </Box>
    );
  };