const db = require('../../models');

let controller={}

//onecreate
controller.createUser= async(req,res,next)=>{
  try {
    let create = await db.User.create({
        createAt:req.body.createAt,
        tokoname:req.body.tokoname,
        nohp:req.body.nohp,
        password:req.body.password,
        // poto:req.protocol + '://' + req.header('host') + "/" + req.file.path,
        Status:"1",
      });
      res.status(201).json({
        message: "berhasil tambah data",
        data:create
    })
  } catch (error) {
    next(error);
  }
}




module.exports = controller;