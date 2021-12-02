import  Orders from '../models/order.js';
import mongoose from 'mongoose';
const db=mongoose.connection;
export const  getOrders = async()=>{ //METHOD TO GET Orders FROM DATABASE
    try {
        const restaurant = await db.collection('restaurants').findOne({"restaurantName":"PR"});
        const orders=restaurant.orders;
        let e=[];
        orders.forEach(element=>{
           e.push(element);
        });
        return e;
         
    } catch (error) {
        console.log(error);
        return err;
    }

}

export const addOrder= async(order)=>{ //METHOD TO POST TASKS INTO DATABASE
    try{
        const filter={"restaurantName":"PR"};
        const update={ $push: { orders: order } };
        const restaurant=await db.collection('restaurants').findOneAndUpdate(filter, update, {
            new: true
          });
       // console.log(restaurant);
        
        return restaurant;
        //res.status(201).json(newTask)
    }catch(err){
        console.log(err);
        return err;
        
        //res.status(400).json({message:err.message})
    }
}

export const updateOrder=async (update,id)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
         
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"restaurantName":"PR","orders.oId":id}
        ,{
        $set:{
            "orders.$.orderItems":update.orderItems,
            "orders.$.orderTime":update.orderTime,
            "orders.$.orderTotal":update.orderTotal,
            "orders.$.customerName":update.customerName,
            "orders.$.customerContactNo":update.customerContactNo,
            "orders.$.customerEmail":update.customerEmail,
            "orders.$.isComplete":update.isComplete,
        }
    }
        ,{new:true});
return restaurant;
}
catch(err){console.log(err);return err;}


}

export const deleteOrder=async(id)=>{//METHOD TO GET DELETE INTO DATABASE
    try{
        const order= await Orders.Order.findByIdAndDelete(id) //findOneAndRemove IS A MONGOOSE METHOD TO DELETE ITEM IN DB
    }catch(err){

    }
 
    }

export const getOrderDetails=async(id)=>{
    try{
        const restaurant = await db.collection('restaurants').findOne({"restaurantName":"PR"});
        const orders=restaurant.orders;
        let e={};
        orders.forEach(element=>{
            if(element.oId===id){
                console.log(element);
                    e=element;
                  
            }
        });
        return e;
         
    }
    catch(e){
        console.log(e);
return e;
    }
}

export const updateOrderStatus=async (isComplete,id)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
         
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"restaurantName":"PR","orders.oId":id}
        ,{
        $set:{
            "orders.$.isComplete":isComplete,
        }
    }
        ,{new:true});
return restaurant;
}
catch(err){console.log(err);return err;}


}