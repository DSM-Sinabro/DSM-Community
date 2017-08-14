let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let schema = Schema({
    title : { type : String, required : true },
    major : { type : { "common" : Boolean, "sw" : Boolean, "emb" : Boolean, "sec" : Boolean }, required : true },
    createdAt : { type : String, required : true },
    startPeriod : { type : String, required : true },
    endPeriod : { type : String, required : true },
    users : { type : Number, required : true },
    now : { type : Number, required : true, default : 0 },
    images : [{ type : String}],
    option : { type : String, required : true },
    content : { type : String, required : true },
    writer : { type : Schema.Types.ObjectId, ref : 'User', required : true },
    receipted : [{ type : Schema.ObjectId, ref : 'Application-Study' }],
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

schema.statics.findAll = function(){
    console.log('dasds');
    return this.find({}, {
        content: false,
        images: false,
        startPeriod : false,
        endPeriod : false,
        __v : false,
        receipted : false,

    }).populate('writer',['name']).sort({ createdAt : 1 }).exec();
}

module.exports = mongoose.model('Recruit-Study', schema);