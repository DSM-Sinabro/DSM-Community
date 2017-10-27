const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let recruit_project = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    recruitmentNumber: { type: Number, required: true },
    currentRecruitment: { type: Number, required: true, default: 0 },
    positions: [{ type: String }],
    writeDate: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    tags: [{ type: String }],
    images: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    views: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    collection: 'Recruit-Project'
})

recruit_project.statics.create = function (authorUid, title, contents, recruitmentNumber, positions, startDate, endDate, tags, images) {
    const date = new Date();
    const writeDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const post = new this({
        "author": authorUid,
        "title": title,
        "contents": contents,
        "recruitmentNumber": recruitmentNumber,
        "positions": positions,
        "writeDate": writeDate,
        "startDate": startDate,
        "endDate": endDate,
        "tags": tags,
        "images": images,
        "comments": []
    });

    return post.save();
}

recruit_project.statics.findAll = function () {
    return this.find({}, {
        "title": true,
        "author": true,
        "views": true, 
        "tags": true, 
        "comments": true,
        "writeDate": true,
        "positions": true
    })
        .populate("author", ["name", "profile"])
        .sort({ "writeDate": 1 })
        .exec();
}

module.exports = mongoose.model('Recruit-Project', recruit_project);