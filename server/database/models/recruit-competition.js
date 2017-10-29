const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = require('./comment');
const User = require('./user');

let recruit_competition = Schema({
    pid: { type : Number, required: true, unique: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    link: { type: String, required: true },
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
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    collection: 'Recruit-Competition'
})

recruit_competition.pre('remove', function (next) {
    Comment.remove({ "type": "competition", "pid": this.pid }).exec();
    next();
});

recruit_competition.post('save', function () {
    User.findById(this.author)
        .then(user => {
            if (user && user.competitionPosts.indexOf(this._id) < 0) {
                user.competitionPosts.push(this._id);
                user.markModified('competitionPosts');
                user.save();
            }
        })
        .catch(err => {
            console.log(err);
        })
});

recruit_competition.post('remove', function () {
    User.findById(this.author)
        .then(user => {
            if (user) {
                const index = user.competitionPosts.indexOf(this._id);
                if (index != -1) {
                    user.competitionPosts.splice(index, 1);
                    user.markModified('competitionPosts');
                    user.save();
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
});

recruit_competition.virtual('remainRecruitment').get(function () {
    return this.recruitmentNumber - this.currentRecruitment;
});

recruit_competition.virtual('views_count').get(function () {
    return this.views.length;
});

recruit_competition.virtual('comments_count').get(function () {
    return this.comments.length;
});

recruit_competition.statics.create = function (authorUid, title, contents, link, recruitmentNumber, positions, startDate, endDate, tags, images) {
    const date = new Date();
    const writeDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


    const Post = this;

    return new Promise((resolve, reject) => {
        Post.find({}, { "pid": true }).sort({ "pid": -1 }).limit(1)
            .then(cursor => {
                return cursor[0] ? cursor[0].pid + 1 : 1;
            })
            .then(pid => {
                const post = new Post({
                    "pid": pid,
                    "author": authorUid,
                    "title": title,
                    "contents": contents,
                    "link": link,
                    "recruitmentNumber": recruitmentNumber,
                    "positions": positions,
                    "writeDate": writeDate,
                    "startDate": startDate,
                    "endDate": endDate,
                    "tags": tags,
                    "images": images,
                    "comments": []
                });
                resolve(post.save());
            })
            .catch(err => reject(err))
    })
}

recruit_competition.statics.findAll = function () {
    return this.find({}, {
        "pid": true,
        "title": true,
        "author": true,
        "views": true,
        "tags": true,
        "comments": true,
        "link": true,
        "writeDate": true,
        "positions": true,
        "comments_count": true,
        "views_count": true,
        "remainRecruitment": true
    })
        .populate("author", ["name", "profile"])
        .sort({ "writeDate": 1 })
        .exec();
}

module.exports = mongoose.model('Recruit-Competition', recruit_competition);