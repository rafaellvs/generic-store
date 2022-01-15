import styled from 'styled-components'
import theme from 'src/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${theme.colors.primary};
`

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;  
  padding: calc(16px + ${theme.navbarHeight}) 32px;

  @media (max-width: 480px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`
