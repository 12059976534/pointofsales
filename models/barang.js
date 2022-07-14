'use strict';

module.exports = (sequelize, DataTypes) => {
  const Barang = sequelize.define('Barang', {
    createAt: DataTypes.STRING,
    updateAt: DataTypes.STRING,
    name: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    kodeBarang: DataTypes.STRING,
    poto: DataTypes.STRING,
    Status:DataTypes.STRING 
  },{
    timestamps:false
  }
     
  );
  Barang.associate = function(models) {
    Barang.hasMany(models.Terjual,{as: 'terjual'})
  };
  return Barang;
};