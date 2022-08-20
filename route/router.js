const express=require("express");
const router=express.Router();
const controller = require("../controller/index")
const upload = require("../modul/multer/upload")
const uploadimage = upload.uploadimage

//barang
router.get("/getallbarang",controller.readBarang.getBrangall);
router.get("/getbrangallbyuserid",controller.readBarang.getBrangallbyuserid);
router.get("/getBrangBycodebarang",controller.readBarang.getBrangsearch);
router.get("/getbarangsearch",controller.readBarang.getBrangsearch);
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
router.get("/getterjualbybarangid/:barangid",controller.getterjual.getterjualbybarangid)
router.get("/getterjualbycreateAt",controller.getterjual.getterjualbycreateAt)
router.get("/getterjualbycodetransaksi",controller.getterjual.getterjualbycodetransaksi)
router.get("/deleterjualbyid/id",controller.deleterjual.deleterjualbyid)

//count data
router.get("/getcountterjual",controller.countdata.getcountbarangrupiah);
router.get("/getcounalltbarang",controller.countdata.getcountbarang);

//laporan
router.get("/laporan",controller.laporan.laporan);
router.get("/perbarang/:id",controller.laporan.perbarang);

//user
router.post("/creteuser",controller.postusercontroller.createUser)
router.post("/updateuser/:id",controller.updateuser.updateuser)
router.post("/updatepoto/:id",uploadimage.single("poto"),controller.updateuser.updatepoto)
router.post("/deleteuserbyid/:id",controller.deleteuser.deleteuserbyid)
router.get("/getalluser",controller.getuser.getuserall)
router.get("/getuserbyid/:id",controller.getuser.getuserbyid)

//auth
router.post("/login",controller.logincotroler.login)
router.post("/registrasi",controller.registrasicotroler.registrasi)
router.post("/updatepassword",controller.updatepassword.updatepassword)

module.exports = router;