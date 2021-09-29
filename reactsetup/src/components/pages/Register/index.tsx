// External Libraries
import React from 'react'
import Head from 'next/head'
import { TextField, Button } from '@material-ui/core'

// Stylization
import * as Styled from './styles'

const Register: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Styled.Container>
        <Styled.Content>
          <h1>Cadastro</h1>

          <TextField
            fullWidth
            id="outlined-basic"
            label="Nome Completo"
            variant="outlined"
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Senha"
            variant="outlined"
          />

          <Button fullWidth variant="outlined" color="primary">
            Cadastrar
          </Button>
        </Styled.Content>
      </Styled.Container>
    </>
  )
}

export default Register
