'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    createAt: DataTypes.STRING,
    updateAt: DataTypes.STRING,
    tokoname: DataTypes.STRING,
    nohp: DataTypes.STRING,
    password: DataTypes.STRING,
    poto: DataTypes.STRING,
    Status:DataTypes.STRING 
  },{
    timestamps:false,
    hooks:{
       beforeCreate: async (user)=>{
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password,salt)
       }
    }
  } 
  );

  User.prototype.validPassword = async function(password){
    return await bcrypt.compare(password,this.password);
  }

  User.associate = function(models) {
    User.hasMany(models.Terjual,{as: 'terjual'})
    User.hasMany(models.Barang,{as: 'barang'})
  };
  return User;
};