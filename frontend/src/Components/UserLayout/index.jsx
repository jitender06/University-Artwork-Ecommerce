import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer/Footer'
import { useNavigate } from 'react-router-dom';

function UserLayout({children}) {
  return (
    <Box>
        <Header/>
          {children}
        <Footer/>
    </Box>
  )
}

export default UserLayout