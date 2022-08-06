var jwt = require('jsonwebtoken');
var config=require('./config')

function endscuretoken(req,res,next) {
    const bererheader = req.headers['authorization'];
    if(typeof bererheader !== 'undefined'){
        const bearer=bererheader.slice(7);
        const bearertoken=bearer
        jwt.verify(bearertoken,config.JWT_SECRET,(err,data)=>{
            if(err){
                res.status(401).send("access denied")
            }else{
                console.log(`dataaaa payloadddd: ${data}`)
                next()
            }
        })
      
    }else{
        res.status(401).send("access denied")
    }
}

module.exports = endscuretoken;