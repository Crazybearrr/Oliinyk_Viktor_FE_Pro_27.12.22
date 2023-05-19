import {Route, Routes} from 'react-router-dom';

import Layout from './components/appLayout/Layout';
import {CatalogePage, DeliveryPage, HomePage, RegisterPage} from './components/pages/importLibrary';

import {Box} from '@mui/material';
import './App.css';

function App() {
 
  return (

    <Box  sx={{
            display:"flex", 
            flexDirection:"column"
          }}>
      <Routes>
        <Route 
          path='/'
          element={<Layout/>}>
            <Route 
              index 
              element={<HomePage/>}/>
            <Route
              path='cataloge'
              element={<CatalogePage/>}/>
            <Route
              path='delivery'
              element={<DeliveryPage/>}/>
            <Route
              path='register'
              element={<RegisterPage/>}/>
            </Route>
      </Routes>
    </Box>
    
  )
}

export default App
