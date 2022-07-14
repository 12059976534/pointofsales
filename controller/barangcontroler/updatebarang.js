const db = require('../../models');

let controller={}

//onecreate
controller.updateBarang= async(req,res,nex)=>{
  try {
    let id = req.params.id;
    let data={
        createAt:req.body.createAt,
        updateAt:req.body.updateAt,
        name:req.body.name,
        jumlah:req.body.jumlah,
        harga:req.body.harga,
        kodeBarang:req.body.kodeBarang,
        poto:req.body.poto,
        Status:req.body.Status,
    }
    let update = await db.Barang.update(
        data,
      {
        where:{
            id:id
        }
      });
      res.status(201).json({
        message: "udate succes",
        data:data
    })
  } catch (error) {
    nex(error);
  }
}

module.exports = controller;