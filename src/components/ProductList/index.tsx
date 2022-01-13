import React, { useState, useEffect } from 'react'

import Product from 'src/models/product'
import { getProducts, ITEM_LIMIT } from 'src/helpers/api'

import ProductComponent from 'src/components/Product'
import Loading from 'src/components/Loading'
import Error from 'src/components/Error'

import { Container, Products, LoadMore } from './styled'

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [resultsOver, setResultsOver] = useState<boolean>(true)

  const fetchProductList = () => {
    setIsLoading(true)
    setError(false)

    getProducts(page)
      .then(res => {
        setResultsOver(res.length < ITEM_LIMIT)
        setPage(page + 1)

        const mergedProducts = products.concat(res)
        setProducts(mergedProducts)
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchProductList()
  }, [])

  return (
    <Container>
      {isLoading && <Loading />}
      {error && <Error />}

      <Products>
        {
          !!products.length &&
          products.map(product =>
            <ProductComponent key={product.id} product={product} />
          )
        }
      </Products>

      {
        !resultsOver &&
        <LoadMore
          type='button'
          onClick={fetchProductList}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </LoadMore>
      }
    </Container>
  )
}

export default ProductList
