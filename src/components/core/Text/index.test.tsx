import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Text from '.'

test('should render a Paragraph', () => {
  render(
    <Text type='p'>Paragraph</Text>
  )
  const textElement = document.querySelector('p')
  expect(textElement).toBeInTheDocument()
})

test('check Paragraph text', () => {
  render(
    <Text type='p'>Paragraph</Text>
  )
  const textElement = document.querySelector('p')
  expect(textElement).toHaveTextContent(/paragraph/i)
})

test('check Paragraph padding prop', () => {
  render(
    <Text type='p' padding='10px'>Paragraph</Text>
  )
  const textElement = document.querySelector('p')
  expect(textElement).toHaveStyle('padding: 10px')
})
