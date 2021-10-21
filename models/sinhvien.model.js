const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sinhvien = new Schema({
    name: String,
    address: String,
    born: Number,
})

module.exports = mongoose.model('SinhVien', sinhvien);
