import mongoose from 'mongoose';
// enum portionSize{
// byServing={small:'small',medium:'medium',large:'large'},
// byInches={small:'8',medium:'12',large:'16'},
// byPint={small:'30mL',medium:'60mL',large:'90mL'}
// }
const menuItemSchema = new mongoose.Schema({
   mId:{type:'String',required:true},
    itemName:{
        type: 'String',required: true
    }
    ,
    itemPrice :{
        type: 'Number',required: true
    },
    itemDescription:{
        type: 'String',required: false
    },
    itemImage:{
        type: 'String',required: false,
    },
    itemIsVegetarian:{
        type: 'Boolean',required: true,default: false
    },
    itemPortionSize:{
        type: 'String', 
        required: true
    },
    itemCalories:{
        type: 'Number',required: false
    },
    itemCategory:{
        type: 'String',required: false
    }
})
const MenuItem=mongoose.model('MenuItem',menuItemSchema)

export default MenuItem;