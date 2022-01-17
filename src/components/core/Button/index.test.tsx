import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '.'

test('should render a Button', () => {
  render(
    <Button type='button'>Click me</Button>
  )
  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
})

test('check Button text content', () => {
  render(
    <Button type='button'>Click me</Button>
  )
  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toHaveTextContent(/click me/i)
})
