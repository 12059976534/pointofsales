const db = require('../../models');
const {Op} = require("sequelize");

let controller={}

//getall
controller.getterjualAll= async(req,res,next)=>{
  try {
    var limit = parseInt(req.query.limit)
        var offset = parseInt(req.query.offset)
      let get = await db.Terjual.findAndCountAll({
        include:['barang'],
        limit:limit,  
        offset:offset
      })
      res.status(201).json({
        limit:limit,
        offset:offset,
        jumlah:get.count,
        data:get.rows
      }
    )
  } catch (error) {
    next(error);
  }
}

//getbyid
controller.getterjualByid= async(req,res,next)=>{
    try {
        let id=req.params.id
        let get = await db.Terjual.findOne({
            where:{
                id:id
            }
        })
        res.status(201).json(
          get
        
      )
    } catch (error) {
      next(error);
    }
  }

//getterjualbyidbarang
controller.getterjualbybarangid= async(req,res,next)=>{
    try {
        const barangid = req.params.BarangId;
        let get = await db.Terjual.findAll({
            where:{
                BarangId:req.params.barangid
            }
        })
        res.status(201).json({
            data:get
        }
      )
    } catch (error) {
      next(error);
    }
  }

//getterjualbycreateAt
controller.getterjualbycreateAt= async(req,res,next)=>{
    try {
        const createat = req.query.createAt
        let get = await db.Terjual.findAll({
            where:{
               createAt:createat
            }
        })
        res.status(201).json({
            data:get
        }
      )
    } catch (error) {
      next(error);
    }
  }

  //getterjualbycodetransaksii
controller.getterjualbycodetransaksi= async(req,res,next)=>{
    try {
        const kodeTransaksi = req.query.code
        let get = await db.Terjual.findAll({
            where:{
                kodeTransaksi:kodeTransaksi
            }
        })
        res.status(201).json({
            data:get
        }
      )
    } catch (error) {
      next(error);
    }
  }


module.exports = controller;