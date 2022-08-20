const db = require("../../models")
const {Op} = require("sequelize")
let jwt = require("jsonwebtoken")
let config = require("../../modul/jwt/config")
let controller ={};
controller.login = async (req,res,next)=>{
  let nohp = req.body.nohp
  let password = req.body.password

  let getuser = await db.User.findOne({
    where:{
        
            nohp:nohp
    
    }
  }).then( async (user)=>{
    if(!user){
        res.status(500).json({
            mesage:"login pailed",
        })
    }else if(!await user.validPassword(password)){
        res.status(500).json({
            mesage:"login paileds",
        })
    }else{
        const token = jwt.sign({user},config.JWT_SECRET)
        res.status(201).json({
            message:"login succes",
            token:token,
            data:user
        })
    }
  })
}
module.exports = controller