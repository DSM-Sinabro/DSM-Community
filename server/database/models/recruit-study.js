let mongoose = require('mongoose');

let Schema = mongoose.Schema;

const Comment = require('./comment.js');
const User = require('./user.js');

let recruit_study = Schema({
    _id: { type : Number, required: true, unique: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    recruitmentNumber: { type: Number, required: true },
    currentRecruitment: { type: Number, required: true, default: 0 },
    writeDate: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
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
recruit_study.statics.createPost = function(writer, title, contents, recruitmentNumber,startDate,endDate,tags,images){
    const date = new Date();
    const createdAt = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()+" "+
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
                    "author": writer,
                    "title": title,
                    "contents": contents,
                    "recruitmentNumber": recruitmentNumber,
                    "writeDate": createdAt,
                    "startDate": startDate,
                    "endDate": endDate,
                    "tags": tags,
                    "images": images
                });
                // console.log("here:");
                
                resolve(post.save());
            })
            .catch(error => reject(error))
    });
}
recruit_study.statics.readPost = function(pid){
    return this.findOne({'_id' : pid});
}
recruit_study.statics.getpostList = function(){
    return this.find({});
}
recruit_study.statics.revisePost = function(pid, writer,startDate,endDate, title, contents, recruitmentNumber,tags,images){
    return this.findOneAndUpdate(
        {
            '_id' : pid
        },
        {
            'title' : title,
            'contents' : contents,
            'recruitmentNumber' : recruitmentNumber,
            'startDate' : startDate,
            'endDate' : endDate,
            'tags' : tags,
            'images' : images
        },
        { 
              new: true 
        });
    
}
recruit_study.statics.dropPost = function(pid){
    return this.findOneAndRemove({'_id' : pid})
}
module.exports = mongoose.model('Recruit-Study', recruit_study);