import * as menuItemService from '../services/menuItemService.js'
import MenuItem from  '../models/menuItem.js'

export const getMenuItems =(req,res)=>{
    const resolve = (tasks)=>{
        res.status(200)
        res.json(tasks)
    }
    menuItemService.getMenuItems().then(resolve)
}

export const addMenuItem =(req,res)=>{
    const resolve = (newTask)=>{
        res.status(200)
        res.json(newTask)
    }
  
    const item = new MenuItem({
        mId: req.body.mId,
        itemName :req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemDescription: req.body.itemDescription,
        itemImage:req.body.itemImage,
        itemIsVegetarian:req.body.itemIsVegetarian,
        itemPortionSize: req.body.itemPortionSize,
        itemCalories: req.body.itemCalories
    })
    menuItemService.addnewItem(item).then(resolve)
}

export const updateMenuItem=(req,res)=>{
    const resolve = (updatedTask)=>{
        res.status(200)
        res.json(updatedTask)
    }
    
    const filterByItemId = req.body.mId;
    const update={
        itemName :req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemDescription: req.body.itemDescription,
        itemImage:req.body.itemImage,
        itemIsVegetarian:req.body.itemIsVegetarian,
        itemPortionSize: req.body.itemPortionSize,
        itemCalories: req.body.itemCalories
    }

    menuItemService.updateItem(update,filterByItemId).then(resolve)
}

export const deleteMenuItem=(req,res)=>{
    const deleteByItemId = req.body.mId;
    const resolve = (docs)=>{
        res.status(200);
        res.json({docs});
    }
    menuItemService.deleteItem(deleteByItemId).then(resolve)
}

export const getMenuItemDetails=(req,res)=>{
    const id=req.params.id;
    const resolve = (docs)=>{
        res.status(200);
        res.json({docs});
    }
    menuItemService.getMenuItemDetails(id).then(resolve)
}