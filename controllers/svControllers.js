const Sinhvien = require('../models/sinhvien.model');
class svControllers {
   index(req, res){
    Sinhvien.find({}, function(err, sinhvien){
        if(!err){
            res.send(sinhvien)
        }else{
            res.status(404).send('lỗi rồi')
        }
    })
   } 
}

module.exports = new svControllers;