let mongoose = require('mongoose');
let date = require('../..//util/date');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');
let schema = Schema({
    _id : { type : String, required : true, unique : true }, // uid
    name : { type : String, required : true },
    cardinal : { type : Number, required : true, default : null }, // 기수
    code : { type : String, unique : true }, // 식별코드 : dsm201646
    id : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    createdAt : { type : String, required : true, default : date.getDateTimeNow() }
}, { collection : 'User'});

schema.methods.createUUID = function(){
    let coll = this;
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    
    while(true){
        let result = this.model('User').find({ "uid" : uuid }).count(function(err, count){        
            if(count === 0) return uuid;
            else return null;
        });
        if(result !== null) break;
    }

    return uuid;
};

// password를 암호화
schema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// password의 유효성 검증
schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', schema);