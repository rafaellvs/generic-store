import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from 'src/assets/images/logo.png'

import CartContext from 'src/helpers/cart-context'

import Link from 'src/components/core/Link'

import {
  Container,
  Logo,
  Links,
  CartLink
} from './styled'

const Header = () => {
  const { cartProducts } = useContext(CartContext)
  const totalProductsAtCart = cartProducts.length

  return (
    <Container>
      <Link to='/'>
        <Logo src={logo} alt='Liven Logo' />
      </Link>

      <Links>
        <Link to='/shopping-list'>Shopping List</Link>

        <CartLink to='/cart'>
          <AiOutlineShoppingCart />
          {`Cart (${totalProductsAtCart})`}
        </CartLink>
      </Links>
    </Container>
  )
}

export default Header
