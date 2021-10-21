const express = require('express');

const port = 3000;
const mongoose = require('mongoose');
const app = express();

const db = require('./config/mongoosedb')
db.connect();

const route = require('./router/app.student')

route(app);


// const index = require('./router/app')
// router(app);

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
});