const Comment = require('../../database/models/comment');

const Recruit_Project = require('../../database/models/recruit-project');
const Recruit_Study = require('../../database/models/recruit-study');
const Recruit_Competition = require('../../database/models/recruit-competition');
const Recruit_Circle = require('../../database/models/recruit-circle');
const Notice = require('../../database/models/notice')

exports.postComment = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const {
        contents,
        image,
        category,
        to
    } = req.body;
    new Promise((resolve, reject) => {

            if (category == 'Recruit-Project') resolve(Recruit_Project.findById(to));
            if (category == 'Recruit-Study') resolve(Recruit_Study.findById(to));
            if (category == 'Recruit-Competition') resolve(Recruit_Competition.findById(to));
            if (category == 'Recruit-Circle') resolve(Recruit_Circle.findById(to));
            if (category == 'Notice') resolve(Notice.findById(to));

            reject(new Error('Invalid Category'));
        })
        .then(post => {
            if (!post) throw new Error('Post Not Found');
            return Comment.create(authorUid, contents, image, category, to);
        })
        .then(comment => {
            res.sendStatus(201);
        })
        .catch(err => {
            if (err.message == 'Post Not Found' || err.message == 'Invalid Category') res.status(400).json({
                "message": err.message
            });
            else res.status(500).json({
                "message": err.message
            });
        })
}

exports.reviseComment = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const commentId = req.params.commentId;
    const {
        contents,
        image
    } = req.body;

    Comment.findById(commentId)
        .then(comment => {
            if (!comment) throw new Error('Comment Not Found');
            else if (comment.author != authorUid) throw new Error('Forbidden');
            else return comment.update({
                "$set": {
                    contents,
                    image
                }
            })
        })
        .then(updated => {
            res.sendStatus(200);
        })
        .catch(err => {
            if (err.message == 'Forbidden') res.sendStatus(403);
            else if (err.message == 'Comment Not Found') res.status(400).json({
                "message": err.message
            });
            else res.status(500).json({
                "message": err.message
            });
        })
}

exports.dropComment = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const commentId = req.params.commentId;
    const {
        contents,
        image
    } = req.body;

    Comment.findById(commentId)
        .then(comment => {
            if (!comment) throw new Error('Comment Not Found');
            else if (comment.author != authorUid) throw new Error('Forbidden');
            else return comment.remove();
        })
        .then(removed => {
            res.sendStatus(200);
        })
        .catch(err => {
            if (err.message == 'Forbidden') res.sendStatus(403);
            else if (err.message == 'Comment Not Found') res.status(400).json({
                "message": err.message
            });
            else res.status(500).json({
                "message": err.message
            });
        })
}