import * as leftOverItemService from '../services/leftoverItemService.js'
import LeftOverItem from  '../models/leftoverItem.js'

export const getLeftoverItems =(req,res)=>{
    console.log('TEST');
    // res.send(200);

    const resolve = (tasks)=>{
        res.status(200)
        res.json(tasks)
    }

    const reject = (err) => {
        res.sendStatus(400);
    }
    leftOverItemService.getLeftoverItems().then(resolve).catch(reject)
}

export const addLeftover =(req,res)=>{
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs)
    }
    console.log(req.body.items);
    const leftover = new LeftOverItem({
        lId:req.body.lId,
        items: req.body.items,
        postedTime :req.body.postedTime,    
        quantity: req.body.quantity,
        reducedPrice: req.body.reducedPrice,
    })
    leftOverItemService.addLeftover(leftover).then(resolve)
}

export const updateLeftover=(req,res)=>{
    const resolve = (updatedOrder)=>{
        res.status(200)
        res.json(updatedOrder)
    }
    var items=req.body;
    
    const filterByItemId = req.body.lId;
 
    
    leftOverItemService.updateLeftover(items,filterByItemId).then(resolve)
}

export const deleteLeftover=(req,res)=>{
    const leftoverId = req.body.lId;
   
    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    leftOverItemService.deleteLeftover(leftoverId).then(resolve)
}

export const getLeftoverDetails=(req,res)=>{
    const leftoverId=req.params.id;

    const resolve = (docs)=>{
        res.status(200)
        res.json(docs);
    }
    leftOverItemService.getLeftoverDetails(leftoverId).then(resolve)
}
 