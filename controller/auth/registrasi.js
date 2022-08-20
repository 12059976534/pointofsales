const db = require("../../models")
const {Op} = require("sequelize")
// let jwt = require("jsonwebtoken")
// let config = require("../../modul/jwt/config")
let controller ={};
controller.registrasi = async (req,res,next)=>{
  try {
    let get = await db.User.findOne({
      where:{
        nohp:req.body.nohp,
      }
    })
    if(get == null){
      let create = await db.User.create({
        createAt:req.body.createAt,
        // updateAt:req.body.updateAt,
        tokoname:req.body.tokoname,
        nohp:req.body.nohp,
        password:req.body.password,
        // poto:req.body.poto,
        Status:"1",
      })    
      res.status(201).json({
        message:"registrasi succes",
        data:create
      })
    }else{
      res.status(400).json({
        message:"user is ready exis",
      })
    }
   
  } catch (error) {
    next(error)
  }
 
}
module.exports = controller