import styled from 'styled-components'
import theme from 'src/helpers/theme'

export const Container = styled.div`
  background-color: ${theme.colors.white};
  border-left: 10px solid ${theme.colors.red};
  padding: 32px;
  
  h2, p {
    color: ${theme.colors.darkRed};
  }
`
