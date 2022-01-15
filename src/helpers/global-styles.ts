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

  html {
    scroll-behavior: smooth;
  }

  .swal2-shown {
    overflow: unset !important;
    padding-right: 0px !important;
  }
`

export default GlobalStyles
