let mongoose = require('mongoose');
let database = {};

database.init = function () {
    connect();
}

function connect() {

    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.DSM_COMMUNITY_DB_URL);
    database.connection = mongoose.connection;
    database.connection.on('error', console.error.bind(console, 'mongoose connection error.'));
    database.connection.on('open', function () {
        console.log('데이터베이스에 연결되었습니다. : ' + process.env.DSM_COMMUNITY_DB_URL);

    });
    database.connection.on('disconnected', () => {
        setTimeout(function() {
            connect();
        }, 5000);
    });
}


module.exports = database;