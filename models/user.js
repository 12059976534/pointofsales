'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    createAt: DataTypes.STRING,
    updateAt: DataTypes.STRING,
    tokoname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    poto: DataTypes.STRING,
    Status:DataTypes.STRING 
  },{
    timestamps:false
  }
     
  );
  User.associate = function(models) {
    User.hasMany(models.Terjual,{as: 'terjual'})
    User.hasMany(models.Barang,{as: 'barang'})
  };
  return User;
};