const controller={};


//======barang======
const createBarang = require("./barangcontroler/createbarang")
controller.createBarang = createBarang
const readBarang = require("./barangcontroler/readbarang")
controller.readBarang=readBarang
const updateBaarang = require("./barangcontroler/updatebarang")
controller.updateBaarang=updateBaarang
const deletebarang = require("./barangcontroler/deletebarang")
controller.deletebarang = deletebarang

//======terjual========
const getterjual = require("../controller/terjualcontroler/getterjual")
controller.getterjual=getterjual
const createterjual = require("../controller/terjualcontroler/createterjual")
controller.createterjual=createterjual
const deleterjual = require("../controller/terjualcontroler/deleteterjual")
controller.deleterjual=deleterjual;
//==========countdata ======
const countdata = require("./countdata/count")
controller.countdata = countdata

//==========laporan===========
const laporan= require("../controller/laporan/laporan")
controller.laporan =laporan

//============user=============
//post
const postusercontroller = require("../controller/user/postuser")
controller.postusercontroller = postusercontroller;
//update
const updateuser = require("../controller/user/updateuser")
controller.updateuser = updateuser
//deleteuser
const deleteuser = require("../controller/user/deleteuser")
controller.deleteuser = deleteuser
//getall_user
const getuser = require("../controller/user/getuser")
controller.getuser = getuser

//==============auth=================
const logincotroler = require("../controller/auth/login")
controller.logincotroler = logincotroler
const registrasicotroler = require("../controller/auth/registrasi")
controller.registrasicotroler = registrasicotroler
const updatepassword = require("../controller/auth/updatepassword")
controller.updatepassword = updatepassword

module.exports = controller;