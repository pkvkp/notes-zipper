const jwt = require('jsonwebtoken');

const generateToken = ({email,_id})=>{
 return jwt.sign({_id,email},process.env.JWT_SECRET,{
    expiresIn:'1d',
 })
}

module.exports = {generateToken}