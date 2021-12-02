import  LeftOverItem from '../models/leftoverItem.js';
import mongoose from 'mongoose';

const db=mongoose.connection;
const filterCriteria="rId";

export const  getLeftoverItems = async()=>{ //METHOD TO GET TASKS FROM DATABASE
    try {
        const leftOverDetails = await db.collection('restaurants').findOne({filterCriteria:"PR"});
        const menu=leftOverDetails.leftover;
        let e=[];
        menu.forEach(element=>{
           e.push(element);
        });
        return e;
         
    } catch (error) {
        
    }
}

/**
 * Test description
 * @param {MenuItem} menuItem 
 * @returns 
 */
export const addLeftover= async(leftoverItem,restaurantName)=>{ //METHOD TO POST Leftover INTO DATABASE
    try{
        const filter={"restaurantName":"PR"};
console.log(leftoverItem.lId);
        const update={ $push: { leftover: leftoverItem } };
        const restaurant=await db.collection('restaurants').findOneAndUpdate(filter, update, {
            new: true
          });
       // console.log(restaurant);
        
        return restaurant;

        //res.status(201).json(newTask)
    }catch(err){
        console.log(err);return err;
    }
}

export const updateLeftover=async (update,id)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"restaurantName":"PR","leftover.lId":id}
        ,{
        $set:{
            "leftover.$.items":update.items,
            "leftover.$.postedTime":update.postedTime,
            "leftover.$.quantity":update.quantity,
            "leftover.$.reducedPrice":update.reducedPrice,
          
        }
    }
        ,{new:true});

return restaurant;
}
catch(err){
console.log(err);
    return err;
}

}

export const deleteLeftover=async(id)=>{//METHOD TO GET DELETE INTO DATABASE
    try{
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"restaurantName":"PR","leftover.lId":id}
        ,
            { $pull: { leftover: { lId: id } } }
        ,{new:true});


        return restaurant;
       
    }catch(err){
        return err;
    }
 
    }


export const getLeftoverDetails=async(id)=>{
    try{
        const leftOverDetails = await db.collection('restaurants').findOne({"restaurantName":"PR"});
        const menu=leftOverDetails.leftover;
        let e={};
        menu.forEach(element=>{
            console.log(""+element.lId+""+id);
            if(element.lId===id){
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