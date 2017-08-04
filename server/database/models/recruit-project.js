let mongoose = require('mongoose');

let schema = mongoose.Schema({
    index : { type : Number, required : true, unique : true },
    title : { type : String, required : true },
    enable : { type : { "sw" : Boolean, "emb" : Boolean, "sec" : Boolean }, required : true },
    createDate : { type : String, required : true, default : getDateTimeNow() },
    startPeriod : { type : String, required : true, default : getDateNow() },
    endPeriod : { type : String, required : true },
    users : { type : Number, required : true },
    now : { type : Number, required : true, default : 0 },
    images : [{ type : String }],
    option : { type : String, required : true },
    content : { type : String, required : true },
    writter : { type : Schema.ObjectId, ref : 'User', required : true },
    receipted : [{ type : Schema.ObjectId, ref : 'Application-Project' }]
}, { collection : 'Recruit-Project'});

function getDateTimeNow(){
    let date = new Date();

    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()+" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function getDateNow(){
    let date = new Date();

    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

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