import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 700px;
  height: 300px;

  align-self: center;
  justify-self: center;

  background: #222222;
  border-radius: 15px;

  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  padding: 3rem;
`

export const Column = styled.div`
  & > img {
    width: 300px;
    height: 200px;
    border-radius: 15px;
  }

  & > h3 {
    margin-bottom: 2rem;
  }

  & > h4 {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }
`
