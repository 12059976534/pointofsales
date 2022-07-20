const express=require("express");
const router=express.Router();
const controller = require("../controller/index")
const upload = require("../modul/multer/upload")
const uploadimage = upload.uploadimage

//barang
router.get("/getallbarang",controller.readBarang.getBrangall);
router.get("/getBrangBycodebarang",controller.readBarang.getBrangsearch);
router.get("/getbarangsearch",controller.readBarang.getBrangBycodebarang);
router.get("/getBrangbytimecreateAt",controller.readBarang.getBrangbytimecreateAt);
router.get("/getbyidbarang/:id",controller.readBarang.getBrangByid);
router.post("/createnBarang",uploadimage.single("potobarang"),controller.createBarang.createBarang);
router.post("/updateBarang/:id",controller.updateBaarang.updateBarang);
router.post("/updatepotoBarang/:id",uploadimage.single("potobarang"),controller.updateBaarang.updatepotoBarang);
router.post("/deletebarangbyid/:id",controller.deletebarang.deletebarangbyid);

//terjual
router.post("/createrjualone",controller.createterjual.createjualone)
router.post("/createjualbulk",controller.createterjual.createjualbulk)
router.get("/geallterjual",controller.getterjual.getterjualAll)
router.get("/geallterjualbyid/:id",controller.getterjual.getterjualByid)
router.get("/getterjualbybarangid/:BarangId",controller.getterjual.getterjualbybarangid)
router.get("/getterjualbycreateAt",controller.getterjual.getterjualbycreateAt)
router.get("/getterjualbycodetransaksi",controller.getterjual.getterjualbycodetransaksi)

//count data
router.get("/getcountterjual",controller.countdata.getcountbarangrupiah);
router.get("/getcounalltbarang",controller.countdata.getcountbarang);

module.exports = router;