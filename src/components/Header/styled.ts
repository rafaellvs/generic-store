import styled from 'styled-components'

import theme from 'src/helpers/theme'

import Link from 'src/components/core/Link'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: ${theme.navbarHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  padding: 16px;
  z-index: 1;
`

export const Logo = styled.img`
  max-height: calc(${theme.navbarHeight} - 32px);
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    padding-right: 16px;
  }
`

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;

  svg {
    fill: ${theme.colors.secondary};
    padding-right: 5px;
    font-size: 1.5rem;
    transition: fill 0.3s;
  }

  :hover svg {
    fill: ${theme.colors.secondaryHover};
  }
`
