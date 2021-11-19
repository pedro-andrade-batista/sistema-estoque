// External Libraries
import React from 'react'
import { useRouter } from 'next/router'

// Stylization
import * as Styled from './styles'

const Menu: React.FC = () => {
  const router = useRouter()

  return (
    <Styled.Container>
      <Styled.Button onClick={() => router.push('/')}>
        <h1>SGEV</h1>
      </Styled.Button>

      <Styled.Content>
        <Styled.Button onClick={() => router.push('/')}>
          <h3>Login</h3>
        </Styled.Button>

        <Styled.Button onClick={() => router.push('/stock')}>
          <h3>Estoque</h3>
        </Styled.Button>

        <Styled.Button onClick={() => router.push('/register')}>
          <h3>Cadastro</h3>
        </Styled.Button>
      </Styled.Content>

      <Styled.Button onClick={() => router.push('/')}>
        <h3>Logout</h3>
      </Styled.Button>
    </Styled.Container>
  )
}

export default Menu
