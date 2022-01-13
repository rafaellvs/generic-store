import React from 'react'

import Text from 'src/components/core/Text'
import ProductList from 'src/components/ProductList'

import { Container } from './styled'

const ShoppingList = () => {
  return (
    <Container>
      <Text type='h1' padding='0 0 32px 0'>
        Shopping List
      </Text>

      <ProductList />
    </Container>
  )
}

export default ShoppingList
