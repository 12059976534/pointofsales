const multer = require('multer');

class Multer{
  static storage(paht){
   return multer.diskStorage({
        destination:function(req, file, cb){
            cb(null, paht);
        },
        filename:function(req, file, cb){
            const crypto=require('crypto');
            const random=crypto.randomBytes(5).toString('hex');
            cb(null,random+"_"+Date.now()+"_"+file.originalname);
        }
    });
  }
}

class upload{
    static uploadimage = multer({storage:Multer.storage('assets/image')})
    static uploadfdf = multer({storage:Multer.storage('assets/fdf')})
}





module.exports = upload