import React, { useContext, useMemo } from 'react'
import Swal from 'sweetalert2'

import theme from 'src/helpers/theme'
import CartContext from 'src/helpers/cart-context'
import { clearLocalStorage } from 'src/helpers/utils'

import Button from 'src/components/core/Button'
import Link from 'src/components/core/Link'
import Text from 'src/components/core/Text'
import CartProduct from 'src/components/CartProduct'
import Loading from 'src/components/Loading'

import {
  Container,
  CartEmpty,
  ButtonContainer,
  OutterContainer,
  Products,
  PurchaseInfo
} from './styled'

const CartProductList = () => {
  const { cartProducts, setCartProducts, isSyncing } = useContext(CartContext)

  const total = useMemo(() =>
    cartProducts.reduce((previousValue, currentProduct) =>
      previousValue + parseFloat(currentProduct.price), 0
    ),
  [cartProducts])

  const removeAllProducts = (): void => {
    setCartProducts([])
    clearLocalStorage()
  }

  const checkout = (): void => {
    Swal.fire({
      title: 'Thank you for shopping at Liven Store!',
      text: 'Your purchase has been registered and will soon be delivered to your home!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: theme.colors.secondary
    })

    setCartProducts([])
  }

  return (
    <Container>
      {isSyncing && <Loading />}

      {!cartProducts.length && !isSyncing &&
        <CartEmpty>
          <Text type='h1'>
            Looks like your cart is empty!
          </Text>
          <Text type='p' padding='10px 0'>
            Make sure to check out our amazing products!
          </Text>

          <Link to='/store'>Go to our store</Link>
        </CartEmpty>
      }

      {!!cartProducts.length &&
        <>
          <ButtonContainer>
            <Button type='button' onClick={removeAllProducts}>
              Remove all products
            </Button>
          </ButtonContainer>

          <OutterContainer>
            <Products>
              {cartProducts.map((product, index) =>
                <CartProduct
                  key={product.id + index}
                  product={product}
                  index={index}
                />
              )}
            </Products>

            <PurchaseInfo>
              <Text type='h4'>
                Your purchase
              </Text>

              <Text type='p' padding='16px 0 0 0'>
                Products: {`US$ ${total.toFixed(2)}`}
              </Text>
              <Text type='p' padding='5px 0 16px 0'>
                Shipping: free of charge
              </Text>

              <hr />

              <Text type='p' padding='16px 0'>
                Total: {`US$ ${total.toFixed(2)}`}
              </Text>

              <Button type='button' onClick={checkout}>
                Checkout
              </Button>
            </PurchaseInfo>
          </OutterContainer>
        </>
      }
    </Container>
  )
}

export default CartProductList
