const mongoose = require('mongoose');
require('../models/Movie');
require('../models/Cast');

const connectionString = 'mongodb://127.0.0.1:27017/movie-magic';

async function configDatabase(){
    await mongoose.connect(connectionString);

    console.log('DataBase Connected!');
}

module.exports = {
    configDatabase
}