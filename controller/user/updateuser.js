const db = require('../../models');
const fs = require("fs")
let controller={}

//update
controller.updateuser= async(req,res,next)=>{
  try {
    let update = await db.User.update({
      updateAt:req.body.createAt,
        tokoname:req.body.tokoname,
        email:req.body.email,
        username:req.body.username,
        // poto:protocol + '://' + req.header('host') + "/" + req.file.path,
        Status:"1",
      },{
        where:{
          id:req.params.id
        }
      });
      res.status(201).json({
        message: "berhasil update data",
        data:update
    })
  } catch (error) {
    next(error);
  }
}

controller.updatepoto= async(req,res,next)=>{
  try {
    let find=await db.User.findOne({
      where:{
        id:req.params.id
      }
    })
    var datapoto = find.poto
    if(datapoto != null){
      var splitstring = datapoto.split('/')
      await splitstring.splice(0, 3)
      var aftersplice = splitstring.toString()
      var imagepath = aftersplice.replace(/,/g, "/")
      try {
        fs.unlink(imagepath, (err) => {
            if(err){
                console.log(err)
            }
         })
        } catch (error) {
          console.log(error)
      }

      let update=db.User.update({
        poto:req.protocol + '://' + req.header('host') + "/" + req.file.path,
      },{
        where:{
          id:req.params.id
        }
      })
      res.status(201).json({
        message:"update succes",
        data:update
      })
    }
    
  } catch (error) {
    next(error)
  }
}

module.exports = controller;