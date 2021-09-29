import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 2rem;
  }

  div {
    margin-bottom: 0.5rem;
  }

  input {
    background: rgba(28, 28, 28, 0.8);
  }

  label {
    color: rgb(229, 228, 226, 0.6);
  }
`

export const Content = styled.div`
  width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
