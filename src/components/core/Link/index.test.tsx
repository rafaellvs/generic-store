import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Link from '.'

test('should render a Link', () => {
  render(
    <Link to='/'>Home</Link>,
    { wrapper: MemoryRouter }
  )
  const linkElement = document.querySelector('a')
  expect(linkElement).toBeInTheDocument()
})

test('check Link text content', () => {
  render(
    <MemoryRouter>
      <Link to='/'>Home</Link>
    </MemoryRouter>
  )
  const linkElement = document.querySelector('a')
  expect(linkElement).toHaveTextContent('Home')
})
