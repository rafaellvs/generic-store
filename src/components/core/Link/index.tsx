import styled from 'styled-components'
import { Link } from 'react-router-dom'

import theme from 'src/helpers/theme'

const CoreLink = styled(Link)`
  color: ${theme.colors.secondary};
  transition: color 0.3s;

  :hover {
    color: ${theme.colors.secondaryHover};
  }
`

export default CoreLink
