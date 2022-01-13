import styled from 'styled-components'
import theme from 'src/helpers/theme'

export const Container = styled.div`
  text-align: center;
  background: ${theme.colors.white};
  width: 300px;
  padding: 16px;
  margin: 20px;
  border-radius: 4px;
  
  h4, p {
    color: ${theme.colors.black};
  }
`

export const Image = styled.img`
  border-radius: 4px;
  margin-bottom: 10px;
  height: 200px;
`

export const AvailableText = styled.p`
  font-size: 12px;
  color: ${theme.colors.gray};
  padding-bottom: 32px;
`
