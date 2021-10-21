const newRouter = require('../controllers/svControllers')
function route(sv){
  
    sv.get('/', function(req, res){
        res.send(newRouter)
    })
}

module.exports = route;

