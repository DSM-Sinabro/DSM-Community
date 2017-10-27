const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let notice = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    writeDate: { type: String, required: true },
    tags: { type: Array, required: true, default: new Array },
    images: { type: Array, required: true, default: new Array },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    views: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    collection: 'Notice'
})

module.exports = mongoose.model('Notice', notice);