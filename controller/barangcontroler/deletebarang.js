const db = require('../../models');
const fs = require('fs');
let controller={}



controller.deletebarangbyid= async(req,res,next)=>{
  try {
    let id = req.params.id;

    let find=await db.Barang.findOne({
      where:{
        id:id
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
    }


    let update = await db.Barang.destroy(
      {
        where:{
            id:id
        }
      });
      res.status(201).json({
        message: "delete succes",
        data:"yess"
    })
  } catch (error) {
    next(error);
  }
}

module.exports = controller;