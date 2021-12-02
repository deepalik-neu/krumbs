import express from 'express';
import { COMMON_ROUTES, ORDER_ROUTES } from '../constants/routes.js';
import * as controller from '../controllers/orderItemController.js';

export const oRouter = express.Router();

oRouter.get(COMMON_ROUTES.BASE_ROUTE, controller.getOrders );

oRouter.post(ORDER_ROUTES.ADD_NEW, controller.addOrder);

oRouter.patch(ORDER_ROUTES.UPDATE,controller.updateOrder); 

oRouter.patch(ORDER_ROUTES.UPDATE_ORDER_STATUS,controller.updateOrderStatus);

oRouter.delete(ORDER_ROUTES.DELETE,controller.deleteOrder);

oRouter.get(ORDER_ROUTES.GET_DETAILS,controller.getOrderDetails);
