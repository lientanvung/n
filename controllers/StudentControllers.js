const Student = require('../models/student')
class StudentControllers {
    index(req, res){
        Student.find({}, function(err, student){
            if(!err){
                res.send(student)
            }else{
                res.status(404).send('lỗi rồi')
            }
        })
        // res.send('index') 
    }
    
    show(req, res){
        res.send('what your name ?')
    }
}

module.exports = new StudentControllers;