// External Libraries
import React from 'react'
import { Button } from '@material-ui/core'

// Stylization
import * as Styled from './styles'

interface CarProps {
  make: string
  model: string
  price: number
  year: number
  horsepower: number
}

const Car: React.FC<CarProps> = ({ make, model, price, year, horsepower }) => {
  return (
    <>
      <td>{make}</td>
      <td>{model}</td>
      <td>{price}</td>
      <td>{year}</td>
      <td>{horsepower}</td>
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
