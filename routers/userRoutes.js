import express from 'express';
import { COMMON_ROUTES, USER_ROUTES } from '../constants/routes.js';
import * as controller from '../controllers/userController.js';

export const uRouter = express.Router();

uRouter.get(COMMON_ROUTES.BASE_ROUTE, controller.getUsers );

uRouter.post(USER_ROUTES.ADD_NEW, controller.addUser);

uRouter.patch(USER_ROUTES.UPDATE,controller.updateUser); 

uRouter.delete(USER_ROUTES.DELETE,controller.deleteUser);

uRouter.get(USER_ROUTES.GET_DETAILS,controller.getUserDetails);
