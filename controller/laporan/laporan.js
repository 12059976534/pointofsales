const db = require('../../models');
const {Op} = require("sequelize");

let controller={}

//laporan
controller.laporan = async(req,res,next)=>{
    try {
        // let harga = []
        // let perbarang = []
        let modal = 0;
        let terjual = 0;
        let barang = await db.Barang.findAndCountAll({
        })
        console.log(barang);
        if(barang.rows.length >= 0){
          for(let i= 0; i< barang.rows.length; i++){
            // perbarang.push(barang.rows[i].id)
            modal = modal+barang.rows[i].harga
          }
          console.log("======= harga =======")
          // console.log(harga)
        }
        
        res.status(201).json({
                jumlahbarang:barang.count,
                modal:modal,
                data:barang.rows,
                
        }
      )
    } catch (error) {
      next(error);
    }
  }

//terjual
controller.perbarang = async(req,res,next)=>{
 try {
  let barangid = req.params.id;
  let totalterjual = 0;
  
  let get = await db.Terjual.findAndCountAll({
      where:{
        BarangId:barangid
      }
  })
  // console.log(get)
  let barangs = await db.Barang.findOne({
    where:{
        id:barangid
    }

  }) 

// console.log(get);
console.log(barangs);
    totalterjual = get.count
  let totalharga =barangs.harga * totalterjual ;
  res.status(201).json({
      
      terjual:totalterjual,
      totalharga:totalharga 
  }
)
 } catch (e) {
   next(e)
 }
}


module.exports = controller;