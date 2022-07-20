const db = require('../../models');
const {Op} = require("sequelize");

let controller={}

//count barang
controller.getcountbarang= async(req,res,next)=>{
    try {
        let dalamrupiah = 0;
        let barang = await db.Barang.findAndCountAll({
        })
        for(let i=0; i<barang.rows.length; i++){
          dalamrupiah = dalamrupiah+barang.rows[i].harga * barang.rows[i].jumlah
        }
        
        res.status(201).json({
                jumlahbarang:barang.count,
                dalamrupiah:dalamrupiah
        }
      )
    } catch (error) {
      next(error);
    }
  }

  //count harga
controller.getcountbarangrupiah= async (req,res,next)=>{
    try {
      let tottalrupiah = 0;  
      let berhasilterjual = await db.Terjual.findAndCountAll({
        where:{
            Status:"1"
         }
       })
    
       for(let i=0; i<berhasilterjual.rows.length; i++){
        let data = await db.Barang.findOne({
          where:{id:berhasilterjual.rows[i].BarangId}
         })
         if(data != null){
          console.log(data.harga)
          tottalrupiah =  tottalrupiah+data.harga;
         } 
       }


       res.status(201).json({
        totalrupiahterjual:tottalrupiah,
        jumlah_terjual:berhasilterjual.count
        
    }) 
    } catch (error) {
      next(error);
    }
  }


module.exports = controller;