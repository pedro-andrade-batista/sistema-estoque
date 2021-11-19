import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  position: absolute;
  padding: 2rem 3rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  margin: 0 2rem;

  background: transparent;
  border: none;
  color: white;

  :hover {
    cursor: pointer;
    color: rgba(0, 0, 255, 0.8);
  }
`
