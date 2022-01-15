import React, { useState, useMemo, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Product from 'src/models/product'
import CartContext from 'src/helpers/cart-context'
import { isLocalStorageEmpty, getLocalStorageProductIds } from 'src/helpers/utils'
import { getProduct } from 'src/helpers/api'

import Layout from 'src/components/Layout'
import Router from 'src/components/Router'
import GlobalStyles from 'src/helpers/global-styles'

const App = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([])
  const [isSyncing, setIsSyncing] = useState<boolean>(false)

  const value = useMemo(
    () => ({ cartProducts, setCartProducts, isSyncing }),
    [cartProducts, isSyncing]
  )

  const syncCartWithLocalStorage = async (): Promise<void> => {
    const ids = getLocalStorageProductIds()
    const products = await Promise
      .all(ids.map(id => getProduct(id)))
      .finally(() => setIsSyncing(false))
    setCartProducts(products)
  }

  useEffect(() => {
    if (!isLocalStorageEmpty() && !cartProducts.length) {
      setIsSyncing(true)
      syncCartWithLocalStorage()
    }
  }, [])

  return (
    <CartContext.Provider value={value}>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
