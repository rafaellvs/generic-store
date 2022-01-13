import axios from 'axios'

import Product from 'src/models/product'

const BASE_URL = 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'
export const ITEM_LIMIT = 9

export const getProducts = async (page: number): Promise<Product[]> => {
  const response = await axios.get(BASE_URL, {
    params: {
      page: page,
      limit: ITEM_LIMIT
    }
  })

  return response.data
}
