import  MenuItem from '../models/menuItem.js';
import mongoose from 'mongoose';

const db=mongoose.connection;
export const  getMenuItems = async()=>{ //METHOD TO GET TASKS FROM DATABASE
    try {
        const restaurant = await db.collection('restaurants').findOne({"restaurantName":"PR"});
        const menu=restaurant.menu;
        let e=[];
        menu.forEach(element=>{
           e.push(element);
        });
        return e;
         
    } catch (error) {
        console.log(error);
        return err;
    }


}

 


/**
 * Test description
 * @param {MenuItem} menuItem 
 * @returns 
 */
export const addnewItem= async(menuItem,restaurantName)=>{ //METHOD TO POST TASKS INTO DATABASE
    try{
        const filter={"restaurantName":"PR"};
        const update={ $push: { menu: menuItem } };
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

export const updateItem=async (update,id)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
        const filterMenu={"menu._id":"61a71eea3bf03a749ad82751"};
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"restaurantName":"PR","menu.mId":id}
        ,{
        $set:{
            "menu.$.itemName":update.itemName,
            "menu.$.itemPrice":update.itemPrice,
            "menu.$.itemDescription":update.itemDescription,
            "menu.$.itemImage":update.itemImage,
            "menu.$.itemIsVegetarian":update.itemIsVegetarian,
            "menu.$.itemPortionSize":update.itemPortionSize,
            "menu.$.itemCalories":update.itemCalories,
        }
    }
        ,{new:true});
        // const menu=restaurant.menu;
        // menu.forEach(element => {
        //     if(element._id===id){
        //         element=update;
        //         db.save(element);
        //     }
        // });
       /* const restaurant= await db.collection('restaurants').findOneAndUpdate(filter, 
            {$set: 
                
                    {$filter:
                        {input:
                            {menu},condition:
                                {"_id":id}
                            }
                        }}
        , {new:true});*/
        //const updatedMenuItem= await db.collection('restaurants').findOneAndUpdate(filter,update,{new:true});
        

       // const updatedItem= await restaurant.findOneAndUpdate(id,update,{new:true});
return restaurant;
}
catch(err){console.log(err);return err;}

}









export const deleteItem=async(id)=>{ 
    try{ 
        const restaurant= await db.collection('restaurants').findOneAndUpdate({"restaurantName":"PR","menu.mId":id}
        ,
            { $pull: { menu: { mId: id } } }
        ,{new:true});


        return restaurant;
        
       // const menu= await MenuItem.MenuItem.findOneAndRemove(id) //findOneAndRemove IS A MONGOOSE METHOD TO DELETE ITEM IN DB
    }catch(err){
        console.log(err);
return err;
    }
 
    }

    export const getMenuItemDetails=async(id)=>{
        try{
            const restaurant = await db.collection('restaurants').findOne({"restaurantName":"PR"});
            const menu=restaurant.menu;
            let e={};
            menu.forEach(element=>{
                if(element.mId===id){
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