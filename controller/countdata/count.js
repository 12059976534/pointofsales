const db = require('../../models');
const {Op} = require("sequelize");

let controller={}

//count barang
controller.getcountbarang= async(req,res,next)=>{
    try {
        let dalamrupiah = 0;
        let jumlahbarang = 0;

        let barang = await db.Barang.findAndCountAll({
          where:{
            UserId:req.query.userid
          }
        })
        
        for(let i=0; i<barang.rows.length; i++){
          dalamrupiah = dalamrupiah+barang.rows[i].harga * barang.rows[i].jumlah
          jumlahbarang = jumlahbarang + barang.rows[i].jumlah
        }
        
        res.status(201).json({
                jumlahbarang:jumlahbarang,
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
          [Op.and]:[
            {UserId:req.query.userid},
            {Status:"1"}
          ]
            
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