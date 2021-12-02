 
import mongoose from 'mongoose'
const restaurantSchema = new mongoose.Schema({
    rId:{
        type:'String',required: true
    },
    restaurantName :{
        type: 'String',required: true
    }, 
    restaurantLocation :{
        type: 'String',required: true
    }, 
    restaurantStatus :{
        type: 'Boolean',required:true
    },
    restaurantImage :{
        type:'String', required:true    
    },
    menu:{
        type:'Array'
    },
    leftover:{
        type:'Array'
    },
    orders:{
        type:'Array'
    }
})
//test
const Restaurant=mongoose.model('Restaurant',restaurantSchema)

export default Restaurant;
