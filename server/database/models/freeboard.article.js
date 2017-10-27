const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let freeboardArticle = Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	title: { type: String, required: true },
	author: { type: String, required: true },
	tags: [{ type: String }],
	images: [{ type: String }],
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    writeDate: { type: String, required: true }
 }, { 'collection': 'Freeboard' });

module.exports = mongoose.model('Freeboard', freeboardArticle);