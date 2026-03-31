import express from 'express';
import AuthController from '../controllers/AuthController.ts';

const route = express.Router();

route.post('/register', AuthController.register);
route.post('/login', AuthController.login);
route.post('/product', AuthController.product);

export default route;