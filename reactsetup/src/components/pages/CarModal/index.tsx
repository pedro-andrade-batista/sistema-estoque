// External Libraries
import React from 'react'
import { Modal } from '@material-ui/core'

// Stylization
import * as Styled from './styles'

interface CarProps {
  make: string
  model: string
  price: number
  year: number
  horsepower: number
  quantity: number
  img_url: string
}

interface ModalProps {
  open: boolean
  onRequestClose(): void
  car?: CarProps
}

const CarModal: React.FC<ModalProps> = ({ open, onRequestClose, car }) => {
  console.log('dentro do modal', car)

  return (
    <Modal open={open} onClose={onRequestClose}>
      <Styled.ModalContainer>
        <Styled.ModalContent>
          <Styled.Column>
            <h3>Marca: {car.make}</h3>
            <h4>Modelo: {car.model}</h4>
            <h4>Preço: {car.price}</h4>
            <h4>Ano: {car.year}</h4>
            <h4>Quantidade: {car.quantity}</h4>
            <h4>Potência: {car.horsepower}</h4>
          </Styled.Column>

          <Styled.Column>
            <img src={car.img_url} />
          </Styled.Column>
        </Styled.ModalContent>
      </Styled.ModalContainer>
    </Modal>
  )
}

export default CarModal
