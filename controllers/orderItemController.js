import * as OrderService from '../services/orderService.js'
import Order from  '../models/order.js'

export const getOrders =(req,res)=>{
    const resolve = (tasks)=>{
        res.status(200)
        res.json(tasks)
    }
    OrderService.getOrders().then(resolve)
}

export const addOrder =(req,res)=>{
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs)
    }
    const order = new Order({
        oId: req.body.oId,
        orderItems :req.body.orderItems,    
        orderTime: req.body.orderTime,
        orderTotal: req.body.orderTotal,
        customerName:req.body.customerName,
        customerContactNo:req.body.customerContactNo,
        customerEmail: req.body.customerEmail,
        isComplete: req.body.isComplete
    })
    OrderService.addOrder(order).then(resolve)
}


export const updateOrder=(req,res)=>{
    const resolve = (updatedOrder)=>{
        res.status(200)
        res.json(updatedOrder)
    }
    var orderItems=req.body;
    
    const filterByItemId = req.body.oId;
   
    OrderService.updateOrder(orderItems,filterByItemId).then(resolve)
}

export const deleteOrder=(req,res)=>{
    const orderId = req.params.id
   
    const resolve = (docs)=>{
        res.status(200)
        res.json({"message":"Order deleted successfully"})
    }
    OrderService.deleteOrder(orderId).then(resolve)
}

export const getOrderDetails=(req,res)=>{
    const orderId=req.params.id;

    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    OrderService.getOrderDetails(orderId).then(resolve)
}

export const updateOrderStatus=(req,res)=>{
    const resolve = (updatedOrder)=>{
        res.status(200)
        res.json(updatedOrder)
    }
    const filterByItemId = req.body.oId;
    const isComplete=req.body.isComplete;

    OrderService.updateOrderStatus(isComplete,filterByItemId).then(resolve)
}