import React from 'react'

import logo from 'src/assets/images/logo.png'

import { Container, Logo } from './styled'

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt='Liven Logo' />
    </Container>
  )
}

export default Header
