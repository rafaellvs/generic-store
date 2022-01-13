import styled from 'styled-components'
import theme from 'src/helpers/theme'

const Button = styled.button`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.black};
  padding: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  :hover {
    cursor: pointer;
    background-color: ${theme.colors.yellow};
  }

  :disabled {
    background-color: ${theme.colors.gray};
    cursor: wait;
  }
`

export default Button
