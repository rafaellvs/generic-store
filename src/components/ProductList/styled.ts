import styled from 'styled-components'

import Button from 'src/components/core/Button'

export const Container = styled.div``

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media(max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`

export const LoadMore = styled(Button)`
  width: 100%;
  margin-top: 32px;
`
