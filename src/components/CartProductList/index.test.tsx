import React from 'react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import CartContext from 'src/helpers/cart-context'
import Product from 'src/models/product'
import CartProductList from '.'

const mockProduct: Product = {
  id: 1,
  name: 'Mocked product',
  image: 'https://linktoimage.com',
  price: '200',
  stock: 1234,
  createdAt: new Date()
}

const mockContext = (products: Product[]) => ({
  cartProducts: products,
  setCartProducts: () => {},
  isSyncing: false
})

test('check if cart is empty with no products', () => {
  render(
    <CartContext.Provider value={mockContext([])}>
      <CartProductList />
    </CartContext.Provider>,
    { wrapper: MemoryRouter }
  )

  const textElement = screen.getByRole('heading')
  expect(textElement).toHaveTextContent(/looks like your cart is empty/i)
})

test('check if cart has the products contained in "cartProducts', () => {
  render(
    <CartContext.Provider value={mockContext([mockProduct])}>
      <CartProductList />
    </CartContext.Provider>,
    { wrapper: MemoryRouter }
  )

  const textElement = screen.getByRole('heading', { name: mockProduct.name })
  expect(textElement).toBeInTheDocument()
})

test('check if total purchase value is the correct amount', () => {
  render(
    <CartContext.Provider value={mockContext([mockProduct, mockProduct])}>
      <CartProductList />
    </CartContext.Provider>,
    { wrapper: MemoryRouter }
  )

  const textElement = screen.getByText(/total:/i)
  expect(textElement).toHaveTextContent(/400/)
})
