import { createGlobalStyle } from 'styled-components'
import theme from 'src/helpers/theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat;
    color: ${theme.colors.white};
  }
`

export default GlobalStyles
