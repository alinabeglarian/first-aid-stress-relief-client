import styled from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em 1em;
  padding: 0.25em 2em;
  text-transform: uppercase

  ${props => props.primary &&`
    background: palevioletred;
    color: white;
  `}
`