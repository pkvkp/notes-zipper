const asyncHanlder = require('express-async-handler')
const User = require('../models/UserModel');
const { generateToken } = require('../utils/generateToken');


const registerController = asyncHanlder(async(req,res)=>{
    const {name,email,password,pic} = req.body;

   const userExist = await User.findOne({email});

   if(userExist){
    res.status(400)
    throw new Error("User Already Existed")
   }

   const user =  await User.create({
    name,
    email,
    password,
    pic
   })

   if(user){
    res.status(201).json({id:user._id,name:user.name,email:user.email,password:user.password,pic:user.pic,token})
   }else{
    res.status(400)
    throw new Error("Error Occured");
   }
})

const loginController = asyncHanlder(async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        const token = generateToken(user)
        res.status(200).json({id:user._id,name:user.name,email:user.email,password:user.password,pic:user.pic,token})
    }else{
        res.status(401)
        throw new Error("Invalid Email or Password")
    }
})

module.exports = {registerController,loginController}