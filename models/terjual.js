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
    timestamps:false
  }
     
  );
  Terjual.associate = function(models) { 
    Terjual.belongsTo(models.Barang,{foreignKey: 'BarangId', as: 'barang'})
  };
  return Terjual;
};