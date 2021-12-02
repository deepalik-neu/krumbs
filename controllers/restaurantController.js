import * as restaurantService from '../services/restaurantService.js'
import Restaurant from  '../models/restaurant.js'

export const getRestaurants =(req,res)=>{
    const resolve = (restaurants)=>{
        res.status(200)
        res.json(restaurants)
    }
    restaurantService.getRestaurants().then(resolve)
}

export const addRestaurant =(req,res)=>{
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs)
    }
    const restaurant = new Restaurant({
        restaurantId:req.body.restaurantId,
        restaurantName: req.body.restaurantName,
        restaurantLocation :req.body.restaurantLocation,    
        restaurantStatus: req.body.restaurantStatus,
        restaurantImage: req.body.restaurantImage,
    })
    restaurantService.addRestaurant(restaurant).then(resolve)
}

export const updateRestaurant=(req,res)=>{
    const resolve = (updatedRestaurant)=>{
        res.status(200)
        res.json(updatedRestaurant)
    }
    
    const restaurant = new Restaurant({
        restaurantName: req.body.restaurantName,
        restaurantLocation :req.body.restaurantLocation,    
        restaurantStatus: req.body.restaurantStatus,
        restaurantImage: req.body.restaurantImage,
    })
    const filterByItemId = {id:req.params.restaurantId}
 
    
    restaurantService.updateRestaurant(restaurant,filterByItemId).then(resolve)
}

export const deleteRestaurant=(req,res)=>{
    const restaurantId = req.params.restaurantId
   
    const resolve = (docs)=>{
        res.status(200)
        res.json({"message":"Restaurant deleted successfully"})
    }
    restaurantService.deleteRestaurant(restaurantId).then(resolve)
}

export const getRestaurantDetails=(req,res)=>{
    const restaurantId=req.params.restaurantId;

    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    restaurantService.getRestaurantDetails(restaurantId).then(resolve)
}
 