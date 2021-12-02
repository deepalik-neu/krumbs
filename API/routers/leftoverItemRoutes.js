import express from 'express';
import { COMMON_ROUTES, LEFTOVER_MENU_ROUTES } from '../constants/routes.js';
import * as controller from '../controllers/LeftoverItemController.js'

export const lRouter = express.Router();

lRouter.get(COMMON_ROUTES.BASE_ROUTE, controller.getLeftoverItems );

lRouter.post(LEFTOVER_MENU_ROUTES.ADD_NEW, controller.addLeftover);

lRouter.patch(LEFTOVER_MENU_ROUTES.UPDATE,controller.updateLeftover);

lRouter.get(LEFTOVER_MENU_ROUTES.GET_DETAILS,controller.getLeftoverDetails);

lRouter.delete(LEFTOVER_MENU_ROUTES.DELETE,controller.deleteLeftover);


// lRouter.route('/leftovers').get(controller.getLeftoverItems)

//     lRouter.route('/leftovers/addnew')
//     .post(controller.addLeftover)

//     lRouter.route('/leftovers/update/:id')
//     .patch(controller.updateLeftover)
 
//     lRouter.route('/leftovers/deleteorder/:id') 
//     .delete(controller.deleteLeftover)

//   lRouter;
