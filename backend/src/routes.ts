import { Router } from 'express'
import UserController from './controllers/carsController'

const routes = Router()

routes.get('/', UserController.index)
routes.get('/cars', UserController.teste)
routes.post('/cars', UserController.registerCar)

export default routes
