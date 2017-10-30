let mongoose = require('mongoose');
let database = {};

database.init = function (app) {
    connect(app);
}

function connect(app) {

    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://127.0.0.1:27017/test");
    database.connection = mongoose.connection;
    database.connection.on('error', console.error.bind(console, 'mongoose connection error.'));
    database.connection.on('open', function () {
        console.log('데이터베이스에 연결되었습니다. : ' + "mongodb://127.0.0.1:27017/test");

    });
    database.connection.on('disconnected', () => {
        connect(app)
    });
}


module.exports = database;