const asyncHanlder = require('express-async-handler')
const User = require('../models/UserModel')


const registerController = asyncHanlder(async(req,res)=>{
    const {name,email,password,pic} = req.body;

   const userExist = await User.findOne({email});

   if(userExist){
    res.status(400).json("User Already Existed")
   }

   const user =  await User.create({
    name,
    email,
    password,
    pic
   })

   if(user){
    res.status(201).json({id:user._id,name:user.name,email:user.email,password:user.password,pic:user.pic})
   }else{
    res.status(401).json("Error Occured");
   }
})

module.exports = {registerController}