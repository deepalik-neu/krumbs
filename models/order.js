import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
   
    oId:{
        type: 'String',required: true
    }
    ,
    orderItems :{
        type: Array,required: true
    }, 
    orderTime:{
        type: String,
        default: Date.now
    }, 
    orderTotal: {
        type: Number
    },
    customerName:{
        type: 'String',required: true, 
    }, 
    customerContactNo:{
        type: Number,required: true
    },
    customerEmail:{
        type: 'String',required: true
    },
    isComplete:{
        type: Boolean
    }
})
const Order=mongoose.model('Order',orderSchema)

export default Order;