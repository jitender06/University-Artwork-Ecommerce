import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Footer from './Footer/Footer'

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