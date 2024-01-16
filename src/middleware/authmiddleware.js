const jwt = require("jsonwebtoken")


const vrifiy = (req ,res) =>{

    const token = req.headers.authorization
    if (token) {
        jwt.verify(token ,'rafiktoken', (err,decoded)=>{

            if (err) {
                res.status(400).json({validate:false})
                
            }else{
                res.status(200).json({validate:true,decoded})
            }

        })
   
   
    }else{
        res.status(400).json({validate:false})

    }
            
    



}
module.exports ={vrifiy}