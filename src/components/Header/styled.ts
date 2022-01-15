import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'

import theme from 'src/helpers/theme'

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

  @media (max-width: 480px) {
    display: none;
  }
`

export const MenuIcon = styled(AiOutlineMenu)`
  display: none;
  
  @media (max-width: 480px) {
    display: block;
    fill: ${theme.colors.secondary};
    font-size: 2rem;
  }
`
