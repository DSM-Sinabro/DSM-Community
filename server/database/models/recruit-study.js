let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let schema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    recruitmentNumber: { type: Number, required: true },
    currentRecruitment: { type: Number, required: true, default: 0 },
    writeDate: { type: String, required: true },
    tags: [{ type: String }],
    images: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    views: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { collection : 'Recruit-Study'});

schema.statics.create = function(title, major, startPeriod, endPeriod, users, option, content, writer){
    const date = new Date();
    
    const createdAt = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()+" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    const post = new this({
        title,
        major,
        startPeriod,
        endPeriod,
        users,
        option,
        content,
        writer,
        createdAt
    });
    
    return post.save();
}

module.exports = mongoose.model('Recruit-Study', schema);