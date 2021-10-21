const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/sinhVien',{
            useNewUrlParser: true,
            useUniFiedTopology: true,
        });
        console.log('hello')
    }catch(error) {
        console.log('lỗi')
    }
}

module.exports = { connect };
