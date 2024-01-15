const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const UserSchema = new mongoose.Schema({
    username:{
        type : String,
        required : [true,'pelese enter user name']

        },
    password:{
        type : String,
        required : [true,'pelese enter password'],
        minLength : [ 6, 'min lenght is 6 caracter']
        
        },
    email:{
        type : String,
        required : [true,'pelese enter email'],
        unique : true
            
        },
  });

  UserSchema.pre('save' , async function(next){
    const salt = await bcrypt.genSalt()
    this.password =await bcrypt.hash(this.password,salt)
    next();


  })



///// login part 
UserSchema.statics.login =async function (email ,password){

    const user = await this.findOne({ email})
    if (user) { 
        const auth = await bcrypt.compare( password,user.password)
        if (auth) {
            return user 
            
        }
        throw Error( 'password is incorect')
        
    }
    throw Error( 'email is incorect')

}
  module.exports=mongoose.model('User', UserSchema,'User');