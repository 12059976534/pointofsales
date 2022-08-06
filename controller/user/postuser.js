const db = require('../../models');

let controller={}

//onecreate
controller.createUser= async(req,res,next)=>{
  try {
    let create = await db.User.create({
        createAt:req.body.createAt,
        tokoname:req.body.tokoname,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        // poto:protocol + '://' + req.header('host') + "/" + req.file.path,
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