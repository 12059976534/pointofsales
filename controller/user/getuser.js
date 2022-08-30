let db = require("../../models")

let controller = {}

controller.getuserall = async (req,res,next)=>{
   try {
    let limit = parseInt(req.query.limit)
    let offset = parseInt(req.query.offset)
    let getdata = await db.User.findAndCountAll({
        limit:limit,
        offset:offset
    })
    res.status(201).json({
        limit: limit,
        offser:offset,
        count:getdata.count,
        data:getdata.rows
    })
   } catch (error) {
    next(error)
   }
}

controller.getuserbyid = async (req,res,next)=>{
    try {
     let getdata = await db.User.findOne({
        where:{
            id:req.params.id
        }
     })
     res.status(201).json({
        message:"getsucces",
        data:getdata
     })
    } catch (error) {
     next(error)
    }
 }

 controller.getuserbynumber = async (req,res,next)=>{
    try {
     let getdata = await db.User.findOne({
        where:{
            nohp:req.params.nohp
        }
     })
     if(getdata != null){
        res.status(201).json({
            message:"getsucces",
            data:getdata
         })
     }else{
        res.status(201).json({
            message:"nouser",
            data:[]
         })
     }
    
    } catch (error) {
     next(error)
    }
 }


module.exports = controller