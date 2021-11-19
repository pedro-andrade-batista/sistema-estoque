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
  flex-direction: column;
`

export const Table = styled.table`
  width: 900px;
  margin-top: 3rem;
  border-collapse: collapse;

  thead > tr > th {
    font-weight: bold;
    text-align: left;
    padding: 0.75rem;
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

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  align-self: flex-end;
`

export const YellowCircle = styled.div`
  width: 10px;
  height: 10px;

  background: yellow;
  border-radius: 10px;
  margin-right: 0.75rem;
`
