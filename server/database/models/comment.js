const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let comment = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    writeDate: { type: String, required: true },
    contents: { type: String, required: true },
    image: { type: String, unique: true }
}, {
    collection: 'Comment'
});

module.exports = mongoose.model('Comment', comment);