const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Comment = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    writeDate: { type: String, required: true },
    contents: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    to: { type: Number, refPath: 'category', required: true }
}, {
    collection: 'Comment'
    });

Comment.post('save', function (comment) {
    console.log(comment);
    new Promise((resolve, reject) => {

        const recruit_project = require('./recruit-project');
        const recruit_study = require('./recruit-study');
        const recruit_competition = require('./recruit-competition');
        const recruit_circle = require('./recruit-circle');

        if (comment.category == 'Recruit-Project') resolve(recruit_project.findOne({ "_id": comment.to }));
        if (comment.category == 'Recruit-Study') resolve(recruit_study.findOne({ "_id": comment.to }));
        if (comment.category == 'Recruit-Competition') resolve(recruit_competition.findOne({ "_id": comment.to }));
        if (comment.category == 'Recruit-Circle') resolve(recruit_circle.findOne({ "_id": comment.to }));
        reject(new Error('Invalid Category'));

    })
        .then(post => {
            console.log(post);
            if (post.comments.indexOf(comment._id) == -1) {
                post.comments.push(comment._id);
                post.markModified('comments');
            }
            post.save();
        })
        .catch((err) => {
            console.log(err);
            comment.remove();
        });
})

Comment.post('remove', function (comment) {
    new Promise((resolve, reject) => {

        const Recruit_Project = require('./recruit-project');
        const Recruit_Study = require('./recruit-study');
        const Recruit_Competition = require('./recruit-competition');
        const Recruit_Circle = require('./recruit-circle');
        const Notice = require('./notice');

        if (comment.category == 'Recruit-Project') resolve(Recruit_Project.findById(comment.to));
        if (comment.category == 'Recruit-Study') resolve(Recruit_Study.findById(comment.to));
        if (comment.category == 'Recruit-Competition') resolve(Recruit_Competition.findById(comment.to));
        if (comment.category == 'Recruit-Circle') resolve(Recruit_Circle.findById(comment.to));
        if (comment.category == 'Notice') resolve(Notice.findById(comment.to));

        reject(new Error('Not Found'));

    })
        .then(post => {
            console.log(post);
            if (post.comments.indexOf(comment._id) != -1) {
                post.comments.splice(post.comments.indexOf(comment._id), 1);
                post.markModified('comments');
            }
            post.save();
        })
        .catch((err) => {
            console.log(err);
        });
})

Comment.statics.create = function (author, contents, image, category, to) {
    const date = new Date();
    const writeDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const comment = new this({
        author,
        writeDate,
        contents,
        image,
        category,
        to
    })

    return comment.save();
}

module.exports = mongoose.model('Comment', Comment);