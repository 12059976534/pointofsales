
'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const Terjual = sequelize.define('Terjual', {
    createAt: DataTypes.STRING,
    updaeAt: DataTypes.STRING,
    BarangId: DataTypes.INTEGER,
    kodeTransaksi: DataTypes.STRING,
    Status:DataTypes.STRING 
  },{
    hooks: {
      afterCreate: async (create) => {
        await sequelize.models.Barang.decrement({
          jumlah: 1
         },{
          where:{
            id: create.BarangId
          }
         })
      },
      afterBulkCreate:async (createbulk) => {
        createbulk.forEach(async(x)=>{
          console.log(x.BarangId)
          await sequelize.models.Barang.decrement({
           jumlah: 1
          },{
            where:{
              id: x.BarangId
            }
          })
        })
        
       }
    }, 
    timestamps:false
  }
     
  );
  Terjual.associate = function(models) { 
    Terjual.belongsTo(models.Barang,{foreignKey: 'BarangId', as: 'barang'})
  };
  return Terjual;
};