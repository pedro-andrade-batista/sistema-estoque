// External Libraries
import React from 'react'
import Head from 'next/head'
import { TextField, Button } from '@material-ui/core'

// Stylization
import * as Styled from './styles'

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>

      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Column>
            <Styled.Content>
              <Styled.Title>
                <h1>Bem-vindo ao Sistema de Estoque de Veículos</h1>
              </Styled.Title>

              <Styled.Login>
                <TextField
                  fullWidth
                  className="textfield"
                  id="outlined-basic"
                  label="E-mail"
                  variant="filled"
                />

                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Senha"
                  variant="filled"
                />

                <Button fullWidth variant="contained" color="primary">
                  Login
                </Button>
              </Styled.Login>

              <h4>
                Não possui conta? <a href="/register">clique aqui!</a>
              </h4>
            </Styled.Content>
          </Styled.Column>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  )
}

export default Login
