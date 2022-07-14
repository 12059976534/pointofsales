const db = require('../../models');

let controller={}

//onecreate
controller.createBarang= async(req,res,nex)=>{
  try {
    let create = await db.Barang.create({
        createAt:req.body.createAt,
        updateAt:req.body.updateAt,
        name:req.body.name,
        jumlah:req.body.jumlah,
        harga:req.body.harga,
        kodeBarang:req.body.kodeBarang,
        poto:req.body.poto,
        Status:req.body.Status,
      });
      res.status(201).json({
        message: "berhasil tambah data",
        data:create
    })
  } catch (error) {
    nex(error);
  }
}

module.exports = controller;