const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = require('./comment');
const User = require('./user');

let recruit_circle = Schema({
    pid: { type : Number, required: true, unique: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    recruitmentNumber: { type: Number, required: true },
    currentRecruitment: { type: Number, required: true, default: 0 },
    writeDate: { type: String, required: true },
    tags: [{ type: String }],
    images: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    views: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    collection: 'Recruit-Circle'
})

recruit_circle.pre('remove', function (next) {
    Comment.remove({ "type": "circle", "pid": this.pid }).exec();
    next();
});

recruit_circle.post('save', function () {
    User.findById(this.author)
        .then(user => {
            if (user && user.circlePosts.indexOf(this._id) < 0) {
                user.circlePosts.push(this._id);
                user.markModified('circlePosts');
                user.save();
            }
        })
        .catch(err => {
            console.log(err);
        })
});

recruit_circle.post('remove', function () {
    User.findById(this.author)
        .then(user => {
            if (user) {
                const index = user.circlePosts.indexOf(this._id);
                if (index != -1) {
                    user.circlePosts.splice(index, 1);
                    user.markModified('circlePosts');
                    user.save();
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = mongoose.model('Recruit-Circle', recruit_circle);