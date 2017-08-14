const mongoose = require('mongoose');
const secret = require('../../config').secret;
const crypto = require('crypto');
let Schema = mongoose.Schema;

const User = Schema({
    name : { type : String, required : true },
    cardinal : { type : Number, required : true, default : null }, // 기수
    code : { type : String, unique : true }, // 식별코드 : dsm201646
    username : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    createdAt : { type : String, required : true }
}, { collection : 'User'});

// create new account
User.statics.create = function (username, password, name, cardinal, code) {
    const encrypted = crypto.createHmac('sha1', secret)
        .update(password)
        .digest('base64');

    const date = new Date();
    
    const createdAt = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()+" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const user = new this({
        username,
        password: encrypted,
        name,
        cardinal,
        code,
        createdAt
    })
    return user.save();
}

// find one user by username
User.statics.findOneByUsername = function (username) {
    return this.findOne({
        username
    }).exec()
}

User.statics.findOneByCode = function(code) {
    return this.findOne({
        code
    }).exec()
}
// verify user 
User.methods.verify = function (password) {
    const encrypted = crypto.createHmac('sha1', secret)
        .update(password)
        .digest('base64');
    return this.password === encrypted;
}

module.exports = mongoose.model('User', User);