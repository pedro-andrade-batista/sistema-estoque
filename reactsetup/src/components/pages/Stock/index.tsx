// External Libraries
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Head from 'next/head'

// Stylization
import * as Styled from './styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

interface StockProps {
  name: string
  price: number
}

const Stock: React.FC<StockProps> = ({ name, price }) => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      <Head>
        <title>Página de Estoque</title>
      </Head>

      <Styled.Container>
        <Styled.Content>
          {numbers.map(n => {
            return (
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Produto{n}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Descrição do produto {n}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Saber mais!</Button>
                </CardActions>
              </Card>
            )
          })}
        </Styled.Content>
      </Styled.Container>
    </>
  )
}

export default Stock
