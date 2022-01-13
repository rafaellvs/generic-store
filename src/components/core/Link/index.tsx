import styled from 'styled-components'
import theme from 'src/helpers/theme'

const Link = styled.a`
  color: ${theme.colors.secondary};
  transition: opacity 0.3s;

  :hover {
    opacity: 0.7;
  }
`

export default Link
