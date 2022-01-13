import styled from 'styled-components'
import theme from 'src/helpers/theme'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: ${theme.navbarHeight};
  background-color: ${theme.colors.primary};
  padding: 16px;
`

export const Logo = styled.img`
  max-height: 100%;
`
