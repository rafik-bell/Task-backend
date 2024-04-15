const Task = require("../models/Taskmodal")
const moment = require('moment');



////////////////adition Task post api   
module.exports.psot_addTask =async(req,res)=>{
    const {nametask,discription ,user_association} = req.body
    const status = 'incompleted'
    const currentDate = moment().format();
    date_creation=currentDate.split('T')[0]
    try {
    const user = await Task.create({nametask,discription ,status, date_creation,user_association})
   
    res.send('Task is add')
    }
    catch (err){
        
        res.status(400)

    }
    
    }
//////////////// Task post api   
module.exports.psot_Task =async(req,res)=>{
    const {user_association} = req.body
    try {
        const user = await Task.find({user_association})
       
        res.status(200).json({user})
        
        }
        catch (err){
            
            res.send('eror')
    
        }




}