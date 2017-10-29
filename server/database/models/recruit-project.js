const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = require('./comment');
const User = require('./user');

let recruit_project = Schema({
    pid: { type : Number, required: true, unique: true },
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
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    collection: 'Recruit-Project'
})

recruit_project.pre('remove', function (next) {
    Comment.remove({ "type": "project", "pid": this.pid }).exec();
    next();
});

recruit_project.post('save', function () {
    User.findById(this.author)
        .then(user => {
            if (user && user.projectPosts.indexOf(this._id) < 0) {
                user.projectPosts.push(this._id);
                user.markModified('projectPosts');
                user.save();
            }
        })
        .catch(err => {
            console.log(err);
        })
});

recruit_project.post('remove', function () {
    User.findById(this.author)
        .then(user => {
            if (user) {
                const index = user.projectPosts.indexOf(this._id);
                if (index != -1) {
                    user.projectPosts.splice(index, 1);
                    user.markModified('projectPosts');
                    user.save();
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
});

recruit_project.virtual('remainRecruitment').get(function () {
    return this.recruitmentNumber - this.currentRecruitment;
})

recruit_project.virtual('views_count').get(function () {
    return this.views.length;
})

recruit_project.virtual('comments_count').get(function () {
    return this.comments.length;
})

recruit_project.statics.create = function (authorUid, title, contents, recruitmentNumber, positions, startDate, endDate, tags, images) {
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

recruit_project.statics.findAll = function () {
    return this.find({}, {
        "pid": true,
        "title": true,
        "author": true,
        "views": true,
        "tags": true,
        "comments": true,
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

module.exports = mongoose.model('Recruit-Project', recruit_project);