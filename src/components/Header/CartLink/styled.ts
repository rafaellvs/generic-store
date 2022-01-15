import styled from 'styled-components'

import theme from 'src/helpers/theme'

import CoreLink from 'src/components/core/Link'

export const Link = styled(CoreLink)`
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

  @media (max-width: 480px) {
    padding-top: 10px;
  }
`
