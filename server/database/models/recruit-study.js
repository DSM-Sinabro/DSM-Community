let mongoose = require('mongoose');
let date = require('../../util/date');
let Schema = mongoose.Schema;
let schema = Schema({
    pIndex : { type : Number, required : true, unique : true },
    title : { type : String, required : true },
    major : { type : { "common" : Boolean, "sw" : Boolean, "emb" : Boolean, "sec" : Boolean }, required : true },
    createDate : { type : String, required : true, default : date.getDateTimeNow() },
    startPeriod : { type : String, required : true, default : date.getDateNow() },
    endPeriod : { type : String, required : true },
    users : { type : Number, required : true },
    now : { type : Number, required : true, default : 0 },
    images : [{ type : String }],
    option : { type : String, required : true },
    content : { type : String, required : true },
    writter : { type : Schema.Types.ObjectId, ref : 'User', required : true },
    receipted : [{ type : Schema.ObjectId, ref : 'Application-Study' }],
}, { collection : 'Recruit-Study'});

schema.static('countUp', function(index, callback){
    this.findOne({'index' : index}, function(err, doc){
        if (typeof err === "undefined") callback(false);
        else if (doc.length === 1) {
            doc.now += 1;
            callback(true);
        }
    })
});

schema.static('countDown', function(index, callback){
    this.findOne({'index' : index}, function(err, doc){
        if (typeof err === "undefined") callback(false);
        else if (doc.length === 1) {
            doc.now -= 1;
            callback(true);
        }
    })
});

module.exports = mongoose.model('Recruit-Study', schema);