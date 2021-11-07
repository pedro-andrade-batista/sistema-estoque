import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
`

export const Table = styled.table`
  width: 1300px;
  border-collapse: collapse;

  thead > tr > td {
    font-weight: bold;
  }

  tr {
    border-bottom: 1px solid white;
  }

  td {
    padding: 0.75rem;
  }
`

export const Button = styled.button`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    div {
      background: yellowgreen;
    }
  }
`

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background: white;
`
