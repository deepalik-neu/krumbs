import mongoose from 'mongoose'
const leftoverSchema = new mongoose.Schema({
    lId:{
        type:'String',required:true
    },
    items: {
         type: 'String', required:true
     },
    postedTime:{
        type: 'String', required: true
    },
    quantity :{
        type: 'String', required: true
    }, 
    reducedPrice:{
        type: 'String', required: false
    }
    
});
const LeftOverItem=mongoose.model('LeftOverItem',leftoverSchema)

export default LeftOverItem;