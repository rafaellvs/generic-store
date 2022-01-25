import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import logo from 'src/assets/images/logo.png'

import Link from 'src/components/core/Link'
import Text from 'src/components/core/Text'
import CartLink from 'src/components/Header/CartLink'

import {
  Container,
  MenuContainer,
  CloseIcon,
  Links,
  Logo
} from './styled'

type MobileMenuProps = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  const location = useLocation()

  const closeMenu = (): void =>
    setIsMenuOpen(false)

  useEffect(() => {
    closeMenu()
  }, [location])

  return (
    <Container isMenuOpen={isMenuOpen}>
      <CloseIcon onClick={closeMenu} />

      <MenuContainer>
        <Text type='h1' padding='0 0 16px 0'>
          Generic Store Menu
        </Text>

        <Links>
          <Link to='/store'>Store</Link>
          <CartLink />
        </Links>

        <Link to='/'>
          <Logo src={logo} />
        </Link>
      </MenuContainer>
    </Container>
  )
}

export default MobileMenu
