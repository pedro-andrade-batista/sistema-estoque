/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */

import { Request, Response } from 'express'
import { Car } from '../models/Cars'
// import fetch from 'node-fetch'
// const fetch = require("node-fetch");
import https from 'https';

class ApiController {
    public async getAllCarsFromApi (req: Request, res: Response): Promise<Car[]> {
        const urlGetAllCars = 'https://private-489af80-carsapi1.apiary-mock.com/cars'
        // const fetchResponse = await fetch(urlGetAllCars)
        // const json = await fetchResponse.json()
        // console.log(json)
        https.get(urlGetAllCars, (resp) => {
            let data = '';


            resp.on('data', (chunk) => {
                data += chunk;
              });
              resp.on('end', () => {
                console.log(JSON.parse(data));
                res.json(JSON.parse(data))
              });
        })
           
    }
}

export default new ApiController()
