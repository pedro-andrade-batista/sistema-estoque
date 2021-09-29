/* eslint-disable space-before-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import { Request, Response } from 'express'
import { Connect, Query, SaveCar } from '../config/dbConfig'

import { Car } from '../models/Cars'

class CarsController {
    public index (req: Request, res: Response): Response{
        const cars: Car[] = [
            {
                name: 'Teste',
                year: 2000
            },
            {
                name: 'Teste2',
                year: 2020
            }
        ]

        return res.send(cars)
    }

    public teste (req: Request, res: Response): Response {
        const query = 'SELECT * FROM cars'
        let isError = false
        Connect()
        .then(connection => {
            Query(connection, query)
            .then(results => {
                res.status(200).json({ results })
            })
            .catch(() => {
                isError = true
            })
            .finally(() => {
                connection.end()
            })
        })
        .catch(() => {
            isError = true
        })

        if (isError){
            res.status(500).json('Error')
        }
    }

    public registerCar (req: Request, res: Response): void {
        const newCar: Car = req.body
        let hasError = false
        const query = 'insert into cars values = ?'
        Connect()
        .then(connection => {
            SaveCar(connection, newCar, query)
            .then(result => {
                res.status(201).json('Objeto Criado')
            })
            .catch(() => {
                hasError = true
            })
            .finally(() => {
                connection.end()
            })
        })
        .catch(() => {
            hasError = true
        })

        if (hasError){
            res.status(500).json('Error')
        }
    }
}

export default new CarsController()
