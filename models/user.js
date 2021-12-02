 
import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
   
    uId:{
        type: 'String',required: true
    }
    ,
    userName :{
        type: 'String',required: true
    }, 
    userAlias:{
        type: 'String',required: false
    }, 
    userPassword:{
        type: 'String',required: true, 
    }, 
    userRestaurant:{
        type: 'String',required: true
    },
    userIsAdmin:{
        type: 'Boolean',required: true
    }
})
//test
const User=mongoose.model('User',userSchema)

export default User;
