import express from 'express'

// Controllers
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
const routes = express.Router()

// Instância das controllers
const pointsController = new PointsController();
const itemsController = new ItemsController();

// ROTAS
routes.get('/items', itemsController.index)
routes.post('/points', pointsController.create )
routes.get('/points/', pointsController.index )
routes.get('/points/:id', pointsController.show )


export default routes;