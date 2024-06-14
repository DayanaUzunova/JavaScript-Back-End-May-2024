const { User } = require('../models/User');
const bcrypt = require('bcrypt');

async function register(email, password){
    //check if user exists and throw error if true
    //hash password
    //create DB record
    //return saved record
    const existing = await User.findOne({ email });

    if(existing){
        throw new Error ('Email is already used!');
    }

    const user = new User({
        email,
        password: await bcrypt.hash(password, 10)
    });

    await user.save();

    return user;
}

async function login(email, password){
    //check is user exists -> throw error if true
    //compare hashed password and password
    //return matched user
    const user = await User.findOne({ email });

    if(!user){
        throw new Error ('Incorrect email or password!');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw new Error('Incorrect email or password!');
    }
    return user;
}

module.exports = {
    register,
    login
}