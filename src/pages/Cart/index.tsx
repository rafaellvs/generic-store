import React from 'react'

import Text from 'src/components/core/Text'
import CartProductList from 'src/components/CartProductList'

import { Container } from './styled'

const Cart = () => {
  return (
    <Container>
      <Text type='h1' padding='0 0 32px 0'>
        Cart
      </Text>

      <CartProductList />
    </Container>
  )
}

export default Cart
