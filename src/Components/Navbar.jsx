import { Box, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../Context/AuthContext/AuthContextProvider'

export default function Navbar() {
  const {loginData} = useContext(authContext)
  
  console.log(loginData)
  return (
    <Box className='navbar' display="flex" justifyContent='space-around' alignItems='center' h="68px" bg="#003B95">
        <Box className='logo'><Link to="/">Booking.com</Link></Box>
        <Box>
            <Link to="#">
                <Image boxSize="24px" src="https://q-xx.bstatic.com/backend_static/common/flags/new/48-squared/in.png" />
            </Link>
        </Box>
    </Box>
  )
}
