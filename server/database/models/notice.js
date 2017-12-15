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
<<<<<<< HEAD
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    collection: 'Notice'
})

notice.pre('remove', function (next) {
    Comment.remove({ "category": "Notice", "to": this._id }).exec();
    next();
});

=======
}, {collection: 'Notice'})

notice.pre('remove', function (next) {
    Comment.remove({ "category": "Notice", "to": this._id }).exec();//
    next();
});

notice.post('save',function (next) { 
    User.findById(this.author)
        .then(user => {
            if (user && user.studyPosts.indexof(this._id) < 0) {
                user.studyPosts.push(this._id);
                user.markModified('studyPosts');
                user.save();
            }
        })
        .catch(err =>{
            console.log(err);
        })
});



//method 추가


>>>>>>> parent of 107c4885... [안드로이드] 바텀시트 추가
module.exports = mongoose.model('Notice', notice);