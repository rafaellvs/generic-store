import React from 'react'

import Product from 'src/models/product'

import Text from 'src/components/core/Text'
import Button from 'src/components/core/Button'

import { Container, Image, AvailableText } from './styled'

type ProductProps = {
  product: Product
}

const ProductComponent = ({ product }: ProductProps) => {
  return (
    <Container>
      <Image src='https://picsum.photos/200' alt={`${product.name} reference image`} />

      <Text type='h4'>
        {product.name}
      </Text>

      <Text type='p' padding='10px 0'>
        {`US$ ${product.price}`}
      </Text>

      <AvailableText>
        {product.stock
          ? `Available - ${product.stock} in stock`
          : 'Unavailable'
        }
      </AvailableText>

      <Button type='button'>
        Add to cart
      </Button>
    </Container>
  )
}

export default ProductComponent
