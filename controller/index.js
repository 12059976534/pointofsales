const controller={};


//======barang======
const createBarang = require("./barangcontroler/createbarang")
controller.createBarang = createBarang
const readBarang = require("./barangcontroler/readbarang")
controller.readBarang=readBarang
const updateBaarang = require("./barangcontroler/updatebarang")
controller.updateBaarang=updateBaarang

//======terjual========
const getterjual = require("../controller/terjualcontroler/getterjual")
controller.getterjual=getterjual
const createterjual = require("../controller/terjualcontroler/createterjual")
controller.createterjual=createterjual

module.exports = controller;