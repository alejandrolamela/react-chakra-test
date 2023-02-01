
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Menu>
  <MenuButton as={Button} >
    Selecciona la pagina que quieras ver
  </MenuButton>
  <MenuList>
    <Link to='/home'><MenuItem>Home</MenuItem></Link>
    <Link to='/info'><MenuItem>Info</MenuItem></Link>
    <Link to="/login"><MenuItem>Login</MenuItem></Link>

  </MenuList>
</Menu>
  )
}

export default NavBar