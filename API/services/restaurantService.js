import  Restaurant from '../models/restaurant.js';

export const  getRestaurants = async()=>{ //METHOD TO GET TASKS FROM DATABASE
    const restaurants= await Restaurant.find() 
    return restaurants;
}

/**
 * 
 * @param {*} restaurant 
 * @returns 
 */
export const addRestaurant= async(restaurant)=>{ //METHOD TO POST restaurant INTO DATABASE
    try{
        const  newRestaurant = await restaurant.save()// save IS A MONGOOSE METHOD TO POST restaurant INTO DATABASE
        return newRestaurant
        
    }catch(err){
         return err;
    }
}

export const updateRestaurant=async (update,id)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
        const updatedRestaurant= await Restaurant.Restaurant.findOneAndUpdate(id,update,{
    new: true
  })//findOneAndUpdate IS A MONGOOSE METHOD TO UPDATE ITEM IN DB
return updatedRestaurant
}
catch(err){}
return err;
}

export const deleteRestaurant=async(id)=>{//METHOD TO GET DELETE INTO DATABASE
    try{
        const restaurant= await Restaurant.Restaurant.findOneAndRemove(id) //findOneAndRemove IS A MONGOOSE METHOD TO DELETE ITEM IN DB
    }catch(err){

    }
 
    }


export const getRestaurantDetails=async(id)=>{
    try{
        const RestaurantDetails = await Restaurant.Restaurant.findById(id);
        return RestaurantDetails;
    }
    catch(e){

    }
}