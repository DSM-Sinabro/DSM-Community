const mongoose = require('mongoose');
// const secret = require('../../config').secret;
// const crypto = require('crypto');
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
    circlePosts: [{ type: Schema.Types.ObjectId, ref: "Recruit_Circle" }]
}, { collection : 'User'});

module.exports = mongoose.model('User', User);