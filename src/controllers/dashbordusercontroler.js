const Task = require("../models/Taskmodal")


const tasklast =()=>{

    return "last_15_day"

} 
const filter =()=>{

    return "filter"

} 


////////////////last task 15 day post api  

module.exports.task_last_15_day =async(req,res)=>{
    const {user_association} = req.body
    try {
        const user = await Task.find({user_association})
        const date_of_task = user.map(user=> user.date_creation)
        const dateCountObj = {};
        date_of_task.forEach(date => {
            dateCountObj[date] = (dateCountObj[date] || 0) + 1;
        });
        const result = Object.entries(dateCountObj).map(([date, count]) => [date, count]);
            
        res.status(200).json({user:result})
        
        }
        catch (err){
            
            res.send('eror')
    
        }
   
    
    }
    ////////////////filter task  post api   
module.exports.filter_task =async(req,res)=>{
    res.send('filter_task')
    
    }
     ////////////////coplition task i month  post api   
module.exports.complition_rate_inmonth =async(req,res)=>{
    // const {nametask,discription ,user_association} = req.body
    // const status = 'incompleted'
    // const currentDate = moment().format();
    // date_creation=currentDate.split('T')[0]
    // try {
    // const user = await Task.create({nametask,discription ,status, date_creation,user_association})
   
    // res.send('Task is add')
    // }
    // catch (err){
        
    //     res.status(400)

    // }
    
    }