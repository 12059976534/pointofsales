const express=require("express");
const router=express.Router();
const controller = require("../controller/index")

//barang
router.get("/getallbarang",controller.readBarang.getBrangall);
router.get("/getBrangBycodebarang",controller.readBarang.getBrangsearch);
router.get("/getbarangsearch",controller.readBarang.getBrangBycodebarang);
router.get("/getBrangbytimecreateAt",controller.readBarang.getBrangbytimecreateAt);
router.get("/getbybarang/:id",controller.readBarang.getBrangByid);
router.post("/createnBarang",controller.createBarang.createBarang);
router.post("/updateBarang/:id",controller.updateBaarang.updateBarang);

//terjual
router.post("/geallterjualone",controller.createterjual.createjualone)
router.post("/createjualbulk",controller.createterjual.createjualbulk)
router.get("/geallterjual",controller.getterjual.getterjualAll)
router.get("/geallterjualbyid/:id",controller.getterjual.getterjualByid)
router.get("/getterjualbybarangid/:BarangId",controller.getterjual.getterjualbybarangid)
router.get("/getterjualbycreateAt",controller.getterjual.getterjualbycreateAt)
router.get("/getterjualbycodetransaksi",controller.getterjual.getterjualbycodetransaksi)

module.exports = router;