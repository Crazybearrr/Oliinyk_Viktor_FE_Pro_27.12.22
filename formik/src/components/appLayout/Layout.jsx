import {Outlet, Link} from 'react-router-dom';

import {Box, AppBar, Toolbar, Typography} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export default function Layout() {
    return(
        <Box>
            <AppBar 
                component={"nav"} 
                sx={{backgroundColor:"#267c1a"}}>
                <Toolbar    sx={{
                                display:'flex', 
                                justifyContent:'space-around'
                                }}>
                    <HistoryEduIcon sx={{fontSize: '3.5rem'}}/>
                    <Box>

                        <Link 
                            to="/" 
                            style={{
                                textDecoration:"none", 
                                color: '#fff'
                            }}>
                        <Typography 
                            sx={{ mx: 2 }}
                            variant="button"
                            >
                            Home
                        </Typography>
                        </Link>

                        <Link 
                            to="/cataloge" 
                            style={{
                                textDecoration:"none", 
                                color: '#fff'
                            }}>
                        <Typography 
                            sx={{ mx: 2 }}
                            variant="button">
                            Cataloge
                        </Typography>
                        </Link>

                        <Link 
                            to="/delivery" 
                            style={{
                                textDecoration:"none", 
                                color: '#fff'
                            }}>
                        <Typography 
                            sx={{ mx: 2 }}
                            variant="button">
                            Delivery
                        </Typography>
                        </Link>

                        <Link 
                            to="/register" 
                            style={{
                                textDecoration:"none", 
                                color: '#fff'
                            }}>
                        <PersonAddIcon
                            sx={{ mx: 2 }}
                            variant="button"/>
                        </Link>
                        
                    </Box>
                </Toolbar>
            </AppBar>
            <Box 
                component={"main"}
                sx={{
                    p: 3, 
                    width:"80vh", 
                    margin: "0 auto", 
                    display:"flex", 
                    justifyContent:"center"
                }}>
                <Outlet/>
            </Box>
        </Box>
    )
}