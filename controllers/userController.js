import * as userService from '../services/userService.js'
import User from  '../models/user.js'

export const getUsers =(req,res)=>{
    const resolve = (tasks)=>{
        res.status(200)
        res.json(tasks)
    }
    userService.getUsers().then(resolve)
}

export const addUser =(req,res)=>{
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs)
    }
    const user = new User({
        uId:req.body.uId,
        userName: req.body.userName,
        userAlias :req.body.userAlias,    
        userPassword: req.body.userPassword,
        userRestaurant: req.body.userRestaurant,
        userIsAdmin:req.body.userIsAdmin,
    });

    userService.addUser(user).then(resolve)
}

export const updateUser=(req,res)=>{
    const resolve = (updatedOrder)=>{
        res.status(200)
        res.json(updatedOrder)
    }
    var user=req.body;
  
    const filterByItemId = {id:req.body.uId}
 
    
    userService.updateUser(user,filterByItemId).then(resolve)
}

export const deleteUser=(req,res)=>{
    
    const userId = req.body.uId;
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    userService.deleteUser(userId).then(resolve)
}

export const getUserDetails=(req,res)=>{
    const userId=req.params.id;
  
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    userService.getUserDetails(userId).then(resolve)
}
 