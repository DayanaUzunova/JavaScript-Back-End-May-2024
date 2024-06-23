const mongoose = require('mongoose');
require('../models/User');
require('../models/Stone');

async function configDatabase(){
    const connectionString = 'mongodb://127.0.0.1:27017/earth-treasure';

    mongoose.connect(connectionString);

    console.log('DataBase connected!');
}


module.exports = {
    configDatabase
}