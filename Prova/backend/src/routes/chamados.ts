import express from 'express';
import ChamadoController from '../controllers/ChamadoController.js';

const route = express.Router();

    route
        .post('/create', ChamadoController.create)
        .get('/show', ChamadoController.show)
        .get('/show/:id', ChamadoController.showById)
        .put('/update/:id', ChamadoController.update)
        .delete('/delete/:id', ChamadoController.delete)

        route.patch('/start/:id', ChamadoController.start)
        route.patch('/finish/:id', ChamadoController.finish)

export default route;