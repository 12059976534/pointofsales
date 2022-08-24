///// belum jadiii niih
const db = require('../../models');

let controller={} 

//onecreate
controller.createjualone= async(req,res,next)=>{
  try {
    let create = await db.Terjual.create({
        createAt:req.body.createAt,
        updaeAt:req.body.updaeAt,
        BarangId:req.body.BarangId,
        kodeTransaksi:req.body.kodeTransaksi,
        UserId:req.body.userId,
        Status:req.body.Status,
      });
      res.status(201).json({
        message: "berhasil tambah data",
        data:create
    })
  } catch (error) {
    next(next);
  }
}

//bulkcreate
controller.createjualbulk= async(req,res,next)=>{
    try {
        let data=req.body
      let create = await db.Terjual.bulkCreate(
        // [
        //     {
        //          createAt:req.body.createAt,
        //          updaeAt:req.body.updaeAt,
        //          BarangId:req.body.BarangId,
        //          kodeTransaksi:req.body.kodeTransaksi,
        //          Status:req.body.Status,
        //     }
        // ]
        data
        );
        res.status(201).json({
          message: "berhasil tambah data",
          data:create
      })
    } catch (error) {
      next(error);
    }
  }

module.exports = controller;