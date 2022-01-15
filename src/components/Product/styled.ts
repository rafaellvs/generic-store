import styled from 'styled-components'
import theme from 'src/helpers/theme'

export const Container = styled.div`
  text-align: center;
  background: ${theme.colors.white};
  padding: 16px;
  border-radius: 4px;
  
  h4, p {
    color: ${theme.colors.black};
  }

  @media (max-width: 480px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`

export const Image = styled.img`
  height: 200px;
  margin-bottom: 10px;
`

export const AvailableText = styled.p`
  font-size: 12px;
  color: ${theme.colors.gray};
  padding-bottom: 32px;
`
