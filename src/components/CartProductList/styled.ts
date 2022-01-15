import styled from 'styled-components'
import theme from 'src/helpers/theme'

export const Container = styled.div``

export const CartEmpty = styled.div`
  padding: 32px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    justify-content: center;
  }
`

export const OutterContainer = styled.div`
  display: flex;
  padding: 32px 0;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`

export const Products = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 4px;
  flex: 1;
`

export const PurchaseInfo = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 4px;
  padding: 16px;
  min-width: 250px;
  height: fit-content;
  margin-left: 32px;
  text-align: left;

  h4 {
    text-align: center;
  }

  p, h4 {
    color: ${theme.colors.black};

    span {
      color: ${theme.colors.success};
    }
  }

  button {
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-top: 32px;
    margin-left: 0;
    width: 100%;
  }
`
