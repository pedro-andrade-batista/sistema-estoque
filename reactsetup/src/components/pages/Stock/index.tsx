// External Libraries
import React, { useEffect, useState } from 'react'
import Head from 'next/head'

// Components
import Car from '../Car'
import CarModal from '../CarModal'

// Stylization
import * as Styled from './styles'

// Data
import { carList } from '../../../utils/carList'

interface CarProps {
  make: string
  model: string
  price: number
  year: number
  horsepower: number
}

const Stock: React.FC = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // let selectedCar: CarProps
  let [seletedCar, setSelectedCar] = useState(carList[0])

  // const selected = (car: CarProps): void => {
  //   setOpen(true)
  //   selectedCar = car
  //   console.log(selectedCar)
  // }

  useEffect(() => {
    console.log(seletedCar)
  }, [seletedCar])

  return (
    <>
      <Head>
        <title>Página de Estoque</title>
      </Head>

      <Styled.Container>
        <Styled.Content>
          <Styled.Table>
            <thead>
              <tr>
                <td>Marca</td>
                <td>Modelo</td>
                <td>Preço</td>
                <td>Ano</td>
                <td>Potência</td>
                <td>Detalhes</td>
              </tr>
            </thead>
            <tbody>
              {carList.map((car, key) => (
                <tr key={key}>
                  <Car
                    make={car.make}
                    model={car.model}
                    price={car.price}
                    year={car.year}
                    horsepower={car.horsepower}
                  />
                  <td>
                    <Styled.Button
                      onClick={() => {
                        handleOpen()
                        setSelectedCar(car)
                      }}
                    >
                      <Styled.Dot />
                      <Styled.Dot />
                      <Styled.Dot />
                    </Styled.Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Styled.Table>

          <CarModal open={open} onRequestClose={handleClose} car={seletedCar} />
        </Styled.Content>
      </Styled.Container>
    </>
  )
}

export default Stock
