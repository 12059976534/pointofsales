const db = require('../../models');
const fs = require('fs');
let controller={}

controller.deleterjualbyid= async(req,res,next)=>{
  try {
    let id = req.params.id;
    let delet = await db.Terjual.destroy(
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