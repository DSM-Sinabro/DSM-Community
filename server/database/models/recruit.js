let mongoose = require('mongoose');

let schema = mongoose.Schema({
    index : { type : Number, required : true, unique : true },
    title : { type : String, required : true },
    writter : { type : Schema.ObjectId, ref : 'User', required : true },
    enable : { type : { "sw" : Boolean, "emb" : Boolean, "sec" : Boolean }, required : true },
    createDate : { type : String, required : true, default : getDateTimeNow() },
    startDate : { type : String, required : true, default : getDateNow() },
    endDate : { type : String, required : true },
    limit : { type : Number, required : true },
    now : { type : Number, required : true, default : 0 },
    uploaded : [{ type : String, required : true }],
    expected : { type : String, required : true }
}, { collection : 'Recruit'});

function getDateTimeNow(){
    let date = new Date();

    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()+" "+
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function getDateNow(){
    let date = new Date();

    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}