const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")
// handel errors 
 const handeleroor = (err) =>{
    console.log(err.message , err.sode);
    let errors = {username:'',password:'',email:''}


    // incorect email 
    if (err.message ==='email is incorect') {
        errors.email = 'that email is not registed'
        
    }
     // incorect password
     if (err.message ==='password is incorect') {
        errors.password = 'that password is incorect'
        
    }

    //email is fond in auther user 

    if (err.code === 11000) {
        errors.email = 'this email is fond use other email'
        return errors ;
    }
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message

        });
    }
    return errors ;
 }

/// age of Token
maxAge = 1*24*60*60
 ////creation of token
  const createToken = (id)=>{
    return jwt.sign({id} , 'rafiktoken',{
        expiresIn :maxAge
    })
  }

/////////////////register post api   
module.exports.psot_register =async(req,res)=>{
    const {username,email ,password} = req.body
    
    try {
    const user = await User.create({username ,email ,password})
    const token = createToken(user._id)
    res.status(201).json({user:email,token})
    }
    catch (err){
        const errors =handeleroor(err);
        res.status(400).send({errors})

    }
    
    }

/////////////////login post api    
    module.exports.psot_login = async(req,res)=>{
        const {email ,password} = req.body
        try {
            const user = await User.login(email,password)
            const token = createToken(user._id)
            res.status(200).json({user:email,token})
            }
            catch (err){
            const errors =handeleroor(err);
            res.status(400).send({errors})  
        
            }
        }