import styled from 'styled-components'
import theme from 'src/helpers/theme'
import { AiFillCloseCircle } from 'react-icons/ai'

type MobileMenuProps = {
  isMenuOpen: boolean
}

export const Container = styled.div<MobileMenuProps>`
  display: none;
  
  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 0;
    left: ${({ isMenuOpen }) => isMenuOpen ? 0 : '100%'};
    width: 100%;
    height: 100vh;
    padding: 16px;
    background: ${theme.colors.primary};
    z-index: 2;
    transition: left 0.3s;
  }
`

export const CloseIcon = styled(AiFillCloseCircle)`
  fill: ${theme.colors.secondary};
  font-size: 2rem;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const MenuContainer = styled.div`
  padding-top: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

export const Links = styled.div`
  text-align: center;
  flex: 1;
`

export const Logo = styled.img`
  width: 200px;
`
