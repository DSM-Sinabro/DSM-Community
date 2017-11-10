const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let freeboardArticle = Schema({
	_id : { type: Number, required: true, unique: true },
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	title: { type: String, required: true },
	contents: { type: String, required: true },
	tags: [{ type: String }],
	images: [{ type: String }],
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    writeDate: { type: String, required: true },
	views: [{ type: Schema.Types.ObjectId, ref: 'User' }]
 }, { 'collection': 'Freeboard' });

freeboardArticle.virtual('comment-count').get(() => {
	return this.comments.length;
});
freeboardArticle.virtual('views-count').get(() => {
	return this.views.length;
});
freeboardArticle.statics.create = function (authorUid, title, contents, tags, images) {
    const date = new Date();
    const writeDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const Post = this;

    return new Promise((resolve, reject) => {
        Post.find({}, { "_id": true }).sort({ "_id": -1 }).limit(1)
            .then(cursor => {
                return cursor[0] ? cursor[0]._id + 1 : 1;
            })
            .then(_id => {
                const post = new Post({
                    "_id": _id,
                    "user": authorUid,
                    "title": title,
                    "contents": contents,
                    "writeDate": writeDate,
                    "tags": tags,
                    "images": images,
                    "comments": [],
					"views": 0
                });
                resolve(post.save());
            })
            .catch(err => reject(err))
    })
}

module.exports = mongoose.model('Freeboard', freeboardArticle);