const mongoose = require('mongoose');
const secret = require('../../config').secret;
const crypto = require('crypto');
let Schema = mongoose.Schema;

const User = Schema({
    name: { type: String, required : true },
    code: { type: String, required: true, unique: true }, // 식별코드 : dsm201646
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    entryDate: { type: String, required: true },
    profile: { type: String, required: true, unique: true },
    projectPosts: [{ type: Schema.Types.ObjectId, ref: "Recruit_Project" }],
    studyPosts: [{ type: Schema.Types.ObjectId, ref: "Recruit_Study" }],
    circlePosts: [{ type: Schema.Types.ObjectId, ref: "Recruit_Circle" }],
    admin: { type: Boolean, default: false },
}, { collection : 'User'});

// create new User documnet
User.statics.create = function (name, code, email, password, profile) {
    const encrypted = crypto.createHmac('sha1', secret)
        .update(password)
        .digest('base64')

    const date = new Date();
    const entryDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const user = new this({
        name,
        code,
        email,
        profile,
        entryDate,
        password: encrypted
    });

    // return the Promise
    return user.save();
}

// find one user by using name
User.statics.findOneByName = function (name) {
    return this.findOne({
        name
    }).exec();
}

// verify the password of the User document
User.methods.verify = function (password) {
    const encrypted = crypto.createHmac('sha1', secret)
        .update(password)
        .digest('base64')

    return this.password === encrypted;
}

User.methods.assignAdmin = function () {
    this.admin = true;
    return this.save();
}

module.exports = mongoose.model('User', User);