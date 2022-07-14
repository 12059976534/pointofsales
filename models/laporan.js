'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const Laporan = sequelize.define('Laporan', {
    createAt: DataTypes.STRING,
    banrangName: DataTypes.INTEGER,
    jumlahTerjual: DataTypes.INTEGER,
    jumlahPengembalian:DataTypes.INTEGER,
    status: DataTypes.STRING,
  },{
    timestamps:false
  }
     
  );
  return Laporan;
};