// External Libraries
import React from 'react'

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
    </>
  )
}

export default Car
