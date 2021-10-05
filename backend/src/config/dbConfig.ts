/* eslint-disable indent */
import mysql from 'mysql'
import { Car } from '../models/Cars'

const params = {
    host: 'localhost',
    user: 'root',
    password: '358900',
    database: 'trabalhoPRJ'
}

const Connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params)

    connection.connect((error) => {
        if (error) {
            reject(error)
            return
        }
        resolve(connection)
    })
})

const Query = async (connection: mysql.Connection, query: string) => new Promise((resolve, reject) => {
    connection.query(query, connection, (error, sucess) => {
        if (error) {
            reject(error)
            return
        }
        resolve(sucess)
    })
})

const SaveCar = async (connection: mysql.Connection, car: Car, query: string) => new Promise((resolve, reject) => {
    console.log(`Query: ${query}`)
    console.log(`Car: ${car}`)
    connection.query(query, car, (error, sucess) => {
        if (error) {
            reject(error)
            return
        }
        resolve(sucess)
    })
})

export { Connect, Query, SaveCar }
