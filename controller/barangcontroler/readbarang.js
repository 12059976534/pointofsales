const db = require('../../models');
const {Op} = require("sequelize");

let controller={}

//getall
controller.getBrangall= async(req,res,nex)=>{
  try {
    var limit = parseInt(req.query.limit)
        var offset = parseInt(req.query.offset)
      let get = await db.Barang.findAndCountAll({
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

//getbycodebarang
controller.getBrangBycodebarang= async(req,res,nex)=>{
    try {
        let code=req.query.kodeBarang
        let get = await db.Barang.findOne({
            where:{
                kodeBarang:code
            }
        })
        res.status(201).json(
          get
      )
    } catch (error) {
      nex(error);
    }
  }

//getbyid
controller.getBrangByid= async(req,res,nex)=>{
    try {
        let id=req.params.id
        let get = await db.Barang.findOne({
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

//getsearch
controller.getBrangsearch= async(req,res,nex)=>{
    try {
        const search = req.query.keyword;
        let get = await db.Barang.findAll({
            where:{
                [Op.or]:[
                    {name:{[Op.like]:'%'+search+'%'}},
                    {harga:{[Op.like]:'%'+search+'%'}},
                ]
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

//getbycreateAt
controller.getBrangbytimecreateAt= async(req,res,nex)=>{
    try {
        const createat = req.query.createAt
        let get = await db.Barang.findAll({
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


module.exports = controller;