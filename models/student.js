const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    name: String,
    numberStudent: Number,
})

module.exports = mongoose.model('Student', Student);



