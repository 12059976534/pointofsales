const db = require('../../models');
const fs = require('fs');
let controller={}

//onecreate
controller.updateBarang= async(req,res,next)=>{
  try {
    let id = req.params.id;
    let data={
        createAt:req.body.createAt,
        updateAt:req.body.updateAt,
        name:req.body.name,
        jumlah:req.body.jumlah,
        harga:req.body.harga,
        kodeBarang:req.body.kodeBarang,
        // poto:req.body.poto,
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
    next(error);
  }
}

controller.updatepotoBarang= async(req,res,next)=>{
  try {
    let id = req.params.id;

    let find=await db.Barang.findOne({
      where:{
        id:id
      }
    })


    let data={
        poto:req.protocol + '://' + req.header('host') + "/" + req.file.path,
    }
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
    next(error);
  }
}

module.exports = controller;