import styled from 'styled-components'
import theme from 'src/helpers/theme'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  padding: 16px;

  p, h4 {
    color: ${theme.colors.black};
  }

  @media (max-width: 480px) {
    grid-template-columns: 150px 1fr;
  }
`

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  align-items: center;

  @media(max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
  padding-right: 20px;

  @media (max-width: 480px) {
    height: 150px;
  }
`

export const RemoveProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span, svg {
    transition: color 0.3s fill 0.3s;
  }

  span {
    color: ${theme.colors.red};
  }

  svg {
    fill: ${theme.colors.red};
  }

  :hover {
    cursor: pointer;

    span {
      color: ${theme.colors.darkRed};
    }

    svg {
      fill: ${theme.colors.darkRed};
    }
  }

  @media(max-width: 480px) {
    flex: 1;
    align-items: flex-end;
  }
`

export const Hr = styled.hr`
  width: calc(100% - 32px);
  border-color: rgba(146, 150, 150, 0.5);
  border-width: 1px;
  border-top: none;
  transform: translateX(-50%);
  margin-left: 50%;
`
