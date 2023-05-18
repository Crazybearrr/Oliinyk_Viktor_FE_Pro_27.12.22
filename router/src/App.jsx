import {Routes, Route} from "react-router-dom";

import Layout from "./components/appLayout/Layout";

import {HomePage, AboutPage, UsersPage, PhotosPage, AlbumPage, Footer } from './components/pages/pagesLibrary'
import {Box} from '@mui/material';

export default function App() {
  return (
      <Box sx={{
        display:"flex", 
        flexDirection:"column", 
        height:"auto",
        bgcolor:"#c7ecff8a", 
        maxWidth:"1200px", 
        margin:"0 auto", 
        padding:"70px"
      }}>
        <Routes>
          <Route 
            path="/" 
            element={<Layout/>}
          >
            <Route index element={<HomePage/>}/>
            <Route 
              path="about" 
              element={<AboutPage/>}
            />
            <Route 
              path="users" 
              element={<UsersPage/>}
            />
            <Route path="users/albums" element={<AlbumPage />} />
            <Route path="/photos" element={<PhotosPage />} />
          </Route>
        </Routes>
        <Footer/>
      </Box>
  )
}



