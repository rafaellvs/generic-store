import React, { useContext } from 'react'
import Swal from 'sweetalert2'

import theme from 'src/helpers/theme'
import Product from 'src/models/product'
import CartContext from 'src/helpers/cart-context'
import { insertProductAtLocalStorage } from 'src/helpers/utils'

import Text from 'src/components/core/Text'
import Button from 'src/components/core/Button'

import { Container, Image, AvailableText } from './styled'

type ProductProps = {
  product: Product
}

const ProductComponent = ({ product }: ProductProps) => {
  const { setCartProducts } = useContext(CartContext)

  const addProductToCart = (product: Product): void => {
    setCartProducts(cartProducts => {
      insertProductAtLocalStorage(cartProducts.length, product)
      return [...cartProducts, product]
    })

    Swal.fire({
      title: 'Product added!',
      text: `The product ${product.name} was successfully added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: theme.colors.secondary
    })
  }

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
          ? `Available: ${product.stock} in stock`
          : 'Unavailable'
        }
      </AvailableText>

      <Button type='button' onClick={() => addProductToCart(product)}>
        Add to cart
      </Button>
    </Container>
  )
}

export default ProductComponent
