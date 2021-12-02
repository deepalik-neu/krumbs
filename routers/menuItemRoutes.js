import express from 'express';
import { COMMON_ROUTES, MENU_ITEM_ROUTES } from '../constants/routes.js';
import * as controller from '../controllers/menuItemController.js';

export const mRouter = express.Router();

mRouter.get(COMMON_ROUTES.BASE_ROUTE, controller.getMenuItems );

mRouter.get(MENU_ITEM_ROUTES.GET_DETAILS,controller.getMenuItemDetails);

mRouter.post(MENU_ITEM_ROUTES.ADD_NEW, controller.addMenuItem);

mRouter.patch(MENU_ITEM_ROUTES.UPDATE,controller.updateMenuItem); 

mRouter.delete(MENU_ITEM_ROUTES.DELETE,controller.deleteMenuItem);
