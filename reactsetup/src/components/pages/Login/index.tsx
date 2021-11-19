// External Libraries
import React, { useState } from 'react'
import Head from 'next/head'
import { TextField, Button } from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Stylization
import * as Styled from './styles'
import router from 'next/router'

const Login: React.FC = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const client = {
    email: 'felipe@gmail.com',
    password: '1'
  }

  function login(e) {
    if (emailValue == client.email && passwordValue == client.password) {
      toast.success('Usuário Logado com sucesso!')
      setTimeout(() => {
        router.push('/stock')
      }, 2000)
    } else toast.error('E-mai ou senha incorreto!')
  }

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
                  value={emailValue}
                  onChange={e => setEmailValue(e.target.value)}
                />

                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Senha"
                  variant="filled"
                  type="password"
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={login}
                >
                  Login
                </Button>
              </Styled.Login>

              <h4>
                Não possui conta? <a href="/register">clique aqui!</a>
              </h4>
            </Styled.Content>
          </Styled.Column>
        </Styled.Container>
        <ToastContainer />
      </Styled.Wrapper>
    </>
  )
}

export default Login
