import express from 'express';
import { COMMON_ROUTES, RESTAURANT_ROUTES } from '../constants/routes.js';
import * as controller from '../controllers/restaurantController.js';

export const rRouter = express.Router();

rRouter.get(COMMON_ROUTES.BASE_ROUTE, controller.getRestaurants );

rRouter.post(RESTAURANT_ROUTES.ADD_NEW, controller.addRestaurant);

rRouter.patch(RESTAURANT_ROUTES.UPDATE,controller.updateRestaurant); 

rRouter.delete(RESTAURANT_ROUTES.DELETE,controller.deleteRestaurant);

rRouter.get(RESTAURANT_ROUTES.GET_DETAILS,controller.getRestaurantDetails);
