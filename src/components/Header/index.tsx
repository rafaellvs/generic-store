import React, { useState } from 'react'

import logo from 'src/assets/images/logo.png'

import Link from 'src/components/core/Link'
import CartLink from './CartLink'
import MobileMenu from './MobileMenu'

import {
  Container,
  Logo,
  Links,
  MenuIcon
} from './styled'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Container>
      <Link to='/'>
        <Logo src={logo} alt='Liven Logo' />
      </Link>

      <div onClick={toggleMenu}>
        <MenuIcon />
      </div>

      <Links>
        <Link to='/store'>Store</Link>
        <CartLink />
      </Links>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </Container>
  )
}

export default Header
