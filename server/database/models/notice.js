const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = require('./comment');

let notice = Schema({
    _id: { type : Number, required: true, unique: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    writeDate: { type: String, required: true },
    tags: { type: Array, required: true, default: new Array },
    images: { type: Array, required: true, default: new Array },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    views: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    collection: 'Notice'
})

notice.pre('remove', function (next) {
    Comment.remove({ "category": "Notice", "to": this._id }).exec();
    next();
});

module.exports = mongoose.model('Notice', notice);