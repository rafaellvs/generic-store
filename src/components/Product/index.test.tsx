import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Product from 'src/models/product'
import ProductComponent from '.'

const mockProduct: Product = {
  id: 1,
  name: 'Mocked product',
  image: 'https://linktoimage.com',
  price: '200',
  stock: 1234,
  createdAt: new Date()
}

test('check for product name', () => {
  render(
    <ProductComponent product={mockProduct} />
  )

  const productName = screen.getByText(mockProduct.name)
  expect(productName).toBeInTheDocument()
})

test('check if Add to cart button fires Swal alert', () => {
  render(
    <ProductComponent product={mockProduct} />
  )

  const buttonElement = screen.getByRole('button')
  userEvent.click(buttonElement)

  const dialogElement = screen.getByRole('dialog')
  expect(dialogElement).toBeInTheDocument()
})

test('check Swal alert success message', () => {
  render(
    <ProductComponent product={mockProduct} />
  )

  const dialogElement = screen.getByText(`The product ${mockProduct.name} was successfully added to your cart.`)
  expect(dialogElement).toBeInTheDocument()
})

test('check if Swal alert is gone after clicking the "ok" button', () => {
  // scrollTo throwing a 'Not implemented' error
  window.scrollTo = jest.fn()

  render(
    <ProductComponent product={mockProduct} />
  )

  const okButton = screen.getByRole('button', { name: 'OK' })
  userEvent.click(okButton)

  const dialogElement = screen.queryByRole('dialog')
  expect(dialogElement).toBeNull()
})
