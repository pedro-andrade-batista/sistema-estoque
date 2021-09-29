import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  margin: 10rem;
`
