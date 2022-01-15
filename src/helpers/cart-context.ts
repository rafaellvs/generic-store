import React, { createContext } from 'react'

import Product from 'src/models/product'

type CartContextType = {
  cartProducts: Product[],
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>
  isSyncing: boolean
}

const CartContext = createContext<CartContextType>({
  cartProducts: [],
  setCartProducts: () => {},
  isSyncing: false
})

export default CartContext
