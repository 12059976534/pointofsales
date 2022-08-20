const db = require("../../models")
const bcrypt = require('bcrypt')
let controller ={};
controller.updatepassword = async (req,res,next)=>{
  try {
      const salt = await bcrypt.genSalt(10)
      let encrypt = await bcrypt.hash(req.body.password,salt)
      let update = await db.User.update({
        password:encrypt,
      },{
        where:{
            nohp:req.body.nohp
        }
      })    
      res.status(201).json({
        message:"update password sukses",
      })
  } catch (error) {
    next(error)
  }
 
}
module.exports = controller