import React from 'react'

import Text from 'src/components/core/Text'
import ProductList from 'src/components/ProductList'

import { Container } from './styled'

const Store = () => {
  return (
    <Container>
      <Text type='h1' padding='0 0 32px 0'>
        Generic Store
      </Text>

      <ProductList />
    </Container>
  )
}

export default Store
