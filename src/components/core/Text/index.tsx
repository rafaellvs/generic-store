import React from 'react'
import styled from 'styled-components'

type TextProps = {
  type: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: string
  padding?: string
}

// Factory
const CoreText = ({ type, children, ...restProps }: TextProps) =>
  React.createElement(type, { ...restProps }, children)

// Styled component
const Text = styled(CoreText)`
  padding: ${({ padding }) => padding || 0};
`

export default Text
