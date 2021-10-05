import { Router } from 'express'
import UserController from './controllers/carsController'
import ApiController from './controllers/apiController'

const routes = Router()

routes.get('/', UserController.index)
routes.get('/cars', UserController.teste)
routes.get('/teste', ApiController.getAllCarsFromApi)
routes.post('/cars', UserController.registerCar)

export default routes
