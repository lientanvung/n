const newRouter = require('./student')
function route(app){
  
    app.use('/', newRouter) 
    // app.get('/news',function(req, res){
    //     res.render('hello word')
    // })
}

module.exports = route;