import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'

import Product from 'src/models/product'
import CartContext from 'src/helpers/cart-context'
import { removeProductFromLocalStorage } from 'src/helpers/utils'

import Text from 'src/components/core/Text'

import {
  Container,
  ProductInfo,
  Image,
  RemoveProduct,
  Hr
} from './styled'

type CardProductProps = {
  product: Product
  index: number
}

const CartProduct = ({ product, index }: CardProductProps) => {
  const { cartProducts, setCartProducts } = useContext(CartContext)

  const removeProduct = (): void => {
    const products = cartProducts.filter((_, i) => i !== index)
    setCartProducts(products)
    removeProductFromLocalStorage(product)
  }

  return (
    <>
      <Container>
        <Image src='https://picsum.photos/200' alt={`${product.name} reference image`} />

        <ProductInfo>
          <Text type='h4' align='left'>
            {product.name}
          </Text>

          <Text type='p' padding='10px 0'>
            {`US$ ${product.price}`}
          </Text>

          <RemoveProduct onClick={removeProduct}>
            <BsFillTrashFill />
            <Text type='span'>Remove</Text>
          </RemoveProduct>
        </ProductInfo>
      </Container>

      <Hr />
    </>
  )
}

export default CartProduct
