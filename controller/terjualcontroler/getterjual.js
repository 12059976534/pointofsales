const db = require('../../models');
const {Op} = require("sequelize");

let controller={}

//getall
controller.getterjualAll= async(req,res,nex)=>{
  try {
    var limit = parseInt(req.query.limit)
        var offset = parseInt(req.query.offset)
      let get = await db.Terjual.findAndCountAll({
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
    nex(error);
  }
}

//getbyid
controller.getterjualByid= async(req,res,nex)=>{
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
      nex(error);
    }
  }

//getterjualbyidbarang
controller.getterjualbybarangid= async(req,res,nex)=>{
    try {
        const barangid = req.params.BarangId;
        let get = await db.Barang.findAll({
            where:{
                BarangId:barangid
            }
        })
        res.status(201).json({
            data:get
        }
      )
    } catch (error) {
      nex(error);
    }
  }

//getterjualbycreateAt
controller.getterjualbycreateAt= async(req,res,nex)=>{
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
      nex(error);
    }
  }

  //getterjualbycodetransaksii
controller.getterjualbycodetransaksi= async(req,res,nex)=>{
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
      nex(error);
    }
  }


module.exports = controller;