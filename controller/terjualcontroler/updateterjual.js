const db = require('../../models');

let controller={}

//onecreate
controller.updateterjualbyid= async(req,res,nex)=>{
  try {
    let id = req.params.id;
    let data={
        updaeAt:req.body.updaeAt,
        BarangId:req.body.BarangId,
        kodeTransaksi:req.body.kodeTransaksi,
        Status:req.body.Status,
    }
    let update = await db.Terjual.update(
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