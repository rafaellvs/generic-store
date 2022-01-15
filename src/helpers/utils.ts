import Product from 'src/models/product'

const storage = window.localStorage

export const insertProductAtLocalStorage = (index: number, product: Product): void =>
  storage.setItem(index.toString(), product.id.toString())

export const removeProductFromLocalStorage = (product: Product): void => {
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i)

    if (key && storage.getItem(key) === product.id.toString()) {
      storage.removeItem(key)
      break
    }
  }
}

export const clearLocalStorage = (): void =>
  storage.clear()

export const isLocalStorageEmpty = (): boolean =>
  !storage.length

export const getLocalStorageProductIds = (): number[] => {
  const ids: number[] = []

  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i)

    if (key) {
      const productId = storage.getItem(key)
      productId && ids.push(parseInt(productId))
    }
  }

  return ids
}
