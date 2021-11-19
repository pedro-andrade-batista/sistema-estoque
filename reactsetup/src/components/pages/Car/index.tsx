// External Libraries
import React from 'react'
import { Button } from '@material-ui/core'

// Stylization
import * as Styled from './styles'

interface CarProps {
  make: string
  model: string
  year: number
  quantity: number
  price: number
}

const Car: React.FC<CarProps> = ({ make, model, price, quantity, year }) => {
  return (
    <>
      <Styled.Td quantity={quantity}>{make}</Styled.Td>
      <Styled.Td quantity={quantity}>{model}</Styled.Td>
      <Styled.Td quantity={quantity}>{year}</Styled.Td>
      <Styled.Td quantity={quantity}>{price}</Styled.Td>
      {/* <Styled.Buttons>
        <Button variant="contained" color="primary">
          Editar
        </Button>
        <Button variant="contained" color="secondary">
          Excluir
        </Button>
      </Styled.Buttons> */}
    </>
  )
}

export default Car
