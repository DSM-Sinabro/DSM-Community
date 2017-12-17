const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = require('./comment');

let notice = Schema({
    _id: { type : Number, required: true, unique: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    writeDate: { type: String, required: true },
    tags: [{type: String}],
    images: { type: Array, required: true, default: new Array },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    views: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {collection: 'Notice'})

notice.pre('remove', function (next) {
    Comment.remove({ "category": "Notice", "to": this._id }).exec();//
    next();
});

notice.post('save',function (next) { 
    User.findById(this.author)
        .then(user => {
            if (user && user.noticePosts.indexof(this._id) < 0) {
                user.noticePosts.push(this._id);
                user.markModified('noticePosts');
                user.save();
            }
        })
        .catch(err =>{
            console.log(err);
        })
});

notice.post('remove',function() {
    User.findById(this.author)
        .then(user => {
            if(user) {
                const index = user.noticePosts.indexOf(this._id);
                if (index != -1) {
                    user.noticePosts.splice(indes, 1);
                    user.markModified('noticePosts');
                    user.save();
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
});

//method 추가


module.exports = mongoose.model('Notice', notice);