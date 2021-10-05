import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: -1;
  //background-image: url('https://www.verzani.com.br/wp-content/uploads/2020/03/estacionamento-terceirizado.jpg');
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`

export const Column = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 6rem;
`

export const Content = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10rem;
  //background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));

  h4 {
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: #3f51b5;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Title = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  text-align: right;
`

export const Login = styled.div`
  width: 80%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  margin-top: 2rem;

  input {
    color: white;
    border-radius: 5px;
    //background: rgba(28, 28, 28, 0.8);
    border: solid white 2px;
  }

  button {
    background: #8257e6;
  }

  label {
    color: rgb(229, 228, 226, 0.6);
  }
`
