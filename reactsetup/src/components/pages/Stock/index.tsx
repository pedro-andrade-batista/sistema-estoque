// External Libraries
import React from 'react'
import Head from 'next/head'
import { Modal } from '@material-ui/core'

// Components
import Car from '../Car'

// Stylization
import * as Styled from './styles'

// Data
import { carList } from '../../../utils/carList'

const Stock: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
                <tr>
                  <Car
                    key={key}
                    make={car.make}
                    model={car.model}
                    price={car.price}
                    year={car.year}
                    horsepower={car.horsepower}
                  />
                  <td>
                    <Styled.Button onClick={handleOpen}>
                      <Styled.Dot />
                      <Styled.Dot />
                      <Styled.Dot />
                    </Styled.Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Styled.Table>

          <Modal open={open} onClose={handleClose} className="modal">
            <Styled.ModalContainer>
              <Styled.ModalContent>
                <h3>Name</h3>
                <h4>marca</h4>
                <h4>valor</h4>
                <h4>modelo</h4>
              </Styled.ModalContent>
            </Styled.ModalContainer>
          </Modal>
        </Styled.Content>
      </Styled.Container>
    </>
  )
}

export default Stock
