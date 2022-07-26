const db = require('../../models');

let controller={}

//onecreate
controller.createBarang= async(req,res,next)=>{
  try {
    let create = await db.Barang.create({
        createAt:req.body.createAt,
        // updateAt:req.body.updateAt,
        name:req.body.name,
        jumlah:req.body.jumlah,
        harga:req.body.harga,
        modal:req.body.modal, ///
        kodeBarang:req.body.kodeBarang,
        poto:req.protocol + '://' + req.header('host') + "/" + req.file.path,
        Status:req.body.Status,
        UserId:req.body.userid
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