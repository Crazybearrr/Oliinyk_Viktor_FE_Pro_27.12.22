import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Box,Typography, AppBar, Toolbar,} from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default function Layout() {

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar sx={{ display: 'flex', justifyContent: "space-around", with:"1200px"}} >
          <AccessibilityNewIcon />
          <Box display= "block" >
              <Link  to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="button" sx={{ mx: 2 }}>Home</Typography>
              </Link>

              <Link  to="/about" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="button" sx={{ mx: 2 }}>About</Typography>
              </Link>

              <Link  to="/users" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="button" sx={{ mx: 2 }}>Users</Typography>
              </Link>

              <Link  to="/photos" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="button" sx={{ mx: 2 }}>Photos</Typography>
              </Link>

              <Link  to="users/albums" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="button" sx={{ mx: 2 }}>Album</Typography>
              </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3, width:"80vh", margin: "0 auto", display:"flex", justifyContent:"center"}}>
        <Outlet/>
      </Box>
    </Box>
  );
}