import { Router } from 'express';
import UserController from '@controllers/UsersController';

const userController = new UserController();

const userRoutes = Router();
userRoutes.post('/users', userController.create);
userRoutes.get('/users', userController.index);
userRoutes.get('/users/:id', userController.show);
userRoutes.put('/users/:id', userController.update);

export default userRoutes;
