const express = require('express');

const port = 3000;
const mongoose = require('mongoose');
const sv = express();

const db = require('./config/sinhvien')
db.connect();

const route = require('./router/sinhvien.router')
route(sv);


// const index = require('./router/app')
// router(app);

sv.listen(port, () =>{
    console.log(`http://localhost:${port}`)
});