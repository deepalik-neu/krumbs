import  User from '../models/user.js';

export const  getUsers = async()=>{ //METHOD TO GET TASKS FROM DATABASE
    const userItems= await User.find() 
    return userItems;
}

/**
 * Test description
 * @param {MenuItem} menuItem 
 * @returns 
 */
export const addUser= async(user)=>{ //METHOD TO POST User INTO DATABASE
    try{
        const  newUser = await user.save()// save IS A MONGOOSE METHOD TO POST User INTO DATABASE
        return newUser
        //res.status(201).json(newTask)
    }catch(err){
        return err;
        //res.status(400).json({message:err.message})
    }
}

export const updateUser=async (update,id)=>{ //METHOD TO GET UPDATE INTO DATABASE
    try
    {
        const updatedUser= await User.findOneAndUpdate(id,update,{
    new: true
  })//findOneAndUpdate IS A MONGOOSE METHOD TO UPDATE ITEM IN DB
return updatedUser
}
catch(err){
   
    return err;
}

}

export const deleteUser=async(id)=>{//METHOD TO GET DELETE INTO DATABASE
    
    try{
        const menu= await User.findOneAndRemove({"user.uId":id}) //findOneAndRemove IS A MONGOOSE METHOD TO DELETE ITEM IN DB
        console.log(menu);
    }catch(err){
  
    return err;
    }
 
    }


export const getUserDetails=async(id)=>{
    try{
        const UserDetails = await User.findOne({"user.uId":id});
        return UserDetails;
    }
    catch(err){
    
        return err;
    }
}