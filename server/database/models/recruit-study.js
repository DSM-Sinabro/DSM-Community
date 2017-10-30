let mongoose = require('mongoose');

let Schema = mongoose.Schema;

const Comment = require('./comment');
const User = require('./user');

let recruit_study = Schema({
    _id: { type : Number, required: true, unique: true },
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
}, { collection : 'Recruit-Study'});

recruit_study.pre('remove', function (next) {
    Comment.remove({ "category": "Recruit-Study", "to": this._id }).exec();
    next();
});

recruit_study.post('save', function () {
    User.findById(this.author)
        .then(user => {
            if (user && user.studyPosts.indexOf(this._id) < 0) {
                user.studyPosts.push(this._id);
                user.markModified('studyPosts');
                user.save();
            }
        })
        .catch(err => {
            console.log(err);
        })
});

recruit_study.post('remove', function () {
    User.findById(this.author)
        .then(user => {
            if (user) {
                const index = user.studyPosts.indexOf(this._id);
                if (index != -1) {
                    user.studyPosts.splice(index, 1);
                    user.markModified('studyPosts');
                    user.save();
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
});

recruit_study.create = function(title, major, startPeriod, endPeriod, users, option, content, writer){
    const date = new Date();
    
    const createdAt = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()+" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    const post = new this({
        title,
        major,
        startPeriod,
        endPeriod,
        users,
        option,
        content,
        writer,
        createdAt
    });
    
    return post.save();
}

module.exports = mongoose.model('Recruit-Study', recruit_study);