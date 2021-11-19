import styled from 'styled-components'

export const Buttons = styled.td`
  width: 220px;
  & > button {
    margin-right: 0.75rem;
  }
`

interface TdProps {
  quantity: number
}

export const Td = styled.td<TdProps>`
  color: ${props => (props.quantity < 10 ? 'yellow' : 'white')};
`
