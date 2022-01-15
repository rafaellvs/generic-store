import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import CartContext from 'src/helpers/cart-context'

import { Link } from './styled'

const CartLink = () => {
  const { cartProducts } = useContext(CartContext)
  const totalProductsAtCart = cartProducts.length

  return (
    <Link to='/cart'>
      <AiOutlineShoppingCart />
      {`Cart (${totalProductsAtCart})`}
    </Link>
  )
}

export default CartLink
